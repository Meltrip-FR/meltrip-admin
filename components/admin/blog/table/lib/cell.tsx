import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useAppSelector } from "@redux/hooks";
import "react-toastify/dist/ReactToastify.css";
import Trash from "@components/assets/icons/trash";

export function IdCell({ row, column }: any) {
  const [copied, setCopied] = useState<boolean>(false);
  const [copiedName, setCopiedName] = useState<string>("");
  return (
    <>
      <div
        className={`flex items-center cursor-pointer text-sm font-medium ${
          copied && copiedName === "idAd" ? "text-blue-500" : "text-gray-900"
        }`}
      >
        <div
          className="flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            setCopiedName("id");
            setTimeout(() => {
              setCopied(false);
              setCopiedName("");
            }, 1000);
          }}
        >
          {row.original.id}
        </div>
      </div>
    </>
  );
}

export function TitleCell({ row }: any) {
  return (
    <>
      <div className={`flex items-center cursor-pointer text-sm font-medium`}>
        <div className="flex items-center">{row.original.title}</div>
      </div>
    </>
  );
}

export function SlugCell({ row }: any) {
  return (
    <>
      <div className={`flex items-center cursor-pointer text-sm font-medium`}>
        <div className="flex items-center">{row.original.slug}</div>
      </div>
    </>
  );
}

export function StatusCell({ row }: any) {
  return (
    <>
      <div className={`flex items-center cursor-pointer text-sm font-medium`}>
        <div className="flex items-center">
          {!row.original.status ? "Disabled" : "Active"}
        </div>
      </div>
    </>
  );
}

export function CreatedAtCell({ row }: any) {
  const dates = new Date(row.original.createdAt).toLocaleString();
  return (
    <>
      <div className={`flex items-center cursor-pointer text-sm font-medium`}>
        <div className="flex items-center">{dates}</div>
      </div>
    </>
  );
}

export function UpdatedAtCell({ row }: any) {
  const dates = new Date(row.original.updatedAt).toLocaleString();
  return (
    <>
      <div className={`flex items-center cursor-pointer text-sm font-medium`}>
        <div className="flex items-center">{dates}</div>
      </div>
    </>
  );
}

export function DeletedAtCell({ row }: any) {
  const { auth } = useAppSelector((state) => state);
  const dates = new Date(row.original.deletedAt).toLocaleString();
  const handleDelete = async (e: any) => {
    e.stopPropagation();
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/article/${row.original.id}`,
        {
          headers: {
            "x-access-token": auth.user.accessToken,
          },
        }
      )
      .then((item) => {
        toast.success(`L'article ${item.data.message} à bien supprimé !`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        window.location.reload();
      });
  };
  return (
    <div
      className={`flex items-center justify-center cursor-pointer text-sm font-medium`}
    >
      <div className="flex items-center">
        {!row.original.deletedAt && (
          <span
            className="hover:text-red-400"
            onClick={(e: any) => handleDelete(e)}
          >
            <Trash size={20} />
          </span>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
