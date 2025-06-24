import React from "react";
import Navbar from "./components/Navigator";
import Tittle from "./components/Tittle";

function App() {

  /*   const [message, setMessage] = React.useState();

  React.useEffect(
    () =>
      setMessage(
        "- Dungeons & Dragons (D&D) é um jogo de interpretação de papéis (RPG) em que os jogadores criam personagens e vivem aventuras em mundos de fantasia, guiados por um Mestre (DM) que narra a história e controla os desafios. Utilizando dados, fichas e imaginação, os participantes exploram masmorras, enfrentam monstros, tomam decisões morais e interagem com personagens e cenários diversos. Cada sessão pode variar entre combates táticos, resolução de enigmas e desenvolvimento de histórias profundas. D&D promove criatividade, trabalho em equipe e improvisação, sendo considerado o RPG de mesa mais popular do mundo desde sua criação em 1974."
      ),
    []
  );
 */

  return (
    <div className="w-screen h-screen px-15 flex-wrap justify-items-center">
      <Navbar />
      <Tittle />
      
      {/*       <div className="flex flex-col items-center justify-center w-1/2 p-5 rounded-md bg-blue-400">
        <p className="text-5xl font-medium underline text-pink-400">
          Dungeons & Dragons
        </p>
        <p className="text-2xl font-medium text-white text-justify pt-5 pb-5 px-6">
          {message}
        </p>
        <button
          className="rounded-full bg-purple-700 px-3 p-1 text-white"
          onClick={() =>
            setMessage(
              "Um dragão acabou incinerando todo o texto... culpa sua."
            )
          }
        >
          Botão (obs. não clique aqui)
        </button>
      </div> */}
    </div>
  );
}

export default App;
