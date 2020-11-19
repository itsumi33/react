import React, { Component } from 'react'
import Header from '../../common/Header'
import {Link} from 'react-router-dom'
import {filterPrice,filterTime} from '../../filter/filter'
import {requestFood} from '../../util/request'
export default class Food extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                // {
                //     id: 1,
                //     name: '麻辣香锅',
                //     price: 360,
                //     time:1605770971203
                // },
                // {
                //     id: 2,
                //     name: '麻辣烫',
                //     price: 36,
                //     time:1605880971203
                // },
                // {
                //     id: 3,
                //     name: '麻辣小龙虾',
                //     price: 120.5,
                //     time:1605707571203
                // },
            ]
        }
    }
    goBack() {
        console.log(this.props)
        // this.props.history.go(-1)
        this.props.history.goBack()
    }
    componentDidMount(){
        console.log(this.props)
        requestFood().then(res=>{
            console.log(res)
            this.setState({
                list:res.data.data
            })
        })
    }
    render() {
        let { list } = this.state
        return (
            <div>
                <Header title='美食列表' back></Header>
                <button onClick={() => { this.goBack() }}>返回</button>
                <div> 美食列表</div>
                <div>
                    {
                        list.map(item=>{
                            return (
                                <Link key={item.foodId} to={'/foodDetail/'+item.foodId}>
                                    <p>名字:{item.name}</p>
                                    <p>价格:{ filterPrice(item.price)}</p>
                                    {/* <p>时间:{ filterTime(item.time)}</p> */}
                                    aaaaaa
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
}
