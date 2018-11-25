import React, {Component} from 'react'

class LoveButton extends Component {
    constructor(props) {
        super(props);
        this.state = {love: false, times: props.times, msg: ''}
    }

    LoveClick(msg, event) {//event 参数只能在最后的一个位置
        console.log("状态:" + this.state.love);
        this.setState({love: !this.state.love, msg: msg});
    }

    render() {
        const divClass = {
            width: '500px',
            height: '80px',
            textAligh: 'center',
            border: '1px solid green',
            fontFamily: "Microsoft YaHei",
            fontSize: "18px",
            cursor: 'pointer',
            lineHeight: '80px',
            margin: '50px auto'
        }
        const text = this.state.love === true ? "love" : " don't love"
        return (
            <div style={divClass} onClick={this.LoveClick.bind(this, 'oh myGad')}>
                I {text} you 有 {this.state.times}次!
                <br/>
                <span>{this.state.msg}</span>
            </div>
        )
    }

}

export default LoveButton;