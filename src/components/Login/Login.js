import React, { Component } from 'react'
import './Login.css'
import Header from '../../common/Header'
import {Link,NavLink} from 'react-router-dom'
import {requestLogin} from '../../util/request'
export default class Login extends Component {
    constructor(){
        super()
        this.state={
            user:{
                name:'',
                pass:''
            }
        }
    }

    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    login(){

        // 请求接口
        requestLogin(this.state.user).then(res=>{
            console.log(res)
            // 登录成功存一个标识
            sessionStorage.setItem('isLogin',1)
            this.props.history.push('/index/home')
        })



         // console.log(this.state.user)
        // if(this.state.user.name==='admin'&&this.state.user.pass==='123'){
        //         
               
        // }else{
        //     alert('请输入正确的用户名或者密码')
        // }
    }


    render() {
        return (
            <div>
                {/* 头部 */}
                <Header title='登录1'></Header>
                <div className="input">
                    <div>
                        用户名: <input type="text" className='user' onChange = {(e)=>{this.changeUser(e,'name')}}/>
                    </div>
                    <div>
                        密码: <input type="text" className='user' onChange = {(e)=>{this.changeUser(e,'pass')}}/>
                    </div>
                    <div>
                        <button  className='login' onClick = {()=>{this.login()}}>登录</button>
                        {/* <Link to='/index/home'>登录</Link>
                        <NavLink to='/index/home'>登录</NavLink> */}
                        {/*Link,NavLikn 都会被解析为a标签， 区别：NavLink用于导航可以添加选中样式 */}
                    </div>
                </div>
            </div>
        )
    }
}
