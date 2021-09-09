// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, Author, AuthorPost, Post, PostTag, Tag } = initSchema(schema);

export {
  Event,
  Author,
  AuthorPost,
  Post,
  PostTag,
  Tag
};