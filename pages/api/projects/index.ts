import type { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../../interfaces/Project";
import ProjectModel from "../../../models/Project";
import { disconnect, connect } from "../../../database/db";
import  { formatAMPM,formatDate } from "../../../utils/formatDate";

type Data =
  | {
      message: string;
    }
  | Project
  | Project[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProjects(res);
    case "POST":
      return postProjects(req, res);
    default:
      return res.status(400).json({ message: "invalid endpoint" });
  }
}

const getProjects = async (res: NextApiResponse<Data>) => {
  await connect();
  const projects = await ProjectModel.find().sort({ createdAt: "ascending" });
  await disconnect();

  res.status(200).json(projects);
};

const postProjects = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const {
    projectName = "",
    description = "",
    assignedTo = "",
    projectManager = "",
    status = "Pending",
  } = req.body;

  const newProject = new ProjectModel({
    projectName,
    description,
    status,
    assignedTo,
    projectManager,
    createdAt: `${formatDate(new Date) +" "+" "+ formatAMPM(new Date)}`,
  });

  try {
    await connect();
    await newProject.save();
    await disconnect();

    res.status(201).json(newProject);
  } catch (error) {
    await disconnect();
    console.log(error);
    return res.status(400).json({ message: "Algo salió mal" });
  }
};

