import { Prueba, TableInhabitants } from "./components"
import { inhabitants } from './data';


const App = () => {

  const renderPrueba2 = (value: number) => {

    switch(value) {
      case 1 : 
        return <>Se seleccionó el caso 1</>
      case 2 : 
        return <>Se seleccionó el caso 2</>
      case 3 :
        return <>Se seleccionó el caso 3</>
      default : 
        return <>Se seleccionó un caso erroneo</>
    }

  }

  return (
    <div className="App">
      {
        2 + 2 !== 5 
          ? <div>respuesta correcta</div> 
          : <div>respuesta incorrecta</div>
      }

      {renderPrueba2(6)}

      <TableInhabitants data={inhabitants} />

      <Prueba name="Mariana" email="adrian@ada.com" />

    </div>
  );
}

export default App;
