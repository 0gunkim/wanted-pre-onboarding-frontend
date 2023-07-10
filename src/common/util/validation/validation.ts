export const validEmail = (email: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
};
export const validPassword = (password: string) => {
  const regex = /^.{8,}$/;
  return regex.test(password);
};
