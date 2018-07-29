import React, { Component } from 'react'
import Banner from './banner'
import List from './list'
import data from './data.js'
console.log(data)
class First extends Component {
    constructor(props) {
        super(props)
        this.state = {
            List:data,
            products: [],
            active_index:0,
        }
        this.toPage = this.toPage.bind(this)
    }
    toPage(type,index) {
        console.log(index)
        fetch(`/getProducts?type=${type}`).then((res) =>
            res.json()
        ).then((res) => {
            console.log(res)
            this.setState({
                products: res.products,
                active_index:index,
            })
        })
    }
    //首次渲染
    componentWillMount() {
        const type = 'hb-newsy'
        fetch(`/getProducts?type=${type}`).then((res) =>
            res.json()
        ).then((res) => { 
            console.log(res) 
            this.setState({
                products: res.products,
            })
        })
    }
    render() {
        return (
            <div className='box'>
                <header className='header'>
                    {this.state.List.map((item, index) => {
                        return (
                            <span key={index} onClick={() => { 
                                this.toPage(item.path,index)}} 
                            style={{color:(index===this.state.active_index?"red":"")}}>{item.tit}</span>
                        )
                    })}
                </header>
                <section>
                    <Banner />
                    <List products={this.state.products}/>
                </section>
            </div>
        )
    }
    componentDidMount(){
        this.props.dispatch(this.state.List)
    }
}
export default First;