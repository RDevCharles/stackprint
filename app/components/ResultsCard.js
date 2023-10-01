"use client";
import React, { useState } from "react";
import Link from "next/link";
import copy from "clipboard-copy";
import { BsFillClipboardFill } from "react-icons/bs";



export default function ResultsCard({ string, link, id }) {
  //on hover, show tooltip (copy to clipboard)
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleCopyToClipboard = async () => {
    const textToCopy = string;
    copy(textToCopy);
  };

  return (
    <div className="flex justify-center items-center">
      <Link href={link}>
        <div className="my-2 bg-gray-800 border border-gray-600 rounded-lg p-4 text-white text-sm leading-snug">
          <p className="text-white justify-center items-center text-1xl">
            {string}
          </p>
        </div>
      </Link>
   
      <div className="w-4" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <BsFillClipboardFill
        onClick={handleCopyToClipboard}
        
        className="ml-8 w-8 cursor-pointer"
      />
      </div>
      
        {isTooltipVisible && (
          <div className="absolute right-20 tooltip text-blue-500">Copy link and ask your Assistant to parse through</div>
        )}
   
      
      
    </div>
  );
}
