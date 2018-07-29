import  React,{Component} from 'react'
import {
    withRouter,
} from 'react-router-dom'
import routers from './routeConfig.js'
class Foot extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active_index: 0,
        }
    }
    toPath(path, index) {
        const { history } = this.props
        history.push(path)
        this.setState({
            active_index: index,
        })
    }
    render() {
        return (
            <footer className='footer'>
                {
                    routers.map((item, index) => {
                        return <span key={index} onClick={() => {
                            this.toPath(item.path, index)
                        }} style={{ background: (index === this.state.active_index ? 'orange' : "") }}>{item.name}</span>
                    })
                }
            </footer>
        )
    }
}
export default withRouter(Foot) ;