import express from 'express';
import { UserControllers } from './user/user.controller';
import auth from '../Middlewar/auth';
import { SkillControllers } from './skill/skill.controller';
import { BlogControllers } from './Blog/blog.controller';
import { ExperienceControllers } from './experience/experience.controller';
import { ProjectsControllers } from './projects/project.controller';

const router = express.Router();
//Auth-------------
router.post('/auth/signup', UserControllers.SignUp);
router.post('/auth/signin', UserControllers.SignIn);
router.post('/auth/forget-password', UserControllers.forgetPassword);
router.post('/auth/reset-password', UserControllers.resetPassword);
router.post('/auth/refresh-token', UserControllers.refreshToken);
//skills-----------
router.post('/skills', SkillControllers.AddSkill);
router.get('/skills', SkillControllers.getSkill);
router.delete('/delete-skills/:_id', SkillControllers.deleteSkill);
router.patch('/update-skills', SkillControllers.updateSkill);
router.delete('/delete-skills/:_id', SkillControllers.getSkill);
router.patch('/update-skills', SkillControllers.getSkill);
//blog------------
router.post('/blogs', BlogControllers.createBlog);
router.get('/blogs', BlogControllers.getBlog);
router.patch('/update-blogs', BlogControllers.updateBlog);
router.delete('/delete-blogs/:_id', BlogControllers.deleteBlog);
// experience-------------
router.get('/experience', ExperienceControllers.getExperienceFromDb);
router.post('/experience', ExperienceControllers.createExperienceIntoDB);
router.delete('/delete-experience/:_id', ExperienceControllers.deleteExperienceFromDb);
router.patch('/update-experience', ExperienceControllers.updateExperience);
//project----------------
router.post('/project', ProjectsControllers.createProject);
router.get('/project', ProjectsControllers.getProject);
router.delete('/delete-project/:_id', ProjectsControllers.deleteProjectFromDb);
router.patch('/update-project', ProjectsControllers.deleteProjectFromDb);

//user----------
router.get('/auth/all-users', auth('admin'), UserControllers.getAllUserFromDb);
router.get('/auth/admin', auth('admin'), UserControllers.getAdminFromDb);
router.get('/auth/user', auth('user'), UserControllers.getUserFromDb);
router.put('/auth/update-user', auth('user'), UserControllers.updateUserinDb);
router.put(
  '/auth/update-role/:userId',
  auth('admin'),
  UserControllers.updateUserRoleInDb,
);


export const UserRoutes = router;
