
import httpStatus from "http-status";
import catchAsync from "../../utils/catcgAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.service";



const createExperienceIntoDB = catchAsync(async (req, res) => {
    const result = await ExperienceServices.createExperience(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Experience is created succesfully',
        data: result,
    });
});

const getExperienceFromDb = catchAsync(async (req, res) => {
    const result = await ExperienceServices.getExperience();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Experience is created succesfully',
        data: result,
    });
});
const deleteExperienceFromDb = catchAsync(async (req, res) => {
    const result = await ExperienceServices.deleteExperience(req.params._id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Experience is created succesfully',
        data: result,
    });
});
const updateExperience = catchAsync(async (req, res) => {
    const result = await ExperienceServices.updateExperience(req.body._id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Experience is created succesfully',
        data: result,
    });
});

export const ExperienceControllers = {
    createExperienceIntoDB,
    getExperienceFromDb,
    deleteExperienceFromDb,
    updateExperience
};