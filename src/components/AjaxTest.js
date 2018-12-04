import React from 'react'
import $ from 'jquery'
class AjaxTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', lastGistUrl: ''}
    }

    componentDidMount() {
        $.get(this.props.source, function (result) {
            let lastGist = result[0];
                this.setState({username: lastGist.owner.login, lastGistUrl: lastGist.html_url})
        }.bind(this))
    }

    render()
    {
        return (
            <div>
                {this.state.username}'s last gist is
                <a href={this.state.lastGistUrl}>here</a>
            </div>
        )
    }
}

export  default  AjaxTest

