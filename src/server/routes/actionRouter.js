import express from 'express';
import { validateActionParam } from '../middleware';
import { getActionById } from '../controllers/actions';

const router = express.Router();

// Validate any request url parameter (id) to action route
router.param('id', validateActionParam);

router.route('/actions/:id').get(getActionById);

export { router as actionRouter };
