import { TProject } from "./project.interface";
import { ProjectModel } from "./project.model";




const createProject = async (payload: TProject) => {
    const result = await ProjectModel.create(payload);
    return result;
};

export const ProjectServices = {
    createProject,
};