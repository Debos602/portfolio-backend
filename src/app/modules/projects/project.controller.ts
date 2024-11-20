import httpStatus from "http-status";
import catchAsync from "../../utils/catcgAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";


const createProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.createProject(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project link is created succesfully',
        data: result,
    });
});

export const ProjectsControllers = {
    createProject,
};