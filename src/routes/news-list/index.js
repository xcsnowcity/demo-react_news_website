import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { withUrlParams } from "../../utils/getParams";
import axios from "axios";
import { List } from "antd";
import "./style.css";

class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // if (this.props.params.id !== id) {
    //   id=this.props.params.id;
    let url='http://www.dell-lee.com/react/api/list.json';
    if(this.props.params.id){
      url+='?id='+this.props.params.id
    }
    axios
      .get(url)
      .then((res) => {
        this.setState({
          data: res.data.data.map((elem) => {
            return elem;
          }),
        });
      });
    // }
    // console.log('test');
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.id !== prevProps.params.id) {
      axios
        .get(
          `http://www.dell-lee.com/react/api/list.json?id=${this.props.params.id}`
        )
        .then((res) => {
          this.setState({
            data: res.data.data.map((elem) => {
              return elem;
            }),
          });
        });
    }
  }

  render() {
    // console.log(this.state.data);
    return (
      <Fragment>
        <List
          className="content-list"
          bordered
          dataSource={this.state.data}
          renderItem={(item) => <List.Item><Link to={`/detail/${item.id}`}>{item.title}</Link></List.Item>}
        />
        {/* <Outlet /> */}
      </Fragment>
    );
  }
}

export default withUrlParams(Lists);
