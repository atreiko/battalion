import express from 'express'
import apiRoutes from '../api'
import cors from 'cors'

export default ({config}) => {
  const app = express()

  app.use(cors({
		origin: function (origin, callback) {
			// allow requests with no origin
			// (like mobile apps or curl requests)
			if (!origin) {
				return callback(null, true);
			}

			if (allowedOrigins.indexOf(origin) === -1) {
				const msg = 'The CORS policy for this site does not allow access from the specified Origin.';

				return callback(new Error(msg), false);
			}

			return callback(null, true);
		},
		credentials: true
	}));
  
  // load api routes
  app.use(`/api/v${config.VERSION}`, apiRoutes())

  return app
}