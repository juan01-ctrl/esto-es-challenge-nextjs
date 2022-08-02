export interface Project{
_id?:string;
projectName?:string;
description?:string;
assignedTo?:string;
projectManager?:string;
createdAt?:string;
status?:string;
}

export type ProjectStatus = 'Pending' | 'In Progress' | 'Finished'