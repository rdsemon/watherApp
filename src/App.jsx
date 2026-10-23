import Header from "./components/header/Header";
import WetherBoard from "./components/watherBoard.jsx/WetherBoard";

function App() {
  return (
    <>
      <Header />
      <main className="mt-10">
        <WetherBoard />
      </main>
    </>
  );
}

export default App;
