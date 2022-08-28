export const optionsArticlesList = {
  section: "articles", //Name category
  header: {
    searchName: "articles",
    button: {
      activated: false,
      left: {
        title: "none",
        activated: false,
      },
      right: {
        title: "none",
        activated: false,
      },
    },
  },
  sort: {
    activated: true, //true = authorized sort filter
    names: ["id"],
  },
  link: {
    //For not use link redirect you don't need to set this
    // for example: url :  "/users/:email"
    pathName: "blog/article",
    fieldName: "id", // Select field in data table for example: row.original.email
    rowHoverColor: null, //add tailwinds colors, for default is bg-gray-100
  },
};
