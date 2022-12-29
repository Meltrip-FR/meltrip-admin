import axios from "axios";

export const createQuotesById = async (token: string, data: any) => {
  const buildData = () => {
    const object: any = {
      propose1: "",
      propose2: "",
      propose3: "",
      proposeSelect: null,
      idTemplateQuote: null,
      price: 0,
    };

    for (let i = 0; i < data.length; i++) {
      object[`propose${i + 1}`] = data[i].url;
      object[`idTemplateQuote${i + 1}`] = data[i].id;
    }

    return object;
  };

  const quote: any = await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/quote`, {
      ...buildData(),
    })
    .catch((error: TypeError) => {
      console.error(error);
    });

  return quote.data;
};
