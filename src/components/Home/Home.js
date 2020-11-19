import React, { Component } from 'react'
import './Home.css'
import { Link, NavLink } from 'react-router-dom'
export default class Home extends Component {
    toFood(){
        console.log(this.props)
        this.props.history.push('/food')
    }
    toMovie(){
        console.log(this.props)
        this.props.history.push('/movie')
    }
    // 公共方法
    toList(path){
        this.props.history.push(path)
    }


    toList1(path){
        this.props.history.replace(path)
    }
    render() {
        return (
            <div>
                <div>
                    {/* 1.Link*/}
                    <Link to='/food'>美食1</Link>
                    <Link to='/movie'>电影1</Link>
                </div>
                <div>
                    {/*2.NavLink*/}
                    <NavLink to='/food'>美食2</NavLink>
                    <NavLink to='/movie'>电影2</NavLink>
                </div>
                {/* 基础的路由跳转 */}
                <div>
                    <button onClick = {()=>{this.toFood()}}>美食3</button>
                    <button onClick = {()=>{this.toMovie()}}>电影3</button>
                </div>
                {/* 封装路由跳转 */}
                <div>
                    <button onClick = {()=>{this.toList('/food')}}>美食4</button>
                    <button onClick = {()=>{this.toList('/movie')}}>电影4</button>
                </div>
                 {/* replace使用 */}
                 <div>
                    <button onClick = {()=>{this.toList1('/food')}}>美食5</button>
                    <button onClick = {()=>{this.toList1('/movie')}}>电影5</button>
                </div>
            </div>
        )
    }
}
