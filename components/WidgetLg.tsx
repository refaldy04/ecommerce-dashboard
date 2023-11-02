"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const WidgetLg = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="col-span-2 shadow-lg p-5">
      <span className="text-2xl font-semibold">Latest transactions</span>
      {isClient ? (
        <table className="w-full table-auto mt-5">
          <tr>
            <th className="text-start">Customer</th>
            <th className="text-start">Date</th>
            <th className="text-start">Amount</th>
            <th className="text-start">Status</th>
          </tr>
          <tr>
            <td className="flex items-center py-5 gap-2 font-semibold">
              <Image
                src="https://picsum.photos/200/200?random=2"
                alt="user picture"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>Susan Carol</span>
            </td>
            <td className="font-light">2 Jun 2023</td>
            <td className="font-light">$122.00</td>
            <td>
              <Button type="Approved" />
            </td>
          </tr>
          <tr>
            <td className="flex items-center py-5 gap-2 font-semibold">
              <Image
                src="https://picsum.photos/200/200?random=2"
                alt="user picture"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>Susan Carol</span>
            </td>
            <td className="font-light">2 Jun 2023</td>
            <td className="font-light">$122.00</td>
            <td>
              <Button type="Declined" />
            </td>
          </tr>
          <tr>
            <td className="flex items-center py-5 gap-2  font-semibold">
              <Image
                src="https://picsum.photos/200/200?random=2"
                alt="user picture"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span>Susan Carol</span>
            </td>
            <td className="font-light">2 Jun 2023</td>
            <td className="font-light">$122.00</td>
            <td>
              <Button type="Pending" />
            </td>
          </tr>
        </table>
      ) : null}
    </div>
  );
};

const Button: React.FC<{ type: string }> = ({ type }) => {
  return (
    <button
      className={`py-1 px-2 rounded-lg ${
        (type === "Approved" && "bg-[#e5faf2] text-[#3bb077]") ||
        (type === "Declined" && "bg-[#fff0f1] text-[#d95087]") ||
        (type === "Pending" && "bg-[#ebf1fe] text-[#2a7ade]")
      }`}
    >
      {type}
    </button>
  );
};

export default WidgetLg;
