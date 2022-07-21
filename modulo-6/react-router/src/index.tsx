import ReactDOM from 'react-dom/client';
import  { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import { Nav } from './components';
import { AddUser, Categories, UserDetail, Users, UsersList } from './pages';
import "./style.css"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    
  <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/users" element={<Users />}>
          <Route element={<UsersList />} />
          <Route path="add" element={<AddUser /> } />
          <Route path=':pepe' element={<UserDetail />} />
        </Route>



        <Route path='/categories' element={<Categories />} />

        {/* <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>

);
