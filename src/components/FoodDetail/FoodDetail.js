import React, { Component } from 'react'
import {requestFoodDetail} from '../../util/request'
export default class Food extends Component {
    constructor(){
        super()
        this.state={
            detail:{}
        }
    }

    componentDidMount(){
        console.log(this.props)
        let id = this.props.match.params.foodId
        console.log(id)
        requestFoodDetail(id).then(res=>{
            console.log(res)
            this.setState({
                detail:res.data.detail
            })
        })
    }
    render() {
        let {detail} = this.state
        return (
            <div>
                <p>名字：{detail.name}</p>
                <p>价格:{detail.price}</p>
            </div>
        )
    }
}
