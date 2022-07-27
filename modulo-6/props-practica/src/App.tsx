import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Contact, ListUsers, DetailUser, AddUser, Home } from "./pages";



const App = () =>  {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<ListUsers />}>
          <Route path=":id" element={<DetailUser />} />
          <Route path="add" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
