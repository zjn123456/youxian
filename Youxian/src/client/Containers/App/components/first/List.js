import React, { Component } from 'react';
import './list.css';
class List extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className='list'>
                {
                    this.props.products.map((item, index) => {
                        return (
                            <dl key={index}>
                                <dt>
                                    <img src={item.image} />
                                </dt>
                                <dd>
                                    <h3>{item.name}</h3>
                                    <p>{item.subtitle}</p>
                                </dd>
                            </dl>
                        )
                    })
                }
            </div>
        )
    }
}
export default List;