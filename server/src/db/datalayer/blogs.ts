import { Blogs } from '../../models';
import { dbRes } from '../../interfaces/dbRes';

export const getBlogsDb = async ({ limit, page }: { limit: number; page: number }) => {
  const res: dbRes = {
    err: null,
    data: null,
    message: null,
  };
  try {
    const contacts = await Blogs.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    res.data = contacts;
  } catch (error) {
    console.log('Error while finding contact with user id', error);
    res.err = error;
  }
  return res;
};

export const addBlogsDb = async (blogs: any[]) => {
  const res: dbRes = {
    err: null,
    data: null,
    message: null,
  };
  try {
    const newContacts = await Blogs.insertMany(blogs);
    res.data = newContacts;
  } catch (error) {
    console.log('Error while adding contact', error);
    res.err = error;
  }
  return res;
};
