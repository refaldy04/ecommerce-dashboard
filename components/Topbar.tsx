import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="w-full h-14 bg-white sticky top-0 z-10">
      <div className="h-full px-5 flex items-center justify-between">
        <div>
          <span className="font-bold text-3xl text-[#28949B] cursor-pointer">
            Reshop
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative text-[#555]">
            <NotificationsNone />
            <span className="w-4 h-4 absolute bottom-3 left-3 bg-red-500 text-white rounded-full flex justify-center items-center p-1 text-sm">
              2
            </span>
          </div>
          <div className="relative text-[#555]">
            <Language />
            <span className="w-4 h-4 absolute bottom-3 left-3 bg-red-500 text-white rounded-full flex justify-center items-center p-1 text-sm">
              2
            </span>
          </div>
          <div className="relative text-[#555]">
            <Settings />
          </div>
          <Image
            src="https://picsum.photos/200/200?random=1"
            alt="profile picture"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
