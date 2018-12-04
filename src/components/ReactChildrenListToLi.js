import React from 'react'

class ReactChildrenListToLi extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ol>
                {React.Children.map(this.props.children, (child, index) => {
                              return <li key={index}>{child}</li>
                      })
                }
            </ol>
        )
    }
}

export default ReactChildrenListToLi