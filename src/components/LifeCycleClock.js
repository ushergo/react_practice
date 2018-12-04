import React, {Component} from 'react'

class LifeCycleClock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        //启动定时器
        this.TimerId = setInterval(() => {
            this.Tick()
        }, 1000)
    }

    componentWillUnmount() {
        //销毁定时器
        clearInterval(this.TimerId)
    }

    Tick() {
        this.setState({date: new Date()})
    }

    render() {
        let styles = { width: 300,
            height: 50,
            border: "1px solid gold",
            margin:"0 auto"

        }
        return (
            <div style={styles}>
                <p>
                    <span>时间：</span><span>{this.state.date.toLocaleTimeString()}</span>
                </p>
            </div>
        )
    }

}

export default LifeCycleClock