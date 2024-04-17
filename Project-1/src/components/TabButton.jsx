export default function TabButton(props) {
  /* function handleClick() {
    props.onClick();
    console.log("clicked");
  } */
  return (
    <li>
      <button className={props.isSelected ? 'active': undefined} onClick={props.onClick}>{props.children}</button>
      </li>
      );
      {/* Don't use handleClick() here because it means that <button OnClick={handleClick()}>{props.children}</button> will
      be executed when this complete line executes so use only handleClick here which means react will call this function to 
      execute */}
      {/* props.children is by default always there for our use and also it refers to text written between TabButton tags */}
    

    {/* We could have used <TabButton label='Components'></TabButton> and than here in TabButton we could have written 
export default function TabButton({label}){ return <li><button>{label}</button></li>} */}
  
}
