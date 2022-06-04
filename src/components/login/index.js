import React, { useState, } from "react";
import { Modal, Button, Input, Space, message } from "antd";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";


const NewModal = (props) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const loginSuccess = () => {
    message.success("登陆成功");
  };

  const logoutSuccess = () => {
    message.success("退出成功");
  };

  const loginError = () => {
    message.error("登陆失败");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    axios
      .get(
        `http://www.dell-lee.com/react/api/Login.json?user=${name}&password=${password}`
      )
      .then((res) => {
        if (res.data.data.login) {
          loginSuccess();
          props.setIsLogin(true);
          setIsModalVisible(false);
        } else {
          loginError();
          setIsModalVisible(true);
        }
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handlePWDInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout=()=>{
    axios.get("http://www.dell-lee.com/react/api/logout.json").then((res) => {
      props.setIsLogin(false);
      logoutSuccess();
    });
  }

  if (props.isLogin) {
    return (
      <>
      <Button className="btn" type="primary" onClick={handleLogout}>
        Logout
      </Button>{" "}
      <Button className="vip-btn" type="primary">
          <Link to={"/vip"}>
          VIP
          </Link>
          
        </Button>{" "}
      </>
      
      
    )
  } else {
    return (
      <>
        <Button className="btn" type="primary" onClick={showModal}>
          Login
        </Button>{" "}
        <Modal
          title="登录"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Space direction="vertical">
            <Input
              id="username"
              placeholder="用户名"
              value={name}
              onChange={handleNameInput}
            />
            <Input.Password
              id="pwd"
              placeholder="密码"
              value={password}
              onChange={handlePWDInput}
            />
          </Space>
        </Modal>
      </>
    )
  }
};

export default NewModal;
