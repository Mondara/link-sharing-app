export const emailValidator = (email: string) => {
  const regexEmailStr = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexEmail = new RegExp(regexEmailStr);

  return regexEmail.test(email);
};
