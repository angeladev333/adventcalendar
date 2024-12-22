import "./App.css";

function App() {
  return (
    <div className="p-6 min-h-screen min-w-full bg-lightgreen">
      <div className="p-24 grid grid-cols-1 max-w-[964px]">
        <img src="/imgs/chimney.png" alt="Chimney" className="" />
        <div className="px-3">
          <div className="p-6 outline outline-4 outline-primarygreen flex flex-col">
            <img src="/imgs/logo.png" />
            <div className="grid grid-cols-3"></div>
          </div>
        </div>
        <img src="/imgs/lobby.png" alt="Lobby" className="" />
      </div>
    </div>
  );
}

export default App;
