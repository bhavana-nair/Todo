import{FaStar} from "react-icons/fa"

function Star({selected= false, onSelect }){
    return (
    <FaStar 
    color={selected ? "yellow" : "black"}
    onClick= {onSelect}
    />
    );
  }

  export default Star;