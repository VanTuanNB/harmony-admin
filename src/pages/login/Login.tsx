import "./Login.scss";
const Login = () => {
  return (
    <div className="login-box">
      <form>
        <div className="user-box">
          <input type="email" name="" required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required />
          <label>Mật khẩu</label>
        </div>
        <center>
          <a href="#">
            Đăng nhập
            <span></span>
          </a>
        </center>
      </form>
    </div>
  );
};

export default Login;
