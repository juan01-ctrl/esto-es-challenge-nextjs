import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { connect, disconnect } from "../../../database/db";
import ProjectModel from "../../../models/Project";
import { Project } from "../../../interfaces/Project";

type Data =
  | {
      message: string;
    }
  | Project;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "The Id is not valid " + id });
  }

  switch (req.method) {
    case "PUT":
      return updateProject(req, res, id);
    case "DELETE":
      return deleteProject(req, res, id);
    default:
      return res
        .status(400)
        .json({ message: `The method '${req.method}' is not valid` });
  }
}

const updateProject = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  id: string | string[] | undefined
) => {
  await connect();

  const projectToUpdate = await ProjectModel.findById(id);

  if (!projectToUpdate) {
    await disconnect();
    return res.status(400).json({ message: "The Id no exist " + id });
  }

  const {
    projectName = projectToUpdate.projectName,
    description = projectToUpdate.description,
    status = projectToUpdate.status,
    assignedTo = projectToUpdate.assignedTo,
    projectManager = projectToUpdate.projectManager,
  } = req.body;

  try {
    const updatedProject = await ProjectModel.findByIdAndUpdate(
      id,
      { projectName, description, status, assignedTo, projectManager },
      { runValidators: true, new: true }
    );
    await disconnect();

    res.status(200).json(updatedProject!);
  } catch (error: any) {
    console.log(error);
    await disconnect();
    res.status(400).json({ message: error.errors.status.message });
  }
};

const deleteProject = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  id: string | string[] | undefined
) => {
  await connect();
  try {
    await ProjectModel.deleteOne({ _id: id });
    await disconnect();
    res.status(200).json({ message: "project removed successfully" });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.errors.status.message });
  }
};
