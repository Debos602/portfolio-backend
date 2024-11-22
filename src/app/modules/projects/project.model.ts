import mongoose, { Schema } from 'mongoose';
import { TProject } from './project.interface';



const ProjectSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: true,
        },
        githubLinkFrontend: {
            type: String,
            required: true,
            validate: {
                validator: (v: string) => {
                    return /^https?:\/\/(www\.)?github\.com\/.+/.test(v);
                },
                message: 'Invalid GitHub link format.',
            },
        },
        githubLinkBackend: {
            type: String,
            required: true,
            validate: {
                validator: (v: string) => {
                    return /^https?:\/\/(www\.)?github\.com\/.+/.test(v);
                },
                message: 'Invalid GitHub link format.',
            },
        },
        liveLink: {
            type: String,
            required: true,
            validate: {
                validator: (v: string) => {
                    return /^https?:\/\/.+/.test(v);
                },
                message: 'Invalid live link format.',
            },
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

export const ProjectModel = mongoose.model<TProject>('Project', ProjectSchema);


