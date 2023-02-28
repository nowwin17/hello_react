
import { useState } from "react";

const Section = ({title,description, isVisible, setIsVisible}) =>{

    return(
        <div className="border border-black p-2 m-2">
        <h3 className="font-bold text-xl">{title}</h3>
       {isVisible ?
        (<div><button className="cursor-pointer underline" onClick={()=> setIsVisible(false)}>Hide</button>
        <p>{description}</p></div>
        ):
        (<button className="cursor-pointer underline" onClick={()=> setIsVisible(true)}>Show</button>)
} 
        
        </div>
    )
}
const InstaMart = () =>{
const [visibleSection,setVisibleSection] = useState("about")
return (<div>
        <h1 className="text-3xl p-2 m-2">InstaMart Component</h1>
       <Section 
       title={"About Instamart"} 
       description="This is the about section of Instamart"
       isVisible={visibleSection==="about"?true:false}
       setIsVisible={(isVisible)=>{
        isVisible?setVisibleSection("about"):setVisibleSection("")}}
       />
       <Section 
       title={"Team Instamart"} 
       description="This is the team section of Instamart"
       isVisible={visibleSection==="team"?true:false}
       setIsVisible={(isVisible)=>{
        isVisible?setVisibleSection("team"):setVisibleSection("")}}
       />
       <Section
        title={"Carrers Instamart"} 
        description="This is the Career section of Instamart"
        isVisible={visibleSection==="carrers"?true:false}
        setIsVisible={(isVisible)=>{
            isVisible?setVisibleSection("carrers"):setVisibleSection("")}}
        />
       {/**<TeamInstaMart/>
       <Product/>
       <Carrers/>
    */}
        </div>);
};

export default InstaMart;