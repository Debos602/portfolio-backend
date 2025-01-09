import express from 'express';
import { UserControllers } from './user/user.controller';
import auth from '../Middlewar/auth';
import { SkillControllers } from './skill/skill.controller';
import { BlogControllers } from './Blog/blog.controller';
import { ExperienceControllers } from './experience/experience.controller';
import { ProjectsControllers } from './projects/project.controller';
import { multerUpload } from '../config/multer.config';

const router = express.Router();
//Auth-------------
router.post('/auth/signup', UserControllers.SignUp);
router.post('/auth/signin', UserControllers.SignIn);
router.post('/auth/forget-password', UserControllers.forgetPassword);
router.post('/auth/reset-password', UserControllers.resetPassword);
router.post('/auth/refresh-token', UserControllers.refreshToken);
//skills-----------
router.post('/skills', auth('admin'), SkillControllers.AddSkill);
router.get('/skills', SkillControllers.getSkill);
router.delete('/delete-skills/:_id', auth('admin'), SkillControllers.deleteSkill);
router.patch('/update-skills', auth('admin'), SkillControllers.updateSkill);

//blog------------
router.post('/blogs', multerUpload.single("image"), auth('admin'), BlogControllers.createBlog);
router.get('/blogs', BlogControllers.getBlog);
router.patch('/update-blogs', multerUpload.single("image"), auth('admin'), BlogControllers.updateBlog);
router.delete('/delete-blogs/:_id', auth('admin'), BlogControllers.deleteBlog);
// experience-------------
router.get('/experience', ExperienceControllers.getExperienceFromDb);
router.post('/experience', auth('admin'), ExperienceControllers.createExperienceIntoDB);
router.delete('/delete-experience/:_id', auth('admin'), ExperienceControllers.deleteExperienceFromDb);
router.patch('/update-experience', ExperienceControllers.updateExperience);
//project----------------
router.post('/project', auth('admin'), ProjectsControllers.createProject);
router.get('/project', ProjectsControllers.getProject);
router.delete('/delete-project/:_id', auth('admin'), ProjectsControllers.deleteProjectFromDb);
router.patch('/update-project', auth('admin'), ProjectsControllers.deleteProjectFromDb);

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
