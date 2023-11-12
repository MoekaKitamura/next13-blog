"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { daleteArticle } from "@/blogAPI";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = () => {
    daleteArticle(id);

    router.push("/");
    router.refresh();
  };
  return (
    <button
      className="bg-red-500 hover:bg-red-600 py-2 px-5 rounded-md"
      onClick={handleDelete}
    >
      削除
    </button>
  );
};

export default DeleteButton;
