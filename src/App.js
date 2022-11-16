import { useEffect, useState } from "react";
import "./App.css";
import data from "./assets/data/data.json";

function App() {
  const [activeKey, setActiveKey] = useState("");
  useEffect(() => {
    document.addEventListener("keydown", (ev) => {
      playSound(ev.key.toUpperCase());
    });
  }, []);

  const drumPads = data;

  const playSound = (selection) => {
    const audio = document.getElementById(selection);
    audio.play();
    setActiveKey(selection);
  };

  return (
    <div className="App">
      <div
        id="drum-machine"
        className="container vh-100 d-flex flex-column justify-content-center align-items-center"
      >
        <header>
          <span className="badge text-bg-secondary mb-5">
            <h1 className="fw-bold">Drum Machine</h1>
          </span>
        </header>
        <article className="d-flex gap-5 justify-content-center align-items-center">
          <div className="drum-pads gap-2">
            {drumPads.map((drumPad) => (
              <div
                key={drumPad.text}
                onClick={() => {
                  playSound(drumPad.text);
                }}
                className="drum-pad d-flex align-items-center justify-content-center border border-secondary rounded shadow text-dark fw-bold"
                id={drumPad.src}
              >
                {drumPad.text}
                <audio
                  id={drumPad.text}
                  className="clip"
                  src={drumPad.src}
                ></audio>
              </div>
            ))}
          </div>
          <div
            id="display"
            className="display text-center fs-6 fw-semibold rounded"
          >
            {(() => {
              switch (activeKey) {
                case "Q":
                  return "Heater 1";

                case "W":
                  return "Heater 2";

                case "E":
                  return "Heater 3";

                case "A":
                  return "Heater 4";

                case "S":
                  return "Clap";

                case "D":
                  return "Open HH";

                case "Z":
                  return "Kick n' Hat";

                case "X":
                  return "Kick";

                case "C":
                  return "Closed HH";

                default:
                  break;
              }
            })()}
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
