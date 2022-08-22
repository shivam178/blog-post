import { Router } from 'express';
import { addBlog, getBlogs } from '../../controller/blogs';

const dashboardRouter = Router();

dashboardRouter.route('/blogs').get(getBlogs).post(addBlog);

export default dashboardRouter;
