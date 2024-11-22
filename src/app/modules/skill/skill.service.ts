import { TSkill } from "./skill.interface";
import { SkillModel } from "./skill.model";

const createskillIntoDB = async (payload: TSkill) => {
  const result = await SkillModel.create(payload);
  return result;
};

const getskillFromDB = async () => {
  const result = await SkillModel.find();
  return result;
};
const updateskillFromDB = async (_id: string, payload: TSkill) => {
  const result = await SkillModel.findByIdAndUpdate(_id, payload, { new: true });
  return result;
};
const deleteskillFromDB = async (_id: string) => {
  const result = await SkillModel.findByIdAndDelete(_id);
  return result;
};

export const SkillServices = {
  createskillIntoDB,
  getskillFromDB,
  updateskillFromDB,
  deleteskillFromDB
};