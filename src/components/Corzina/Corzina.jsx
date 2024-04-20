import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import heart from '../../assets/svg/heart.svg'
import redHeart from '../../assets/svg/redHeart.svg'
import './Corzina.css';
// import { useAsyncError } from 'react-router';
import { Link } from 'react-router-dom';
import { corzinaka } from '../../data';



function Corzina() {
  const [isHeart,setIsHeart]= useState(heart)
  const API  = "https://66090ee3a2a5dd477b1509cc.mockapi.io/bainur"
  let {id} = useParams()
  const [user,setUser] = useState({})
 
  async function getService (){
    try {
      const res = await fetch(`${API}/${id}`)
      const data = await res.json()
      setUser(data)
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    getService()
  },[])

  const pushCorzina = (item,id)=> {
    let isCorzina = corzinaka.some((x)=>x.id===id)
if(!isCorzina){
  corzinaka.push(item)
}
else{
  alert("vach product uje v corzine")
}
  }

  return (
    <div className='corzina-container'>
      
      <div className="corzina-blocks">
      
          <div  className="corzina-block">
            
            <div className="corzina-content">
              <Link to={`/corzinaImage/${user.id}`} className="corzina-image">
                <img  src={user.avatar} alt=""  />
              </Link>
              <div className="corzina-images"> 
              </div>
            </div>

            <div className="corzina-info">

              {/* <h1>{user.name}</h1> */}
              <p>{user.info}</p>
              <div className="cart-price">
                <h4>{user.oldPrice}</h4>
                <p>-25%</p>
              </div>
              <div className='size-content'>Размер: <select name="" id="">
                {/* <option value="">{user.size}</option> */}
             {user.size&&user.size.map((item)=>(
              <option>{item}</option>
             ))}
              
                <option value=""></option>
          
                </select>
                </div>
             <h4> Доставка из США до 30 дней</h4>
              <span>Категория: <p>{user.category}</p></span>

              <div className="corzina-push">
                <div className='increament'>
                  <button>-</button>
                      <span>1</span>
                  <button>+</button>
                </div>
                <button onClick={()=>pushCorzina(user,user.id)}>dobavit v korziny</button>
                <img onClick={()=>setIsHeart(isHeart===heart?redHeart:heart)} src={isHeart} alt="" />
              </div>
            </div>
          
          </div>
     
      </div>


    </div>
  );
}

export default Corzina;
