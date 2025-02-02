import './App.css';
import OverlayBox from './components/OverlayBox';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  const startDate = new Date('2023-10-15');
  const today = new Date();
  const timeDifference = today - startDate;
  const daysApart = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const nextAnniversary = new Date('2025-10-15');
  const timeUntilNextAnniversary = nextAnniversary - today;
  const daysUntilNextAnniversary = Math.floor(
    timeUntilNextAnniversary / (1000 * 60 * 60 * 24)
  );

  return (
    <NextUIProvider>
      <div className="p-24 min-h-screen min-w-full">
        <div className="text-center">
          <h1 className="font-bold text-5xl text-rose-500">
            For Ririe, from Ranrie
          </h1>
          <p className="text-xl p-4 text-rose-300">2.14.2025</p>
        </div>
        <div className="p-6 grid grid-cols-1 max-w-[964px]">
          <img src="/imgs/chimney.png" alt="Chimney" className="" />
          <div className="px-3">
            <div className="p-6 outline outline-4 outline-primarypink flex flex-col bg-whitebeige">
              <div className="grid grid-cols-3 gap-6">
                <OverlayBox dayNumber="1" title="Day 1 - The Beginning">
                  <>
                    <p>
                      Happy{' '}
                      <span className="underline decoration-wavy decoration-primarypink">
                        {daysApart}{' '}
                      </span>
                      days from our first day dating! <br />
                      Did you know we're also{' '}
                      <span className="underline decoration-wavy decoration-primarypink">
                        {daysUntilNextAnniversary}
                      </span>{' '}
                      days from our next anniversary?
                    </p>
                    <img
                      src="https://media.tenor.com/WUfk54aazc8AAAAM/filthy-frank-dance-filthy-frank.gif"
                      alt="Filthy Frank Dance"
                      className="m-4 h-48 w-auto mx-auto"
                    />
                    <p mb-4>
                      <a
                        className="text-center underline decoration-whitebeige"
                        href="https://open.spotify.com/playlist/5JzRdivzrRDt1i6KC65vJJ?si=A9PyLh5UQNSVeZYKIUbhxQ&pi=QDU-m-zySKSsz"
                      >
                        Listen to this 7-pieces playlist while opening the
                        cards!
                      </a>
                      <br />I filled it with the most memorable songs for
                      different reasons, try to guess why I included each one{' '}
                      {';)'}
                    </p>
                  </>
                </OverlayBox>
                <OverlayBox dayNumber="2" title="Day 2 - Learning">
                  <>
                    <p>
                      Remember when we first started dating, we promised each
                      other to mutually improve, academically and personally?{' '}
                    </p>
                    <img
                      src="https://media0.giphy.com/media/1oBwBVLGoLteCP2kyD/200w.gif?cid=6c09b952wtump61pv10txtb0ddfj5jf1f9po99h21yngurot&ep=v1_gifs_search&rid=200w.gif&ct=g"
                      alt="studying Ririe"
                      className="m-4 h-36 w-auto mx-auto"
                    />
                    <p>
                      Let's keep on doing that, whether it's leetcoding,
                      exploring nature and other fun places, or *trying to*
                      study together, I've learnt a lot from you and I'll keep
                      on trying to improve. I hope you feel the same way too.
                    </p>
                    <p className="underline">
                      The next 7 bobas are on me, to fuel our study sessions! 🧋
                    </p>
                  </>
                </OverlayBox>
                <OverlayBox dayNumber="3" title="Day 3 - Acclimation">
                  <>
                    <p>
                      With each passing day, spending time together may not be a
                      special occasion anymore. But despite becoming accustomed
                      to your presence in my life, I'll make an effort to treat
                      everyday as special as today.
                    </p>
                    <img
                      src="https://i.pinimg.com/originals/fa/6b/fa/fa6bfabcc8600a6ddabf9fcb350890b5.gif"
                      alt="sleeping Ranrie"
                      className="m-4 h-48 w-auto mx-auto"
                    />
                    <p className="underline">
                      Here's to more sleep together! +7 Sleepy Coupons.
                    </p>
                  </>
                </OverlayBox>
                <OverlayBox dayNumber="4" title="Day 4 - Appreciation">
                  <>
                    <p>Thank you for showing up in my life Ririe. I love </p>
                    <p>Ms Fu on me {':)'}</p>
                  </>
                </OverlayBox>
                <div className="grid grid-cols-1">
                  <OverlayBox dayNumber="5"></OverlayBox>
                  <OverlayBox
                    dayNumber="6"
                    title="Day 6 - Bracing Against the Unknown"
                  ></OverlayBox>
                </div>
                <OverlayBox
                  dayNumber="7"
                  title="Day 7 - Promises and Constants"
                >
                  <>
                    <p>
                      I promise to always be there for you, to support you, to
                      love you, and to cherish you. <br />
                      I promise to always be honest with you, to communicate
                      with you, and to be patient with you. <br />
                      I promise to always be kind to you, to respect you, and to
                      be loyal to you. <br />
                      I promise to always be your partner, your friend, and your
                      lover. <br />I promise to always be your Ranrie.
                    </p>
                    <img
                      src="https://media.tenor.com/UtEMV7qJev8AAAAi/hiiru-hiiruthemouse.gif"
                      alt="Ranrie's Choco gift"
                      className="m-4 h-48 w-auto mx-auto"
                    />
                    <p>Happy Valentines Day, Ririe!</p>
                  </>
                </OverlayBox>
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
