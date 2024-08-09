import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Portfolyo from './Components/Portfolyo/Portfolyo';
import Work from './Components/WorkPortfolyo/Work';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Work/>
      <Portfolyo/>
      <Footer/>

    </div>
  );
}

export default App;
