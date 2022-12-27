import axios from "axios";

export const getSeminarById = async (token: string, id: any) => {
  const seminar: any = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/seminar/${id}`, {
      headers: {
        "x-access-token": token,
      },
    })
    .catch((error: TypeError) => {
      console.error(error);
    });

  return seminar.data;
};

export const updateSeminarById = async (token: string, id: any, data: any) => {
  const seminar: any = await axios
    .put(
      `${process.env.NEXT_PUBLIC_API_URL}/seminar/${id}`,
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

  return seminar.data;
};
