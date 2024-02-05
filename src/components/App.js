// create your App component here
import React,{useState,useEffect} from "react";

function DataFetching(){
const [display,setDisplay] = useState(null)
const[loading,setLoading]= useState(true)

useEffect(() => {
    setLoading(true)
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then((data) =>{

     setDisplay(data.message)
     setLoading(false)
    })
},[])
//   if(!display){
//     return <h3>Wait...</h3>
//   }
    return(
        <div>
             {loading ? (
        <p>Loading...</p>
      ) : (
        display && (
            <img src={display} alt="A Random Dog"/>
        )
      )}
        </div>
    )
}
export default DataFetching;