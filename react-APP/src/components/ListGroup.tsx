import { useState } from "react";
import { Fragment } from "react/jsx-runtime"
// import { MouseEvent } from "react"
interface Props{
    items:string[];
    heading:string;
    onSelectItem:(item:string)=>void;
}
function ListGroup({items,heading,onSelectItem}:Props) {
    // let items=['tubas', 'nablus','ramallah','hebron']

;
 const [selectedClick,setSelectedClick]= useState(-1);
// const [name,setName]=useState('')
    // const handleClick=(event:MouseEvent)=>console.log(event)

    return(<Fragment><h1> {heading}</h1>
    {
       items.length===0 ? <p> Not found items</p>:null
        
    }
    {
              items.length===0 && <p> Not found items</p>

    }
    <ul className="list-group">
  {
    items.map((item,index)=><li  key={item}
    className= { selectedClick === index ?"list-group-item active":'list-group-item'  } 
    
    
    onClick={()=>{
        setSelectedClick(index);
        onSelectItem(item)
    }
    }>{item}</li>
)
  }
 
</ul></Fragment>
)}
export default ListGroup