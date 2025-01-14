"use client";
import React, { useState } from "react";

const ShareIcon = (props: IconProps) => {
  const [shareLink, setShareLink] = useState("");
  const sClass = `h-${props.size}`;

  const handleCopShareLink = (link: string) => {
    if (link) {
      navigator.clipboard.writeText(link);
      alert("Link copied to clipboard!");
    } else {
      alert("Something went wrong");
    }
  };

  const handleShareClick = async () => {
    if (props.fun) {
      try {
        const link = await props.fun(props.cardData?.id);

        // Pass the resolved link to the copy function
        handleCopShareLink(link);
      } catch (error) {
        console.error("Error fetching share link:", error);
        alert("Failed to generate share link.");
      }
    }
  };
  return (
    <div onClick={handleShareClick} className="flex flex-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={sClass}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
        />
      </svg>
    </div>
  );
};

export default ShareIcon;
