import { useState } from "react";
import { Chart } from "./components/Chart"
import { CSVImport } from "./components/CSVImport"
import { Test } from "./types";
import { DataTable } from "./components/Table";
import { sumDuplicate, sumDuplicate2 } from "./utils";

function App() {
  const [data, setData] = useState<Test[]>([]); 

  let dataTask1 = []; 

  if (data.length < 13) {
    dataTask1 = data?.map((obj: Test) => {
      const purchaseAmount = Number(obj["Purchase Amount"].substring(1).replace(/,/g,""));
      const date = obj["Date"].split('/');
      return {x: Number(date[0]), y: purchaseAmount};
    })
  } else {
    dataTask1 = data?.slice(-12).map((obj: Test) => {
      const purchaseAmount = Number(obj["Purchase Amount"].substring(1));
      const date = obj["Date"].split('/');
      return {x: Number(date[0]), y: purchaseAmount};
    })
  }

  dataTask1 = sumDuplicate(dataTask1); 

  const dataTask2 = data?.map((obj: Test) => {
    return {
      date: obj["Date"], 
      description: obj["Description"],
      category: obj["Type"],
      amount: obj["Purchase Amount"],
    }
  });
  
  let dataTask3 = data?.map((obj: Test) => {
    const purchaseAmount = Number(obj["Purchase Amount"].substring(1).replace(/,/g,""));
    return {y: purchaseAmount, name: obj["Type"]};
  })

  dataTask3 = sumDuplicate2(dataTask3); 

  const options = {
    title: {
      text: "Task 1",
    },
    series: [
      {
        type: "bar",
        data: dataTask1,
        name: "", 
      },
    ],
    xAxis: {
      title: {
        text: "Months",
      },
    },
    yAxis: {
      title: {
        text: "$ value",
      },
    },
  };

  const options3 = {
    title: {
      text: "Task 3",
    },
    series: [
      {
        type: "pie",
        data: dataTask3,
      },
    ],
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center text-center">
      <div className="space-y-5 w-screen">
        <CSVImport setData={setData}/>
        <div className="flex justify-between">
          <Chart options={options}/>
          <DataTable data={dataTask2}/>
          <Chart options={options3}/>
        </div>
      </div>
    </div>
  )
}

export default App
