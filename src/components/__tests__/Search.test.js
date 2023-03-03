import "@testing-library/jest-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import {Provider} from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"
import { RESTAURANT_DATA } from "../../mocks/data";


global.fetch = jest.fn(()=>{
 return Promise.resolve({
                               //Promises use to simulate fetch api call function
    json:()=>{       return Promise.resolve(RESTAURANT_DATA);

         }    
                                               // create mock api because jestdom doesnt execute fetch
})
});

test('Shimmer should load On Homepage',() => { 

    const body = render(
    <StaticRouter>
    <Provider store={store}>
        <Body/>
        </Provider>
        </StaticRouter>
        )

        const shimmer = body.getByTestId("shimmer");
        
        expect(shimmer.children.length).toBe(10);
        
        //console.log(shimmer)
    });

    test("Restaurants should load on Homepage", async () => {
        const body = render(
          <StaticRouter>
            <Provider store={store}>
              <Body />
            </Provider>
          </StaticRouter>
        );
      
        await waitFor(function (){
      
          const resList = body.getByTestId("restlist");
          expect(resList.children.length).toBe(15);
        });
      
        
      
      });

      test("Search for string(restaurant) on Homepage", async () => {
        const body = render(
          <StaticRouter>
            <Provider store={store}>
              <Body />
            </Provider>
          </StaticRouter>
        );
      
        await waitFor(() => expect(body.getByTestId("search-btn")));
      
        const input = body.getByTestId("search-input");
      
        fireEvent.change(input, {
          target: {
            value: "restaurant",
          },
        });
      
        const searchBtn = body.getByTestId("search-btn");
      
        fireEvent.click(searchBtn);
      
      
        const resList = body.getByTestId("restlist");
      console.log("length of item"+ resList.children.length);
        expect(resList.children.length).toBe(2);
      });