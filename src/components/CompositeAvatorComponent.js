import React from 'react'

const ProfilePic = (props) => {
    return (
        <img style={{width:200,height:200,border:"1px solid #ddd",borderRadius:'50%'}} src={'/images/' + props.src + '.jpg'}/>
    );
}

const ProfileLink = (props) => {
    return (
        <a style={{textDecoration:"none"}} href={'http://p4.so.qhmsg.com/t01405f384d8c12b9f9.jpg'}>
            {props.name}
        </a>
    );
}

class CompositeAvatorComponent extends React.Component {
    constructor(props) {
        super(props);
        let results = []
        for (let i = 1; i < 5; i++) {
            results.push({src: "" + i, name: "admin" + i})
        }
        this.state = {results: results};
    }


    render() {
        return (
            <div>
                {this.state.results.map((e) => {
                    return <div key={e.id}>
                        <ProfilePic style={{display:"block"}} src={e.src}/>
                        <br/>
                        <ProfileLink style={{display:"block"}} name={e.name}/>
                    </div>
                })}
            </div>
        )
    }
}

export default CompositeAvatorComponent