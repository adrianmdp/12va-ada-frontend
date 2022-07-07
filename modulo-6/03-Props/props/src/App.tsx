import { Home, Contact } from './pages'

const jobs = [
  { name: "Job 1", location: 'Argentina', seniority: 'jr'},
  { name: "Job 2", location: 'Colombia', seniority: 'trainee'},
  { name: "Job 3", location: 'Uruguay', seniority: 'ssr'},
]

const App = () => {
  return (

    <Home data={jobs} className="page home" title='Esta es la home' />
    // <Contact />

  );
}

export default App;
