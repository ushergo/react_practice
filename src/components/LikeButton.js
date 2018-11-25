import React from 'react'


class  LikeButton extends  React.Component{

    constructor(props) {
        super(props);
        this.state = { liked: false,count: props.initialCount  };
    }

    handleClick(e) {
        this.setState({ liked: !this.state.liked });
    }

    render(){
        const text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick.bind(this)}>
                {this.state.count} You {text} this. Click to toggle.
            </p>
        );
    }
}
export default LikeButton;