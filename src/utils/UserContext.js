import { createContext } from "react";

const UserContext = createContext({
    user:{
    name:"Dummy name",
    email: "dummy@gmail.com"
}
}) 

UserContext.displayName = "UserContext" //it is used for debugging using react dev tool find context provider using name

export default UserContext;