import React, { Component,Fragment } from 'react'
// 引入axios
import axios from 'axios'
// 引入封装的baseURL
import baseURL from '../../utils/urls'
// 引入轮播图组件
import { Carousel, WingBlank } from 'antd-mobile';

export default class index extends Component {
  state={
    swiper:[],
    imgHeight:176
  }
  componentDidMount(){
    axios.get(baseURL+"/home/swiper").then(res=>{
      console.log(res);
      this.setState({
        swiper:res.data.body
      })
    })
  }
  render() {
    return (
      <Fragment>
        <WingBlank>
        <Carousel
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.swiper.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={baseURL+val.imgSrc}
                alt={val.alt}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </Fragment>
    )
  }
}
