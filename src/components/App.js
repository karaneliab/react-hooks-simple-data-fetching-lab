// create your App component here
import React,{useState,useEffect} from "react";

function DataFetching(){
const [display,setDisplay] = useState(null)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((data) => setDisplay(data.message))
},[])
  if(!display){
    return <h3>Wait...</h3>
  }
    return(
        <div>
            <p>Loading...</p>
            <img src={display} alt="A Random Dog"/>
        </div>
    )
}
export default DataFetching;