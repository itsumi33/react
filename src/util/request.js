import axios from 'axios'
import qs from 'qs'


// 响应拦截
axios.interceptors.response.use(res=>{
    
    console.group("=======请求地址："+res.config.url+"=============")
    console.log(res);
    console.groupEnd()
    return res;
})

export const requestLogin=(params)=>{
    return axios({
        url:'/login',
        method:'post',
        data:qs.stringify(params)
    })
}

export const requestFood=()=>{
    return axios({
        url:'/foodList',
        method:'get',
    })
}


export const requestFoodDetail=(id)=>{
    return axios({
        url:'/getFoodDetail',
        method:'get',
        params:{
            foodId:id
        }
    })
}

export const requestMovie=()=>{
    return axios({
        url:'/movie',
        method:'get',
       
    })
}

export const requestMovieDetail=(id)=>{
    return axios({
        url:'/getMovieDetail',
        method:'get',
        params:{
            id:id
        }
    })
}