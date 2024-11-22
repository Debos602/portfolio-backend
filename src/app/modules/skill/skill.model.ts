import { Schema, model } from 'mongoose';
import { TSkill } from './skill.interface';

const userSchema = new Schema<TSkill>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

  },
  {
    timestamps: true,
  },
);



export const SkillModel = model<TSkill>('Skill', userSchema);
