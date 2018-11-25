import React,{Component} from 'react'

class LoveButton extends Component {
    constructor(props) {
        super(props);
        this.state = {love: false,times:props.times}
    }

    LoveClick(e) {
        console.log("状态:" + this.state.love);
        this.setState({love: !this.state.love});
    }

    render() {
        var divClass = {
            width: '500px',
            height: '80px',
            textAligh: 'center',
            border: '1px solid green',
            fontFamily: "Microsoft YaHei",
            fontSize: "18px",
            cursor:'pointer',
            lineHeight:'80px',
            margin:'50px auto'
        }
        let text = this.state.love === true ? "love" : " don't love"
        return (
            <div style={divClass} onClick={this.LoveClick.bind(this)}>
                I {text} you 有 {this.state.times}次!
            </div>
        )
    }

}

export  default  LoveButton;