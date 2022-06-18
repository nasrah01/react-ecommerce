const nameRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,20}$/;
const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;

export const inputValidation = (string) => {
  let errors = {};

  if(!string.forename) {
    errors.forename = "Name is required"
  } else if (!nameRegex.test(string.forename)) {
    errors.forename = "Must include at least 3 characters"
  }

  if (!string.surname) {
    errors.surname = "Surname is required";
  } else if (!nameRegex.test(string.surname)) {
    errors.surname = "Must include at least 3 characters";
  }

  if (!string.username) {
    errors.username = "Username is required";
  } else if (!nameRegex.test(string.username)) {
    errors.username = "Must include at least 3 characters";
  }

  if (!string.password) {
    errors.password = "Password required";
  } else if (!passwordRegex.test(string.password)) {
    errors.password = "Must be at least 8 characters and 1 number";
  }

  if (!string.confirmPassword) {
    errors.confirmPassword = "Confirm password required";
  } else if (string.password !== string.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  
  return errors;
};
