import { DateTime } from "luxon";
import { useState } from "react";

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
          {row.original.status === 1 ? "Disabled" : "Active"}
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
