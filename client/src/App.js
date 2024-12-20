import "./App.css";

function App() {
  return (
    <div className="p-6 min-h-screen min-w-full bg-lightgreen">
      <div className="p-24 grid grid-cols-1 max-w-[964px]">
        <img src="/imgs/chimney.png" alt="Chimney" className="" />
        <div className="px-2">
          <div className="outline outline-4 outline-blue-400">
            <img src="/imgs/logo.png" />
          </div>
        </div>
        <img src="/imgs/lobby.png" alt="Lobby" className="" />
      </div>
    </div>
  );
}

export default App;
