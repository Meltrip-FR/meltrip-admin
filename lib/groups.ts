import axios from "axios";

export const getGroupById = async (id: string) => {
  const group: any = await axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/group/${id}`)
    .catch((error: TypeError) => {
      console.error(error);
    });

  return group.data;
};

export const updateGroupbyId = async (id: any, data: any) => {
  const group: any = await axios
    .put(`${process.env.NEXT_PUBLIC_API_URL}/group/${id}`, {
      ...data,
    })
    .catch((error: TypeError) => {
      console.error(error);
    });

  return group.data;
};
