import Soma from "./components/Soma";
import UserGreeting from "./components/UserGreeting";

const user = {
  firstName: "Alberto",
  lastName: "Menezes",
};

const capibara = {
  horario: "10:00",
  comida: "torta de atum",
};

function App() {

  return (
    <div className="App">
      <UserGreeting user={user} capibara={capibara} />
      <Soma a={1} b={10} />
    </div>
  );
}

export default App;
