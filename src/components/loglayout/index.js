import React, { useState  } from "react";
// import axios from "axios";
import Lists from "../../routes/news-list"
import Detail from "../../routes/news-detail";
import NewModal from "../login";
import Vip from "../../routes/vip";
import { Routes, Route, Navigate  } from "react-router-dom";


const LogLayout = () => {
    const [isLogin, setIsLogin] = useState(false);
    // let navigate = useNavigate();

    // const getLoginState = () => {
    //     axios.get("http://www.dell-lee.com/react/api/isLogin.json").then((res) => {
    //       const { login } = res.data.data;
    //       setIsLogin(login);
    //       console.log(login);
    //     });
    //   };

    // useEffect(() => {
    //     getLoginState();
    //   }, []);
    

    // useEffect(()=>{
    //     if(isLogin){
    //         return <h2 className="vip">VIP</h2>
    //     }else{
    //         navigate("/", { replace: true });
    //     }
    // },[isLogin, navigate])

    return   (<>
              <NewModal isLogin={isLogin} setIsLogin={setIsLogin}/>
              <Routes>
                <Route path="/vip" element={isLogin ? <Vip /> : <Navigate to="/" />} />
                <Route index element={<Lists />} />
                <Route path="/:id" element={<Lists />} />
                <Route path="/detail/:id" element={<Detail />} />
                {/* </Route> */}
              </Routes>
              </>)
    

    
}

export default LogLayout;