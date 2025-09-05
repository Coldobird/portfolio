import NavBar from "./nav-bar";
import CrtEffect from "./CrtEffect/CrtEffect";

function App() {
  return (
    <app-container className="App">
      <CrtEffect>
      </CrtEffect>
      <NavBar />
      <content></content>
    </app-container>
  );
}

export default App;