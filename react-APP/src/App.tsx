
// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
 import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // let items=['tubas', 'nablus','ramallah','hebron']
  ;
  // const handleSelectItem=(item:string)=>{
  //   console.log(item);
    
  // }

  // return<div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
   const[alertVisible,setAlertVisiblity]=useState(false)
   return(
  //<div><Alert> hello  <span> world</span></Alert></div>
  <div>
  {alertVisible&& <Alert onClose={()=> setAlertVisiblity(false)}> MY alert</Alert>}
  <Button onClick={()=>setAlertVisiblity(true)
  } color="secondary">
     buttons
  </Button></div>
  );
 }
 export default App;