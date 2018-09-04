export const create = (): Promise<string> => {
  return Promise.resolve('token');
};

export const validate = (): Promise<void> => {
  return Promise.resolve();
};