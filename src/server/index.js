'use strict';
/**
 * Application Main file
 */
import 'babel-polyfill';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { allErrorHandler } from './middleware';
import { OK, createSuccess } from './util';
import { actionRouter } from './routes/actionRouter';
import { projectRouter } from './routes/projectRouter';

const app = express();

/**
 * Set up middleware
 */
app.use(express.json());
app.use(cors());
app.use(logger('dev'));
app.use(helmet());

app.get('/', (req, res) => {
	return res.status(OK).json(createSuccess({ message: 'Welcome to home route...', data: [] }));
});

app.use('/api/v1', [actionRouter, projectRouter]);

// Handle invalid request
app.all('*', (req, res) => {
	return res.status(404).json({
		success: false,
		message: 'Route does not exist...',
		body: []
	});
});

// handle all application error
app.use(allErrorHandler());

export default app;
