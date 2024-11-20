import { TExperience } from "./experience.interface";
import { ExperienceModel } from "./experience.model";



const createExperienceIntoDB = async (payload: TExperience) => {
    const result = await ExperienceModel.create(payload);
    return result;
};

export const ExperienceServices = {
    createExperienceIntoDB,
};