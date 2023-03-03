import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import RestrauntDetail from "../RestruantDetail";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"
import { MENU_DATA } from "../../mocks/data";
import Header from "../Header";

global.fetch = jest.fn(()=>{
 return Promise.resolve({
                               //Promises use to simulate fetch api call function
    json:()=>{   
        return Promise.resolve(MENU_DATA);

         }    
                                               // create mock api because jestdom doesnt execute fetch
})
});

test("Add Items to Cart", async () => {
    const body = render(
      <StaticRouter>
        <Provider store={store}>
            <Header/>
          <RestrauntDetail />
        </Provider>
      </StaticRouter>
    );
  
    await waitFor(() => expect(body.getByTestId("menu")));
  
    const addBtn = body.getAllByTestId("add-btn");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[2]);
  
    const cart = body.getByTestId("cart-count");
  console.log("cart item"+cart.innerHTML);
    expect(cart.innerHTML).toBe("2"); 
  });
