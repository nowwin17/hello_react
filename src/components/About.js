import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile"
import React from "react";
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