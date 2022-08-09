import { Outlet } from 'react-router-dom'
import "./style.scss"

function App() {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;