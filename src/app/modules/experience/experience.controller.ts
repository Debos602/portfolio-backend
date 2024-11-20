
import httpStatus from "http-status";
import catchAsync from "../../utils/catcgAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.service";



const createExperienceIntoDB = catchAsync(async (req, res) => {
    const result = await ExperienceServices.createExperienceIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course is created succesfully',
        data: result,
    });
});

export const ExperienceControllers = {
    createExperienceIntoDB,
};