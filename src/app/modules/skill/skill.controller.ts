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

const getSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.getskillFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is retrieved succesfully',
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.deleteskillFromDB(req.params._id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is deleted succesfully',
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const result = await SkillServices.updateskillFromDB(req.body._id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Skill is updated succesfully',
    data: result,
  });
});

export const SkillControllers = {
  AddSkill,
  getSkill,
  deleteSkill,
  updateSkill
};