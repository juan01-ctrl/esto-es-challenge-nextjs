import * as Yup from "yup";
//* FORM SCHEMA
export const validateNewProject = Yup.object({
  projectName: Yup.string()
    .max(20, "Must be 15 characters or less")
    .min(4, "'Project Name' is too short")
    .required("'Project Name' is required"),
  description: Yup.string()
    .min(6, "'Description' must be at least 6 characters")
    .required("'Description' is required"),
  projectManager: Yup.string()
    .required("'Project Manager' is required"),
  assignedTo: Yup.string()
    .required("'Assigned To' is required"),
  status: Yup.string()
  .oneOf(["Pending", "In Progress", "Finished"], "You must select a Status")
    .required("'Status' is required"),
});
