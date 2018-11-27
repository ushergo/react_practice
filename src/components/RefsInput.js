import React, {Component} from 'react'

class RefsInput extends Component {

    constructor(props) {
        super(props);
        this.state = { userInput: '' };
    }

    clearAndFocusClick(e) {
        this.setState({userInput: ''}, () => {
            this.refs.theInput.focus()
        })
        // this.setState({theInput:''},function () {
        //     this.refs.theInput.focus()
        // })
    }

    onChangeValue(e) {
        this.setState({userInput: e.target.value})
    }

    render() {
        return (
            <div>
                <div onClick={this.clearAndFocusClick.bind(this)} style={{cursor:'pointer',margin:10}}>点我清空并获取焦点</div>
                <input ref="theInput" value={this.state.userInput} onChange={this.onChangeValue.bind(this)}/>
            </div>
        );
    }

}

export default RefsInput