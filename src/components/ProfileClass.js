import React from "react";

class Profile extends React.Component{

constructor(props){
    super(props);
    this.state={
        count:0,
        count2:0,
        userInfo:{}

    };
    console.log("child-constructor"+this.props.name);
}

async componentDidMount(){
    //api calls
    const data = await fetch("https://api.github.com/users/nowwin17")
    const json = await data.json()
    console.log(json)
    this.setState({
        userInfo:json
    })
    console.log("child-componentDidMount"+this.props.name);
    this.timer=setInterval(()=>{
        console.log("Namaste React OP");
    },1000)

}

componentDidUpdate(prevProps, prevState){
    if(this.state.count !== prevState.count){
        console.log("Do something when count updated")
    }
    if(this.state.count !== prevState.count){
        console.log("Do something when count2 updated")
    }
    console.log("child-componentDidUpdate"+this.props.name)
}

componentWillUnmount(){
    //remove setInterval
    clearInterval(this.timer)
    console.log("child-componentWillMount"+this.props.name)
}

render(){
    const {userInfo} = this.state; 
    console.log("child-render"+this.props.name)
return (<>
<h1>Profile Class Component</h1>
<img src={userInfo.avatar_url}></img>
<h2>Name: {userInfo.name}</h2>
<h3>location:{userInfo.location}</h3>

<button onClick={()=>{
    this.setState({
        count: 1,
        count2:2
    })
}}>Set Count</button>

</>);
}
}

export default Profile;