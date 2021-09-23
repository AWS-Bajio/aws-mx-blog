// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, EventAuthor, Author, AuthorPost, Post, PostTag, Tag } = initSchema(schema);

export {
  Event,
  EventAuthor,
  Author,
  AuthorPost,
  Post,
  PostTag,
  Tag
};