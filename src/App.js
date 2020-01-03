import React, { Component,Fragment } from 'react'
// 1.引入路由组件
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'
// 2.引入路由模块
import Home from './pages/home'
import Info from './pages/info'
import List from './pages/list'
import Profile from './pages/profile'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 3。配置路由信息 */}
        <Router>
            <Route exact path='/' render={(props)=><Home {...props}></Home>}></Route>
            <Route exact path='/list' render={(props)=><List {...props}></List>}></Route>
            <Route exact path='/info' render={(props)=><Info {...props}></Info>}></Route>
            <Route exact path='/profile' render={(props)=><Profile {...props}></Profile>}></Route>
        </Router>
      </Fragment>
    )
  }
}
