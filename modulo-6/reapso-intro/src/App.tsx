import { useState } from "react";
import { Dashboard, Login, Players, Teams } from "./pages";

import "./style.scss"

const App = () => {

  const [pageToRender, setPageToRender] = useState(<Login />)

    const renderPage = (page: string) => {    

        switch (page) {
          case 'login': setPageToRender(<Login />)
            break;
          
          case 'dashboard': setPageToRender(<Dashboard />)
            break;
    
          case 'players': setPageToRender(<Players />)
            break;

          case 'teams': setPageToRender(<Teams />)
            break;
    
          // case 'teams': setPageToRender(<Teams />)
          //   break;
        
          default:
            return null; // setPageToRender(<Error />)
        }
      }

  

  return (
    <div className="app">

      <nav>
        <ul>
            <li>
              <button onClick={() => renderPage('login')}>Login</button>
            </li>
            <li>
              <button onClick={() => renderPage('dashboard')}>Dashboard</button>
            </li>
            <li>
              <button onClick={() => renderPage('players')}>Players</button>
            </li>
            <li>
              <button onClick={() => renderPage('teams')}>Teams</button>
            </li>
        </ul>
      </nav>
     

      {pageToRender}
    </div>
  );
}

export default App;
