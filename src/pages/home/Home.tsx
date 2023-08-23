import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import { useEffect, useState } from "react";
import axios from 'axios'
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [totalUser, setTotalUser] = useState<any>()
  const [totalSong, setTotalSong] = useState<any>()
  const localStorageInstance = JSON.parse(localStorage.getItem('info') ?? "null");
  const navigate = useNavigate();
  if (!localStorageInstance) 
  useEffect(() => {
    if (!localStorageInstance) {
      navigate('/login')
      return
    }
}, [localStorageInstance])
  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/song/').then((res: any) => {
      setTotalSong({
        color: "skyblue",
        icon: "/productIcon.svg",
        title: "Total Songs",
        number: res.data.data.length,
        dataKey: "songs",
        percentage: 21, 
      })
    })
    axios.get('http://localhost:5000/api/v1/user/').then((res: any) => {
      setTotalUser({
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Users",
        number: res.data.data.length,
        dataKey: "users",
        percentage: 45,
      })
    })
  }, [])


  return (
    <div className="home">

      <div className="box box2">
        <ChartBox {...totalUser} />
      </div>
      <div className="box box3">
        <ChartBox {...totalSong} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>

      <div className="box box7">
        <BigChartBox />
      </div>

    </div>
  );
};

export default Home;
