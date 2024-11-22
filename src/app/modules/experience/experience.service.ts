import { TExperience } from "./experience.interface";
import { ExperienceModel } from "./experience.model";



const createExperience = async (payload: TExperience) => {
    const result = await ExperienceModel.create(payload);
    return result;
};
const getExperience = async () => {
    const result = await ExperienceModel.find();
    return result;
};

const updateExperience = async (_id: string, payload: TExperience) => {
    const result = await ExperienceModel.findByIdAndUpdate(_id, payload, { new: true });
    return result;
};
const deleteExperience = async (_id: string) => {
    const result = await ExperienceModel.findByIdAndDelete(_id);
    return result;
};


export const ExperienceServices = {
    createExperience,
    getExperience,
    updateExperience,
    deleteExperience
};