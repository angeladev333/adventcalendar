import './App.css';
import OverlayBox from './components/OverlayBox';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <div className="p-6 min-h-screen min-w-full bg-lightgreen">
        <div className="p-24 grid grid-cols-1 max-w-[964px]">
          <img src="/imgs/chimney.png" alt="Chimney" className="" />
          <div className="px-3">
            <div className="p-6 outline outline-4 outline-primarygreen flex flex-col">
              <div className="grid grid-cols-3 gap-6">
                <OverlayBox dayNumber="1">
                  <p>Hellooo</p>
                </OverlayBox>
                <OverlayBox dayNumber="2"></OverlayBox>
                <OverlayBox dayNumber="3"></OverlayBox>
                <OverlayBox dayNumber="4"></OverlayBox>
                <OverlayBox dayNumber="5"></OverlayBox>
                <OverlayBox dayNumber="6"></OverlayBox>
                <OverlayBox dayNumber="7"></OverlayBox>
              </div>
            </div>
          </div>
          <img src="/imgs/lobby.png" alt="Lobby" className="" />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
