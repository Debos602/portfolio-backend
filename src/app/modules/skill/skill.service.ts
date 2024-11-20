import { TSkill } from "./skill.interface";
import { SkillModel } from "./skill.model";

const createskillIntoDB = async (payload: TSkill) => {
  const result = await SkillModel.create(payload);
  return result;
};

export const SkillServices = {
  createskillIntoDB,
};