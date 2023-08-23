import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import "./Login.scss";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../components/Loading/Loading.component';
interface FieldType {
  email: string;
  password: string;
}
const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  
  const onFinish = async (data: { email: string, password: string }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`http://localhost:5000/api/v1/auth/admin`, data);
      localStorage.setItem('info', JSON.stringify(response.data.data));
      setIsLoading(false);
      messageApi.open({
        type: 'success',
        content: 'Login successfully',
      });
      navigate('/');
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      messageApi.open({
        type: 'error',
        content: error.response.data.message,
      });
    }
     
  }
  const onFinishFailed = () => {

  }
  return (
    <>
      { isLoading && <LoadingPage />}
      { contextHolder } 
      <div className="login-box">
        {/* <form>
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
        </form> */}
         <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input type='email'/>
      </Form.Item>
  
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
  
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
      </div>
    </>
  );
};

export default Login;
