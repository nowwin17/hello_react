import { render } from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";  //this router run without browser
import dummyLogo from "../../mocks/dummyLogo";

test("Logo should load on rendering header",()=>{
    //Load header
    const header=render(
    <StaticRouter>
    <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>
        );  //its container to load header component in jsdom of jest
     
     const logo = header.getByTestId("logo")
     console.log(logo.src)   
    //check if logo is loaded
     expect(logo.src).toBe("http://localhost/dummy.png")

    
})


test("Logo should load on rendering header",()=>{
    //Load header
    const header=render(
    <StaticRouter>
    <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>
        );  //its container to load header component in jsdom of jest
     
     const onlineStatus = header.getByTestId("online-status")
     //console.log(logo.src)   
    //check if logo is loaded
     expect(onlineStatus.innerHTML).toBe("Online")
     
    
})

test("Cart item should 0 on load",()=>{
    //Load header
    const header=render(
    <StaticRouter>
    <Provider store={store}>
        <Header/>
        </Provider>
        </StaticRouter>
        );  //its container to load header component in jsdom of jest
     
     const cartitem = header.getByTestId("cart-count")
     //console.log(logo.src)   
    //check if logo is loaded
     expect(cartitem.innerHTML).toBe("0")
     
    
})