import { TabBar } from 'antd-mobile';
import React from 'react'
import {withRouter} from 'react-router-dom'

class HKLayout extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={this.props.match.path === '/'}
            onPress={() => {
              this.props.history.push('/')
            }}
            data-seed="logId"
          >
            {this.props.match.path==='/'&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="list"
            selected={this.props.match.path === '/list'}
            onPress={() => {
              this.props.history.push('/list')
            }}
            data-seed="logId1"
          >
            {this.props.match.path==='/list'&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="info"
            selected={this.props.match.path === '/info'}
            onPress={() => {
              this.props.history.push('/info')
            }}
          >
            {this.props.match.path==='/info'&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="profile"
            selected={this.props.match.path === '/profile'}
            onPress={() => {
              this.props.history.push('/profile')
            }}
          >
            {this.props.match.path==='/profile'&&this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
// 用withRouter高阶函数对HKlayout进行包装
export default withRouter(HKLayout)