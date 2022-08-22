import { Request, Response } from 'express';
import { addBlogsDb, getBlogsDb } from '../db/datalayer/blogs';
import { createResponse } from '../utils/helper';

export const getBlogs = async (req: Request, res: Response) => {
  const contacts = await getBlogsDb({
    limit: Number(req.params.limit),
    page: Number(req.params.page),
  });
  if (contacts.err) {
    return res.status(400).json(createResponse(400, null, contacts.err, contacts.err.message));
  }
  return res.status(200).json(createResponse(200, contacts.data, null, ''));
};

export const addBlog = async (req: Request, res: Response) => {
  const { postTitle, postData } = req.body;
  const dbRes = await addBlogsDb([
    {
      postTitle,
      postData,
    },
  ]);
  if (dbRes.err) {
    return res.status(400).json(createResponse(400, null, dbRes.err, dbRes.err.message));
  }
  return res.status(200).json(createResponse(200, null, null, ''));
};
