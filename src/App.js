import { useState } from "react";
import NavBar from "./nav-bar";
import CrtEffect from "./CrtEffect/CrtEffect";
import Content from "./content";

export default function App() {
  const [selected, setSelected] = useState("home"); // 🔑 current selection

  return (
    <app-container className="App">
      <CrtEffect>
      </CrtEffect>
      <NavBar selected={selected} onSelect={setSelected} />
      <Content selected={selected} />
      <back-ground></back-ground>
    </app-container>
  );
}
