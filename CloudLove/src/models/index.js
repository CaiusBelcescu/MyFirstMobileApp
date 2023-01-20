// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Genders = {
  "MALE": "MALE",
  "FELMALE": "FELMALE",
  "OTHER": "OTHER"
};

const { Match, User } = initSchema(schema);

export {
  Match,
  User,
  Genders
};