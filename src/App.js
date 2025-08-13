import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RockPaperScissor from "./components/RockPaperScissor";
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";
import NumberGuess from "./components/NumberGuess";
import FireWaterGun from "./components/FireWaterGun";
import Cricket from "./components/Cricket";
import ClickCounter from "./components/ClickCounter";
import WhackAMole from "./components/WhackAMole";
import ConnectFour from "./components/ConnectFour";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rps" element={<RockPaperScissor />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/ng" element={<NumberGuess />} />
        <Route path="/fwg" element={<FireWaterGun />} />
        <Route path="/cricket" element={<Cricket />} />
        <Route path="/clickCounter" element={<ClickCounter />} />
        <Route path="/whackAMole" element={<WhackAMole />} />
        <Route path="/connectFour" element={<ConnectFour />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
