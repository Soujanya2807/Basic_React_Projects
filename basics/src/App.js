import Home from "./Home";
import Contact from "./Contact"; 
import About from "./About";
/*import Greet from "./Greet";*/
function App() {
  return (
    <div>
    <h1>Hello from ReactJS</h1>
    <Home name= {'pooja'} age = {22}/>
    <About/>
    <Contact/>
    {/*<Greet name={"Akash"}/>
    <Greet name ={"Ayush"}/>*/}
    
    </div>
  );
}

export default App;
