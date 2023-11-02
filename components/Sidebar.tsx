import React from "react";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="col-span-1 h-[calc(100vh_-_56px)] bg-transparent sticky top-14">
      <div className="p-5 text-[#555] flex flex-col gap-5">
        <div className="">
          <h3 className="text-sm text-slate-400">Dashboard</h3>
          <ul className="p-1">
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <LineStyle className="text-xl" />
              Home
            </li>
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <Timeline className="text-xl" />
              Analytics
            </li>
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <TrendingUp className="text-xl" />
              Sales
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-sm text-slate-400">Quick Menu</h3>
          <ul className="p-1">
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <PermIdentity className="text-xl" />
              Users
            </li>
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <Storefront className="text-xl" />
              Products
            </li>
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <AttachMoney className="text-xl" />
              Transactions
            </li>
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <BarChart className="text-xl" />
              Reports
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-sm text-slate-400">Notifications</h3>
          <ul className="p-1">
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <MailOutline className="text-xl" />
              Mail
            </li>
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <DynamicFeed className="text-xl" />
              Feedback
            </li>
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <ChatBubbleOutline className="text-xl" />
              Messages
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-sm text-slate-400">Staff</h3>
          <ul className="p-1">
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <WorkOutline className="text-xl" />
              Manage
            </li>
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <Timeline className="text-xl" />
              Analytics
            </li>
            <li className="p-1 rounded-xl hover:bg-slate-100 flex gap-2 items-center">
              <Report className="text-xl" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
