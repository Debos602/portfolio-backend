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

const getProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.getProject();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project link is retrieved succesfully',
        data: result,
    });
});

const deleteProjectFromDb = catchAsync(async (req, res) => {
    const result = await ProjectServices.deleteProject(req.params._id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project link is deleted succesfully',
        data: result,
    });
});
const updateProjectInDb = catchAsync(async (req, res) => {
    const result = await ProjectServices.updateProject(req.body, req.body._id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project link is updated succesfully',
        data: result,
    });
});

export const ProjectsControllers = {
    createProject,
    getProject,
    deleteProjectFromDb,
    updateProjectInDb
};