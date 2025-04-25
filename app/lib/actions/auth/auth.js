"use server";

export const loginAsync = async (state, formData) => {
  const data = {
    username: formData.get("username"),
    password: formData.get("password"),
  };

  if (data.username != "admin" && data.password != "admin") {
    return {
      errors: {},
      message: "X Invalid Credentials!",
      formData: {
        ...data,
      },
    };
  } else {
  }

  return {
    errors: {},
    message: null,
    formData: {
      ...data,
    },
  };
};
