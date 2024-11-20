import httpStatus from "http-status";
import catchAsync from "../../utils/catcgAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";


const createBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.createBlogIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course is created succesfully',
        data: result,
    });
});

export const BlogControllers = {
    createBlog,
};