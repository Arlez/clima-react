import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsulta] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  const {ciudad, pais} =  busqueda;

  useEffect(() => {
 
    const consultarApi = async () => {

      if(consultar){
        const apiKey = '864e023d5c6480948b375336e1843947';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${apiKey}`;
  
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
  
        guardarResultado(resultado);
        guardarConsulta(false);

        if(resultado.cod === '404'){
          guardarError(true);
        }else{
          guardarError(false);
        }
      }
    }
    consultarApi();
    //eslint-disable-next-line
    }, [consultar]);

  let componente;
  if(error){
    componente = <Error mensaje="No hay resultados"/>;
  }else{
    componente = <Clima
                  resultado={resultado}
                />;
  }

  return (
    <Fragment>
      <Header
        titulo="Clima React App"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
