import React, { Component,Fragment } from 'react'
// 引入封装的axios
import Axios from '../../utils/request'
// 引入封装的baseURL
import baseURL from '../../utils/urls'
// 引入轮播图组件
import { Carousel, WingBlank } from 'antd-mobile';
// 引入样式文件
import './index.scss'
// 引入导航栏图片
import Nav1 from '../../assest/images/nav-1.png'
import Nav2 from '../../assest/images/nav-2.png'
import Nav3 from '../../assest/images/nav-3.png'
import Nav4 from '../../assest/images/nav-4.png'

export default class index extends Component {
  state={
    swiper:[],
    imgHeight:176,
    navlist:[
      {id:1,imgSrc:Nav1,title:"整租"},
      {id:2,imgSrc:Nav2,title:"合租"},
      {id:3,imgSrc:Nav3,title:"地图找房"},
      {id:4,imgSrc:Nav4,title:"去出租"},
    ],
    news:[],
    homeGroup:[]
  }
  componentDidMount(){
    // 轮播图的数据
    Axios.get("/home/swiper").then(res=>{
      console.log(res);
      this.setState({
        swiper:res.body
      })
    })
    // 最新资讯的数据
    Axios.get("/home/news").then(res=>{
      console.log(res);
      this.setState({
        news:res.body
      })
    })
    // 租房小组数据
    Axios.get("/home/groups").then(res=>{
      console.log(res);
      this.setState({
        homeGroup:res.body
      })
    })
  }
  render() {
    return (
      <Fragment>
        <div className="hk_home">
          {/* 轮播图部分 */}
          <div className="hk_swiper">
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
          </div>
          {/* 导航栏部分 */}
          <div className="hk_navbar">
            {
            this.state.navlist.map(v => <div key={v.id} className="hk_nav_item">
                <div className="item_wrrapper">
                    <img src={v.imgSrc} alt={v.title}></img>
                    <p>{v.title}</p>
                </div>
            </div>)
            }
          </div>
          {/* 租房小组部分 */}
          <div className="hk_home_group">
            <div className="hk_home_title">
              <h3>租房小组</h3>
              <p>更多</p>
            </div>
            <div className="hk_home_content">
              {
                this.state.homeGroup.map(v=>
                  <div className="hk_home_item" key={v.id}>
                    <div className="hk_home_item_left">
                      <span className="hk_home_left_title">{v.title}</span>
                      <span className="hk_home_left_desc">{v.desc}</span>
                    </div>
                    <div className="hk_item_right">
                      <img src={baseURL+v.imgSrc}></img>
                    </div>
                  </div>
                  )
              }
            </div>
          </div>
          {/* 最新资讯部分 */}
          <div className="hk_news">
            <div className="hk_news_title">
              <h3>最新资讯</h3>
            </div>
            {
              this.state.news.map(v=>
                <div className="hk_news_item" key={v.id}>
                  <div className="hk_news_img">
                    <img src={baseURL+v.imgSrc}></img>
                  </div>
                  <div className="hk_news_info">
                    <div className="hk_news_item_top">
                      <span>{v.title}</span>
                    </div>
                    <div className="hk_news_item_bottom">
                      <div className="hk_news_item_from">{v.from}</div>
                      <div className="hk_news_item_date">{v.date}</div>
                    </div>
                  </div>
                </div>
                )
            }
          </div>
        </div>
      </Fragment>
    )
  }
}
