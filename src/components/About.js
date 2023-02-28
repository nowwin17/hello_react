import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile"
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
    }
    componentDidMount(){
        //best place to make an api call
        console.log("Parent componentDidMount")

    }
    render(){
        console.log("Parent render")
        return(
            <div>
                <h1>About Us</h1>
              <UserContext.Consumer>
                {({user})=><h4 className="font-bold text-xl p-10">{user.name}</h4>}
              </UserContext.Consumer>
                <p>
                    This is about page component
                </p>
                {/**<Profile name={"First child"}/>*/}
                <ProfileFunctionalComponent name={"Second child"}/>
            </div>
        );
    }
}

export default About