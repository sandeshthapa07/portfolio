import * as Yup from 'yup';

export const schema = Yup.object().shape({
  DATABASE_URL: Yup.string().required(),
  DATABASE_NAME: Yup.string().required(),
  DATABASE_PASSWORD: Yup.string().required(),
});

export type Env = Yup.InferType<typeof schema>;

declare namespace NodeJS {
  export type ProcessEnv = Env;
}
