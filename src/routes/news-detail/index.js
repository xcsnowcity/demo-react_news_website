import React, { Component } from "react";
import { withUrlParams } from "../../utils/getParams";
import { Card } from "antd";
import axios from "axios";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
    };
  }

  componentDidMount(){
    const id=this.props.params.id;
    axios.get('http://www.dell-lee.com/react/api/detail.json?id='+id).then((res)=>{
        this.setState({
            content:res.data.data
        })
    })
  }

  render() {
    // console.log(this.props.params.id);
    return (
      <Card title={`${this.state.content.title}`}>
        <div dangerouslySetInnerHTML={{__html:this.state.content.content}}></div>
      </Card>
      // <h3>detail{`${this.props.params.id}`}</h3>
    );
  }
}

export default withUrlParams(Detail);
