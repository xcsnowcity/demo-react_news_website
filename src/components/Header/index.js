import { Component } from "react";
import "./AppHeader.css";
import { Link } from "react-router-dom";
import { withUrlParams } from "../../utils/getParams";
import { Menu } from "antd";

import axios from "axios";

// const items = [
//   { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
//   { label: '菜单项二', key: 'item-2' },
//   {
//     label: '子菜单',
//     key: 'submenu',
//     children: [{ label: '子菜单项', key: 'submenu-item-1' }],
//   },
// {
//   label: (
//     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//       Navigation Four - Link
//     </a>
//   ),
//   key: 'alipay',
// },
// ];

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }

  componentDidMount() {
    axios.get("http://www.dell-lee.com/react/api/header.json").then((res) => {
      this.setState({
        item: res.data.data.map((elem) => {
          return {
            key: elem.id,
            label: <Link to={`/${elem.id}`}>{elem.title}</Link>,
          };
        }),
      });
    });
  }

  render() {
    // console.log(this.props.params.id);
    if(typeof this.props.params.id==='undefined'){
      return (
        <div className="header-layout">
          <Link to="/">
            <img
              className="logo"
              src="https://media.npr.org/chrome_svg/npr-logo.svg"
              alt="npr"
            ></img>
          </Link>
  
          <Menu
            items={this.state.item}
            mode="horizontal"
            className="menu"
            defaultSelectedKeys={[`1`]}
            selectedKeys={[`1`]}
          />
        </div>
      )
    }
    
    // let selectedkey=1;
    // if(this.props.params.id<7 ){
    //   selectedkey = parseInt(this.props.params.id);
    // }
    // else if (this.props.params.id >= 7 || this.props.params.id < 1) {
    //   selectedkey = 1;
    // } else if (this.props.params.id!=='detail'){
    //   selectedkey=1;
    // }
    return (
      <div className="header-layout">
        <Link to="/">
          <img
            className="logo"
            src="https://media.npr.org/chrome_svg/npr-logo.svg"
            alt="npr"
          ></img>
        </Link>

        <Menu
          items={this.state.item}
          mode="horizontal"
          className="menu"
          // defaultSelectedKeys={[`${selectedkey}`]}
          // selectedKeys={[`${selectedkey}`]}
        />
      </div>
    );
  }
}

export default withUrlParams(AppHeader);
