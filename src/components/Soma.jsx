export default function Soma(props) {
    const result = props.a + props.b
  return (
    <div>
      <h1>Soma: {props.a + props.b}</h1>
      <h1>Soma: {result}</h1>
    </div>
  );
}