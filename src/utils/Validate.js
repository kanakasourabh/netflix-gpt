export const checkValidate = (email, password, name) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

//   const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

  if (!isEmailValid) return "Invalid Email Id";
  if (!isPasswordValid) return "Invalid Password";
//   if (!isNameValid) return "Invalid Name";

  return null;
};
