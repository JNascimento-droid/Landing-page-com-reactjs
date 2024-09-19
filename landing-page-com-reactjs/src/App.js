import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
          <p>Horadev</p>
      </header>
      <main>
          <section className='box-titulo'>
              <h1>Hora deve</h1>
              <p>Trabalhando com ReactJs, é uma biblioteca javascript para criar SPAs</p>
              <a href='https://reactjs.org/' target='_blank'>Site oficial</a>
          </section>
          <section className='box-requisitos'>
            <h2>Requisitos</h2>
            <p>Veja abaixo os requisitos minimos para aprender React JS:</p>
            <div className='box-cards'>
              <div className='card'>
                <h3>HTML</h3>
                <p>Aprender a estruturar os elementos da pagina com HTML</p>
              </div>
              <div className='card'>
                <h3>CSS</h3>
                <p>Aprender a estilizar os elementos da pagina com CSS</p>
              </div>
              <div className='card'>
                <h3>Javascript</h3>
                <p>Aprender a linguagem utilizada pelo REACT JS, o Javascript</p>
                </div>
            </div>
          </section>
      </main>
      <footer>
        <p className='autor'>Curso de Introdução ao REACT JS - Horadeve</p> 
    </footer>
    </div>
  );
}

export default App;
