import mongoose, { Document, Schema } from 'mongoose';

/**
 * Structure of the project document
 */

interface IProject extends Document {
  title: string;
  description: string;
}

/**
 * Schema for projects
 */
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: false,
  },
  description: {
    type: String,
    required: false,
    unique: false,
  },
});
/**
 * Project Model used to perform CRUD operations
 * https://github.com/TomDoesTech/REST-API-Tutorial-Updated
 */
const ProjectModel = mongoose.model<IProject>('Project', ProjectSchema);
export default ProjectModel;
