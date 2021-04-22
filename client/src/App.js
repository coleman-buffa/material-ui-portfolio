import './App.css';
import NavBar from "./components/navbar/navbar";
import Container from "@material-ui/core/container";
import Bio from "./components/bio/bio";
import Projects from "./components/projects/projects";


function App() {
  return (
    <div className="App">
      <Container>
        <Bio/>
      <Projects/>
      </Container>

    </div>
  );
}

export default App;
