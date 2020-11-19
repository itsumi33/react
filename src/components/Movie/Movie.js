import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {requestMovie} from '../../util/request'
import {filterPrice,filterTime} from '../../filter/filter'
export default class Food extends Component {
    constructor(){
        super()
        this.state={
            list:[
                // {
                //     id: 1,
                //     name: '大话西游',
                //     price:19.8
                // },
                // {
                //     id: 2,
                //     name: '床下有人',
                //     price: 20
                // },
                // {
                //     id: 3,
                //     name: '咒怨',
                //     price: 38.9
                // },
            
            ]

        }
    }
    componentDidMount(){
        console.log(this.props)
        requestMovie().then(res=>{
            console.log(res)
            this.setState({
                list:res.data.data
            })
        })
    }
    render() {
        let {list} = this.state
        return (
            <div>
               <div>
                    {
                         list.map(item=>{
                            return (
                                <Link key={item.id} to={'/movieDetail?id='+item.id}>
                                    <p>name:{item.name}</p>
                                    <p>price:{filterPrice(item.price)}</p>
                                    <p>time:{filterTime(item.time)}</p>
                                </Link>
                            )
                        })
                    }
               </div>
                
            </div>
        )
    }
}
