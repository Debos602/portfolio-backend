
import { model, Schema } from "mongoose";
import { TExperience } from "./experience.interface";

const ExperienceSchema = new Schema<TExperience>(
    {
        title: { type: String, required: true },
        company: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        description: { type: String, required: true },
        location: { type: String, required: true },
        role: { type: String, required: true },
        designation: { type: String, required: true },
        responsibilities: { type: String, required: true },
        technologies: { type: String, required: true },
    },
    {
        timestamps: true, // Automatically handles `createdAt` and `updatedAt`
    }
);

// Create the Mongoose model
export const ExperienceModel = model<TExperience>("Experience", ExperienceSchema);