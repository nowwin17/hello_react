import { useEffect, useState } from "react";

const Profile = (props) =>{
const [count, setCount]=useState(0);
const [count2, setCount2]=useState(0);

useEffect(()=>{
    //Api call
    console.log("child useeffect ")

    const timer = setInterval(()=>{
        console.log("Namaste React OP")
    })

    return()=>{
        console.log("child useeffect return")
        clearInterval(timer)
    }
},[]);
useEffect(()=>{
    //Api call
    console.log("child APi call ")
    console.log("do something when count update ");
}, [count]);
useEffect(()=>{
    //Api call
    console.log("do something when count2 update ");
}, [count2]);
console.log("child-render")
    return(
        <>
        <h1>Profile Functional Component</h1>
        <h2>Name:{props.name}</h2>
        <h3>State variable count:{count}</h3>
        <h3>State variable count2:{count2}</h3>
        <button onClick={()=>{setCount(1);setCount(2)}}>Set Count</button>
        </>
    )
}

export default Profile;