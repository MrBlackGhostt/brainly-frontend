"use client";
import React from "react";
import ShareIcon from "../icons/share";
import DeleteIcon from "../icons/delete";

import { useContents } from "@/app/contexts/contentContext";
import EditIcon from "../icons/edit";
import { useFormModal } from "@/app/contexts/formModalContext";
import AddForm from "./AddForm";
import { cardInterface } from "@/lib/types";

const CardHeader = ({ cardData }: { cardData: cardInterface }) => {
  const { deleteCard } = useContents();
  const { editModalState, editModalFun } = useFormModal();
  const { formState, cardId } = editModalState;

  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <ShareIcon size="6" />
        <p> {cardData.title}</p>
      </div>
      <div className="flex gap-2">
        <ShareIcon size="4" />
        <EditIcon size="4" fun={editModalFun} cardData={cardData} />
        <DeleteIcon
          size="4"
          fun={() => {
            console.log("Delete content");
            {
              cardData.id && deleteCard(cardData.id);
            }
          }}
        />
      </div>
      {formState && cardData.id == cardId && (
        <div className="flex absolute left-1/3 top-1/3  w-1/2 h-1/2 justify-center items-center z-100  bg-slate-400 ">
          <AddForm formType={"edit"} cardData={cardData} />
        </div>
      )}
    </div>
  );
};

export default CardHeader;
