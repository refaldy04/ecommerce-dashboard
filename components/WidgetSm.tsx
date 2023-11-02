import Image from "next/image";
import React from "react";
import { Visibility } from "@mui/icons-material";

const WidgetSm = () => {
  return (
    <div className="col-span-1 shadow-lg p-5">
      <span className="text-2xl font-semibold">New Join Members</span>
      <ul>
        <li className="flex items-center justify-between my-5">
          <Image
            src="https://picsum.photos/200/200?random=1"
            alt="user picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">Anna Keller</span>
            <span className="font-light">Software Engeneer</span>
          </div>
          <button className="flex items-center rounded-lg py-2 px-3 bg-[#eeeef7] text-[#555] gap-1">
            <Visibility className="text-[16px]" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between my-5">
          <Image
            src="https://picsum.photos/200/200?random=1"
            alt="user picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">Anna Keller</span>
            <span className="font-light">Software Engeneer</span>
          </div>
          <button className="flex items-center rounded-lg py-2 px-3 bg-[#eeeef7] text-[#555] gap-1">
            <Visibility className="text-[16px]" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between my-5">
          <Image
            src="https://picsum.photos/200/200?random=1"
            alt="user picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">Anna Keller</span>
            <span className="font-light">Software Engeneer</span>
          </div>
          <button className="flex items-center rounded-lg py-2 px-3 bg-[#eeeef7] text-[#555] gap-1">
            <Visibility className="text-[16px]" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between my-5">
          <Image
            src="https://picsum.photos/200/200?random=1"
            alt="user picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">Anna Keller</span>
            <span className="font-light">Software Engeneer</span>
          </div>
          <button className="flex items-center rounded-lg py-2 px-3 bg-[#eeeef7] text-[#555] gap-1">
            <Visibility className="text-[16px]" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between my-5">
          <Image
            src="https://picsum.photos/200/200?random=1"
            alt="user picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">Anna Keller</span>
            <span className="font-light">Software Engeneer</span>
          </div>
          <button className="flex items-center rounded-lg py-2 px-3 bg-[#eeeef7] text-[#555] gap-1">
            <Visibility className="text-[16px]" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
