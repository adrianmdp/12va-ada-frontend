import React, {} from 'react';
import { Button, Card } from './components';

const App = () => {

  return (
    <>
      <header></header>

      <nav></nav>

      <main>
        <section>
          <Card />
          <Button 
            type="submit" 
            id="miButton" 
            className="btn btn-primary" 
            size="sm"
            text="Enviar" 
            name="btn" 
          />

          <Button size='xl' text='Borrar' type='reset' />

        </section>
        <section></section>
        <section></section>
      </main>

      <footer></footer>
    </>
  
  );

}

export default App;
