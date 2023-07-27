import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from "react-router-dom";
import "./App.css";
import {NavBar} from "./components/Navbar/NavBar";
import ItemListContainer from "./components/Itemlistcontainer/ItemListContainer";
import {Item} from "./components/Item/Item";
import {ItemCount} from "./components/Itemcount/ItemCount";
import { Detail } from "./Pages/Detail";
import { Home } from "./Pages/Home";
import { Category } from "./Pages/Category";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar />}> 
      <Route path="/" element={<Home />} /> 
      <Route path="/item/:id" element={<Detail />} />
      <Route path="category/:id" element={<Category />} />
    </Route>
  )
);
function App() {
  return (
    <>
    <div>
      <RouterProvider router={routes} />
      <div className="container">
        <ItemListContainer /> {}
      </div>
    </div>
    </>
  );
}

export default App;