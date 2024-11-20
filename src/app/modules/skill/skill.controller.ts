import httpStatus from "http-status";
import catchAsync from "../../utils/catcgAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillServices } from "./skill.service";

const AddSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.createskillIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is created succesfully',
    data: result,
  });
});

export const SkillControllers = {
  AddSkill,
};