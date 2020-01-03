import React, { Component,Fragment } from 'react'
// 1.引入路由组件
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'
// 2.引入路由模块
import Home from './pages/home'
import Info from './pages/info'
import List from './pages/list'
import Profile from './pages/profile'
//引入tabbar组件
import HKlayout from './components/HKlayout'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 3。配置路由信息 */}
        <Router>
            <Route exact path='/' render={(props)=><HKlayout><Home {...props}></Home></HKlayout>}></Route>
            <Route exact path='/list' render={(props)=><HKlayout><List {...props}></List></HKlayout>}></Route>
            <Route exact path='/info' render={(props)=><HKlayout><Info {...props}></Info></HKlayout>}></Route>
            <Route exact path='/profile' render={(props)=><HKlayout><Profile {...props}></Profile></HKlayout>}></Route>
        </Router>
      </Fragment>
    )
  }
}
