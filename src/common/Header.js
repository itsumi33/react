import React, { Component } from 'react'
import './Header.css'
import {withRouter} from 'react-router-dom'
 class Header extends Component {
    goBack(){
        console.log(this.props)
        this.props.history.goBack()
    }
    render() {
        let { title,back } = this.props
        return (

            <div className="header">
                <div className="header-title">
                    {
                        back?<i  className = 'iconfont icon-fanhui' onClick={()=>this.goBack()}>返回</i>:null
                    }
                    {title}
                </div>
            </div>
        )
    }
}


export default withRouter(Header)