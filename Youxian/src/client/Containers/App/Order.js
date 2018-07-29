import React, { Component } from 'react'
export default class Order extends Component {
    constructor() {
        super()
    }
    render() {
        console.log(this)
        return (
            <div>
                order组件
            </div>
        )
    }
}