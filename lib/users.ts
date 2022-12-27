import axios from "axios";

export const getUserById = async (token: string, id: any) => {
  const user: any = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/user/${id}`, {
      headers: {
        "x-access-token": token,
      },
    })
    .catch((error: TypeError) => {
      console.error(error);
    });

  return user.data;
};

export const updateUserById = async (token: string, id: any, data: any) => {
  const user: any = await axios
    .put(
      `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
      {
        ...data,
      },
      {
        headers: {
          "x-access-token": token,
        },
      }
    )
    .catch((error: TypeError) => {
      console.error(error);
    });

  return user.data;
};
