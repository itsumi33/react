import React, { Component } from 'react'
import querystring from 'querystring'
import {requestMovieDetail} from '../../util/request'
import {filterPrice,filterTime} from '../../filter/filter'
export default class Food extends Component {
    constructor(){
        super()
        this.state={
            detail:{}
        }
    }


    componentDidMount(){
        console.log(this.props)
        let id = this.props.location.search
        // console.log(id)
        ///////////1.原生写法////////////
        // console.log(id)   //?a=10&b=20&id=3
        // var res = {}// 最终存放给对象
        // let str = id.slice(1)
        // // console.log(str)  //a=10&b=20&id=3
        // let arr =str.split('&')
        // console.log(arr)  
        // arr.forEach(item=>{
        //   let aa =  item.split('=')
        
        //   res[aa[0]]=aa[1]

        // })
        // console.log(res.id)
    
        // 2.querystring  获取id
        let result = querystring.parse(id.slice(1))
        console.log(result)
        requestMovieDetail(result.id).then(res=>{
            console.log(res)
            this.setState({
                detail:res.data.detail
            })
        })
    }
    render() {
        let {detail} =this.state
        return (

                
             <div>
                  {
                    detail.price ? (
                        <div>
                            <h3>{detail.name}</h3>
                            <img src={detail.img} alt="" />
                            <p>时间：{filterTime(detail.time)}</p>
                            <p>价格：{filterPrice(detail.price)}</p>
                        </div>
                    ):null
                }
               
            </div>
            
        )
    }
}
