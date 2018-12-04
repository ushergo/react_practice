import React from 'react'

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {names: ["sdfsdf", "sdd33333", "444444"]}
    }


    render() {
        return (
            <div>
                {
                    this.state.names.map((val,index) => {
                         return <div key={index}> Hello, {val} </div>
                     })
                }
            </div>
        )
    }

}
export  default  Map