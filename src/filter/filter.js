export  const filterPrice = (price)=>{
    return  price.toFixed(2)
}

export const filterTime=(time)=>{

    let data  =new Date(time)
    let year = data.getFullYear()
    let month = (data.getMonth()+1+'').padStart(2,'0')
    let day = (data.getDate()+'').padStart(2,'0')

    return `${year}-${month}-${day}`
}