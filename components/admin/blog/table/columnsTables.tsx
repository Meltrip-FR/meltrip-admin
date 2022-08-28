//Library Tools
import {
  TitleCell,
  IdCell,
  SlugCell,
  StatusCell,
  CreatedAtCell,
  UpdatedAtCell,
} from "./lib/cell";

export const columnPushedArticleList = [
  {
    Header: "ID",
    accessor: "id",
    Cell: IdCell,
  },
  {
    Header: "Title",
    accessor: "title",
    Cell: TitleCell,
  },
  {
    Header: "Slug",
    accessor: "slug",
    Cell: SlugCell,
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: StatusCell,
  },
  {
    Header: "CreatedAt",
    accessor: "createdAt",
    Cell: CreatedAtCell,
  },
  {
    Header: "UpdatedAt",
    accessor: "updatedAt",
    Cell: UpdatedAtCell,
  },
];
