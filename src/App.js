import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/myWork";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />    
      <div className="body">
        <Home />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
