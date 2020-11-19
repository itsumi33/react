import React, { Component } from 'react'

import {Route,Redirect} from 'react-router-dom'
export default class Myroute extends Component {
    render() {
        // 自己定义的一个过滤组件，来充当守卫
        let isLogin  = sessionStorage.getItem('isLogin')
        return (
            <div>
                {
                    isLogin?<Route {...this.props}></Route>:<Redirect to='/login'></Redirect>
                }
            </div>
        )
    }
}
