//Props
export default function CoreConcept(props) {
  //function CoreConcept({image, title, description}) { can also be used
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
