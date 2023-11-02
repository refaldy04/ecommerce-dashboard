"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "@/dummyData";
import { useRouter } from "next/navigation";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      renderCell: ({ row }: any) => (
        <div className="flex items-center gap-2">
          <Image
            src={row.avatar}
            alt="user picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          {row.username}
        </div>
      ),
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: ({ row }: any) => {
        const router = useRouter();
        return (
          <>
            <button
              onClick={() => router.push(`/user/${row.id}`)}
              className="rounded-lg py-1 px-2 bg-[#3bb077] text-white mr-3"
            >
              Edit
            </button>
            <DeleteOutline
              onClick={() => handleDelete(row.id)}
              className="text-red-500 cursor-pointer"
            />
          </>
        );
      },
    },
  ];
  return (
    <div>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default UserList;
