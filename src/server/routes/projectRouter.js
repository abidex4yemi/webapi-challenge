import express from 'express';
import { getProjectById, addProject, updateProject, deleteProject } from '../controllers/project';
import { validateProjectParam, validateProjectBody } from '../middleware';

const router = express.Router();

// Validate any request url parameter (id) to project route
// `Note: router.param()` is a native method of express router
router.param('id', validateProjectParam);

router.route('/projects').post(validateProjectBody, addProject);

router
	.route('/projects/:id')
	.get(getProjectById)
	.put(validateProjectBody, updateProject)
	.delete(deleteProject);

export { router as projectRouter };
