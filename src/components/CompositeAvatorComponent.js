import React from 'react'

//组合头像组件

//头像图片组件
const ProfilePic = (props) => {
    return (
        <img alt={props.name} style={{width: 200, height: 200, border: "1px solid #ddd", borderRadius: '50%'}}
             src={'/images/' + props.src + '.jpg'}/>
    );
}

//连接组件
const ProfileLink = (props) => {
    return (
        <a style={{textDecoration: "none"}} href={'http://p4.so.qhmsg.com/t01405f384d8c12b9f9.jpg'}>
            {props.name}
        </a>
    );
}

//头像
class CompositeAvatorComponent extends React.Component {
    constructor(props) {
        super(props);
        let results = []
        for (let i = 1; i < 5; i++) {
            results.push({id: i, src: "" + i, name: "admin" + i})
        }
        this.state = {results: results};
    }


    render() {
        return (
            <div>
                {this.state.results.map((e) => {
                    return (
                        <div key={e.id} data-name={e.name}>
                            <ProfilePic style={{display: "block"}} src={e.src} name={e.name}/>
                            <br/>
                            <ProfileLink style={{display: "block"}} name={e.name}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CompositeAvatorComponent