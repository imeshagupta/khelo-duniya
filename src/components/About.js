import HomeBg from "../assets/gameBG.jpg";

const games = [
  {
    name: "Tic Tac Toe",
    desc: "Challenge your strategy skills in this classic 3x3 grid game.",
  },
  {
    name: "Rock Paper Scissors",
    desc: "Test your luck and outsmart the computer’s choice.",
  },
  {
    name: "Number Guess",
    desc: "Can you guess the secret number in as few tries as possible?",
  },
  {
    name: "Fire Water Gun",
    desc: "A fun twist on rock-paper-scissors with fiery surprises.",
  },
  {
    name: "Cricket",
    desc: "Play a quick cricket match and aim for the highest score!",
  },
  {
    name: "Click Counter",
    desc: "How fast can you click? Beat the timer and your own record.",
  },
  {
    name: "Whack a Mole",
    desc: "Stay sharp and whack those moles before they disappear!",
  },
  {
    name: "Connect Four",
    desc: "Strategically connect four discs to claim victory.",
  },
];

const About = () => {
  return (
    <div
      className="container-fluid px-2 py-5"
      style={{ backgroundImage: `url(${HomeBg})` }}
    >
      <div
        className="container"
        style={{
          maxWidth: "750px",
          backgroundColor: "#f1d5dfff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{ color: "#f15284ff", fontWeight: "700" }}
        >
          About Our "Khelo Duniya"
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#34495e",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          Welcome to your ultimate gaming hub! Dive into a variety of simple yet
          addictive games designed to challenge your mind, reflexes, and
          strategy — all from the comfort of your browser.
        </p>

        <h3
          style={{
            borderBottom: "2px solid #3498db",
            paddingBottom: "8px",
            marginBottom: "1.5rem",
            color: "#2980b9",
          }}
        >
          Games You Can Enjoy
        </h3>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {games.map(({ name, desc }, i) => (
            <li
              key={i}
              style={{
                marginBottom: "18px",
                paddingBottom: "12px",
                borderBottom: "1px solid #ecf0f1",
              }}
            >
              <strong style={{ fontSize: "1.15rem", color: "#2c3e50" }}>
                {name}
              </strong>
              <p
                style={{ marginTop: "6px", color: "#7f8c8d", fontSize: "1rem" }}
              >
                {desc}
              </p>
            </li>
          ))}
        </ul>

        <p
          className="text-center mt-5"
          style={{ color: "#95a5a6", fontStyle: "italic" }}
        >
          Have fun playing and keep pushing your limits! 🚀
        </p>
      </div>
    </div>
  );
};

export default About;
