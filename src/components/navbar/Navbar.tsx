import { useEffect, useState } from "react";
import "./navbar.scss";
import axios from "axios";

const Navbar = () => {
  const info = JSON.parse(localStorage.getItem('info') ?? "null");
  const [ profile, setProfile ] = useState<any>({});
  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/admin/${info.adminId}`)
      .then((response) => {
        setProfile(response.data.data);
      })
      .catch(() => {

      })

  }, [])
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt=""  width={200} height={80}/>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src={profile.avatar || 'https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'}
            alt=""
          />
          <span>{profile.name}</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
