import { IBlog } from "./blog.interface";
import { blogModel } from "./blog.model";

const createBlogIntoDB = async (payload: IBlog) => {
    const result = await blogModel.create(payload);
    return result;
};

export const BlogServices = {
    createBlogIntoDB,
};