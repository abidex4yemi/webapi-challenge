import express from 'express';
import { validateActionParam, validateActionBody } from '../middleware';
import { getActionById, addAction, updateAction, deleteAction } from '../controllers/actions';

const router = express.Router();

// Validate any request url parameter (id) to action route
// `Note: router.param()` is a native method of express router
router.param('id', validateActionParam);

router.route('/actions').post(validateActionBody, addAction);

router
	.route('/actions/:id')
	.get(getActionById)
	.put(validateActionBody, updateAction)
	.delete(deleteAction);

export { router as actionRouter };
