import express from 'express';
import { validateActionParam, validateActionBody } from '../middleware';
import { getActionById, addAction, updateAction } from '../controllers/actions';

const router = express.Router();

// Validate any request url parameter (id) to action route
// `Note: router.param()` is a native method of express router
router.param('id', validateActionParam);

router
	.route('/actions/:id')
	.get(getActionById)
	.put(validateActionBody, updateAction);

router.route('/actions').post(validateActionBody, addAction);

export { router as actionRouter };
