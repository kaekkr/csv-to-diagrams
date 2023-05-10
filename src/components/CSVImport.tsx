import Papa from "papaparse";
import React from "react";
import { ChangeEvent } from "react";
import { Test } from "../types";

type Test2 = {
  data: Test[]
}

export const CSVImport = ({ setData } : { setData: React.Dispatch<React.SetStateAction<Test[]>> }) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results: Test2) {
        setData(results.data);
      },
    });
  };

  return (
    <div className="border border-red-500 p-5 space-y-4 ">
      <p>CSVImport</p>
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={changeHandler}
        style={{ display: "block", margin: "10px auto" }}
      />
    </div>
  );
};
