import React, { Component } from 'react'
import Header from '../../common/Header'
import './Index.css'
import { Switch, Route, Redirect, Link, NavLink } from 'react-router-dom'
import Home from '../Home/Home'
import Order from '../Order/Order'
import Mine from '../Mine/Mine'
export default class Index extends Component {
    render() {
        return (
            <div>
                {/* 配置二级路由 */}
                <Header title='首页'></Header>
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/order' component={Order}></Route>
                    <Route path='/index/mine' component={Mine}></Route>
                </Switch>
                {/* 底部 */}
                <div className="footer">
                    <NavLink to='/index/home' activeClassName='select'>首页</NavLink>
                    <NavLink to='/index/order' activeClassName='select'>订单</NavLink>
                    <NavLink to='/index/mine' activeClassName='select'>我的</NavLink>
                </div>

            </div>
        )
    }
}
