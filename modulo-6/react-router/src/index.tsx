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
        <Route path='/' element={<App />}> /
          <Route path="" element={<UsersOutlet />}> /
            <Route index element={<UsersList />} /> /
            <Route path="users/add" element={<AddUser /> } /> /users/add
            <Route path='users/:pepe' element={<UserDetail />} /> /users/:pepe
          </Route>



          <Route path='categories' element={<CategoriesOutlet />}> /categories
            <Route index element={<CategoryList />} /> /categories
            <Route path="add" element={<AddUser /> } /> /categories/add
            <Route path=':pepe' element={<UserDetail />} /> /categories/:pepe
          </Route>

          <Route path='/tasks' element={<TasksOutlet />}>
          </Route>
        </Route>

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
