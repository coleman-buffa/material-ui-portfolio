import './App.css';
import NavBar from "./components/navbar/navbar";
import { Container, Grid } from "@material-ui/core";
import Bio from "./components/bio/bio";
import Projects from "./components/projects/projects";


function App() {
  return (
    <div className="App">
      <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Bio />
        </Grid>
        <Grid item xs={12} md={8}>
          <Projects />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
