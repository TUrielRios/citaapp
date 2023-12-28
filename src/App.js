import { Route, Routes } from "react-router-dom";
import Home from './Views/Home/Home';
import './App.css';
import Esunacita  from "./Views/Esunacita/Esunacita";

function App() {
  return (
    <div className="App">
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/esunacita" element={<Esunacita/>} />
      </Routes>
    </div>
  );
}

export default App;