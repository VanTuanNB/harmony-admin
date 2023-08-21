import "./Login.scss";
const Login = () => {
  return (
    <div className="login-box">
      <h2 className="title">Đăng nhập</h2>
      <form action="">
        <div className="user-box">
          <input type="text" required />
          <label htmlFor="">Email</label>
        </div>
        <div className="user-box">
          <input type="password" required />
          <label htmlFor="">Password</label>
        </div>
        <button className="button">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
