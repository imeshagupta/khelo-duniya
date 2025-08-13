import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";

import TicTacToeImg from "../assets/tictactoe.png";
import RockPaperScissorImg from "../assets/rock paper scissor.jpg";
import NumberGuessImg from "../assets/noguess.jpg";
import FireWaterGunImg from "../assets/fire water gun.jpg";
import CricketImg from "../assets/cricketIcon.jpeg";
import ClickCounterImg from "../assets/click counter.png";
import WhackAMoleImg from "../assets/whack a mole.png";
import ConnectFourImg from "../assets/connect-4.jpg";
import HomeBg from "../assets/gameBG.jpg";

function Home() {
  const navigate = useNavigate();

  const games = [
    {
      name: "Tic Tac Toe",
      desc: "Classic 3x3 game, get three in a row to win!",
      img: TicTacToeImg,
      path: "/tictactoe",
    },
    {
      name: "Rock Paper Scissors",
      desc: "Beat the computer with your hand choice.",
      img: RockPaperScissorImg,
      path: "/rps",
    },
    {
      name: "Number Guess",
      desc: "Guess the hidden number in the fewest tries.",
      img: NumberGuessImg,
      path: "/ng",
    },
    {
      name: "Fire Water Gun",
      desc: "Fun twist on rock-paper-scissors.",
      img: FireWaterGunImg,
      path: "/fwg",
    },
    {
      name: "Cricket",
      desc: "Bat or bowl and try to outscore the computer.",
      img: CricketImg,
      path: "/cricket",
    },
    {
      name: "Click Counter",
      desc: "Click as many times as possible in 10s!",
      img: ClickCounterImg,
      path: "/clickCounter",
    },
    {
      name: "Whack a Mole",
      desc: "Click moles quickly to score points!",
      img: WhackAMoleImg,
      path: "/whackAMole",
    },
    {
      name: "Connect Four",
      desc: "Drop discs and connect four in a row to win.",
      img: ConnectFourImg,
      path: "/connectFour",
    },
  ];

  return (
    <div style={{ backgroundImage: `url(${HomeBg})` }}>
      <div className={styles.homeContainer}>
        {games.map((game, index) => (
          <div className={styles.gameCard} key={index}>
            <h2>{game.name}</h2>
            <img className={styles.gameImage} src={game.img} alt="Icon" />
            <button onClick={() => navigate(game.path)}>Play</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
