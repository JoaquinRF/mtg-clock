import PageContainer from "./components/PageContainer";
import { clocks, getPlayerIndex } from "./mockServer/server";


function App() {
  return (
    <div>
      {clocks.map(clock => {
        const playerIndex = getPlayerIndex(clock.playerName)
        return <PageContainer key={playerIndex} playerInfo={{ name: clock.playerName, playerIndex: playerIndex }} />
      })}
      {/* <PageContainer playerInfo={{ name: 'A', playerIndex: 0 }} /> */}
    </div>
  );
}

export default App;
