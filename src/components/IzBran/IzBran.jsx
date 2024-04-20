import React, { useEffect, useState } from 'react'
import './IzBran.css'
import {chosenOne} from '../../data'
import {corzinaka} from '../../data'
import { Link } from 'react-router-dom'
import corzina from '../../assets/svg/corzina.svg'
import heart from '../../assets/svg/heart.svg'
import './IzBran.css'
import deleteButton from '../../assets/svg/deleteButton.svg'

function IzBran() {

    const [data,setData] = useState(chosenOne)
  const [count,setCount] = useState({})
    async function getService () {


    }


    useEffect(()=>{
        getService()
    },[])

    const deleteHandler = (id) => {
   let isFilter = data.filter((x)=>x.id!==id)
   setData(isFilter)
   chosenOne.splice(chosenOne.findIndex((x)=>x.id===id),1)
   
    }

    const increment = (id) => {
        setCount((prev)=>({
            ...prev,
            [id]:(prev[id]||0)+1
        }))
    }
    const decrement = (id) => {
    setCount((prev)=>({
        ...prev,
        [id]:(prev[id]||0)-1
    }))
    }

 const pushHandler = (item,id) => {
  
    
    const isItem = corzinaka.some((x)=>x.id===id)
    console.log(isItem)
   
if(!isItem) {
    corzinaka.push(item)
}

else{
    alert("idi gulai")
}


 }



  return (
    <div className='cart-container'>
    <div className="cart-header">
       <div className="cart-info">
             <div className="cart-image">
                <img src={heart} alt="" />
            </div>
            <h1>избранный</h1>
        </div>
       
    </div>


 <div className="cart-blocks">
    {
       chosenOne.map((item)=>(
               
        <div className="cart-block">
            <img onClick={()=>deleteHandler(item.id,)} className='delete' src={deleteButton} alt="" />
        <div className="image-block-image">
            <img src={item.avatar} alt="avatar" />
        </div>
        <div className="cart-content">
            <h1>{item.name}</h1>
            
            <p>Nike Sportswear Club+ Button-Down
Short-Sleeve Gömlek</p>
<h4>Price: {item.newPrice}$</h4>

<div className="cart-decrament">
<div className="in-dec">
   <button onClick={()=>decrement(item.id)}>-</button>
    <span>{count[item.id]||0}</span>
    <button onClick={()=>increment(item.id)}>+</button>

</div>
<button onClick={()=>pushHandler(item,item.id)}>Добавить в корзину </button>


</div>
        </div>

    </div>

    ))
    }
 
 </div>
 </div>
  )
}

export default IzBran
