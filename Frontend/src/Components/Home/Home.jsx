import React, { useState, useEffect } from "react";

const choices = [
  { id: "rock", label: "Rock", emoji: "🪨" },
  { id: "paper", label: "Paper", emoji: "📄" },
  { id: "scissors", label: "Scissors", emoji: "✂️" },
];

const getResult = (player, computer) => {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
};

export default function Home() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  
  // 1. Initialize state with a function to check LocalStorage immediately
  const [score, setScore] = useState(() => {
    if (typeof window !== "undefined") {
      const savedScore = localStorage.getItem("rps-score");
      return savedScore ? JSON.parse(savedScore) : { win: 0, lose: 0, draw: 0 };
    }
    return { win: 0, lose: 0, draw: 0 };
  });

  // 2. Sync state to LocalStorage whenever the score changes
  useEffect(() => {
    localStorage.setItem("rps-score", JSON.stringify(score));
  }, [score]);

  const play = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)].id;
    const outcome = getResult(choice, computer);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(outcome);
    setScore((s) => ({ ...s, [outcome]: s[outcome] + 1 }));
  };

  const reset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    const newScore = { win: 0, lose: 0, draw: 0 };
    setScore(newScore);
    localStorage.setItem("rps-score", JSON.stringify(newScore));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome 👋</h1>
        <p className="text-slate-300 max-w-2xl">
          Your stats are saved! Close the tab and come back anytime to continue.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-slate-900/70 backdrop-blur rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Rock 🪨 Paper 📄 Scissors ✂️
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {choices.map((c) => (
              <button
                key={c.id}
                onClick={() => play(c.id)}
                className="flex flex-col items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 transition rounded-xl py-6 text-lg font-semibold active:scale-95"
              >
                <span className="text-3xl">{c.emoji}</span>
                {c.label}
              </button>
            ))}
          </div>

          <div className="text-center min-h-[120px]">
            {result ? (
              <>
                <p className="text-slate-300">
                  You chose <b>{playerChoice}</b>, computer chose
                  <b> {computerChoice}</b>
                </p>
                <p className={`mt-3 text-2xl font-bold ${
                    result === "win" ? "text-green-400" : 
                    result === "lose" ? "text-red-400" : "text-yellow-400"
                  }`}
                >
                  {result === "win" && "You Win 🎉"}
                  {result === "lose" && "You Lose 😢"}
                  {result === "draw" && "It’s a Draw 🤝"}
                </p>
              </>
            ) : (
              <p className="text-slate-400">Make your move to start the game</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-green-400 text-xl font-bold">{score.win}</p>
              <p className="text-slate-400">Wins</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-red-400 text-xl font-bold">{score.lose}</p>
              <p className="text-slate-400">Losses</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-4">
              <p className="text-yellow-400 text-xl font-bold">{score.draw}</p>
              <p className="text-slate-400">Draws</p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={reset}
              className="px-6 py-2 rounded-full bg-red-600/20 text-red-400 border border-red-600/50 hover:bg-red-600 hover:text-white transition font-semibold"
            >
              Clear History
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}