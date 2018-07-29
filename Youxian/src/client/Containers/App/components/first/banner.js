import React, { Component } from 'react'
import ReactSwiper from 'react-swipe'
import './banner.css'
class Banner extends Component{
    render(){
        return(
            
            <ReactSwiper className="carousel" swiperOption={{continuous:true,auto:500}}>
                <div className='img'><img src="https://j-image.missfresh.cn/img_20180418180946319.png?iopcmd=thumbnail&type=4&width=640"/></div>
                <div><img src="https://j-image.missfresh.cn/img_20180417103843329.jpg?iopcmd=thumbnail&type=4&width=640"/></div>
                <div><img src="https://j-image.missfresh.cn/img_20180417103000256.jpg?iopcmd=thumbnail&type=4&width=640"/></div>
                <div><img src="https://j-image.missfresh.cn/img_20180418122301240.jpg?iopcmd=thumbnail&type=4&width=640"/></div>
            </ReactSwiper>
        )
    }
}
export default Banner;