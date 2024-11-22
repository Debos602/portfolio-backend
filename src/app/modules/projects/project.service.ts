import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";


const createProject = async (payload: TProject) => {
    const result = await ProjectModel.create(payload);
    return result;
};

const getProject = async () => {
    const result = await ProjectModel.find();
    return result;
};

const updateProject = async (_id: string, payload: TProject) => {
    const result = await ProjectModel.findByIdAndUpdate(_id, payload, { new: true });
    return result;
};
const deleteProject = async (_id: string) => {
    const result = await ProjectModel.findByIdAndDelete(_id);
    return result;
};

export const ProjectServices = {
    createProject,
    getProject,
    updateProject,
    deleteProject
};