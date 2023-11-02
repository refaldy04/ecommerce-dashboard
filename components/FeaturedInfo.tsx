import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-2 mt-3">
      <div className="p-7 rounded-lg cursor-pointer shadow-lg">
        <span className="text-xl">Revanue</span>
        <div className="my-2 flex items-center">
          <span className="text-3xl font-semibold">$2,145</span>
          <span className="flex items-center ml-5">
            -11.4 <ArrowDownward className="text-sm ml-1 text-red-500" />
          </span>
        </div>
        <span className="text-sm text-gray-500">Compared to last month</span>
      </div>
      <div className="p-7 rounded-lg cursor-pointer shadow-lg">
        <span className="text-xl">Sales</span>
        <div className="my-2 flex items-center">
          <span className="text-3xl font-semibold">$4,415</span>
          <span className="flex items-center ml-5">
            -1.4 <ArrowDownward className="text-sm ml-1 text-red-500" />
          </span>
        </div>
        <span className="text-sm text-gray-500">Compared to last month</span>
      </div>
      <div className="p-7 rounded-lg cursor-pointer shadow-lg">
        <span className="text-xl">Cost</span>
        <div className="my-2 flex items-center">
          <span className="text-3xl font-semibold">$2,225</span>
          <span className="flex items-center ml-5">
            +2.4 <ArrowUpward className="text-sm ml-1 text-green-500" />
          </span>
        </div>
        <span className="text-sm text-gray-500">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
