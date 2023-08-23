import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const color = [
  "#0088FE",
   "#00C49F",
  "#FFBB28" ,
   "#FF8042" 
];

interface iGenre{
  title: string,
  _id: string,
  listSong: string[],
}
interface IData{
  name: string,
  value: number,
  color: string,
}

const PieChartBox = () => {
  const [data, setData] = useState<IData[]>()


  useEffect(()=>{
    axios.get('http://localhost:5000/api/v1/genre/topListsong').then(response=>{
     const data1 = response.data.data.map((item:iGenre, index: number) =>({
      name: item.title,
      value: item.listSong.length,
      color: color[index % color.length]
    }))
    setData(data1)
   })
  },[])
  
  
  return (
    <div className="pieChartBox">
      <h1>Total Genre Songs</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data && data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data?.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
