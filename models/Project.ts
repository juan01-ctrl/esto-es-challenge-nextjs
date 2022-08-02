import mongoose, {Model, Schema} from "mongoose";
import { Project } from '../interfaces/Project';

interface IProject extends Project {}

const projectSchema = new Schema({
projectName:{type:String},
description:{type:String},
assignedTo:{type:String},
projectManager:{type:String},
createdAt:{type:String},
status:{
    type:String,
    enum:{
        values:['Pending','In Progress','Finished'],
        message:'${VALUE} no es un estado permitido'
    }
}
})

const ProjectModel:Model<IProject> = mongoose.models.Project || mongoose.model('Project',projectSchema)

export default ProjectModel