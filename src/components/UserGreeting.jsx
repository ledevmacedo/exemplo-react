export default function UserGreeting(props) {
  return (
    <div style={{ background: "red", color: "white" }}>
      <h1>Nome:{props.user.firstName}</h1>
      <h1>Apelido:{props.user.lastName}</h1>

      <h1>Horario:{props.capibara.horario}</h1>
      <h1>Comida:{props.capibara.comida}</h1>
    </div>
  );
}
