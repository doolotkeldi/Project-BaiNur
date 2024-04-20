import React, { useEffect, useState } from 'react';
import heart from '../../assets/svg/heart.svg';
import './Odejda.css';
import { corzinaka } from '../../data';
import { Link } from 'react-router-dom';
import heart2 from '../../assets/svg/heart2.svg';
import { chosenOne } from '../../data';

function Odejda() {
    const API = "https://66090ee3a2a5dd477b1509cc.mockapi.io/bainur";
    const [user, setUser] = useState([]);
    const [data, setData] = useState(chosenOne);
    const [heartStatus,updateHeartStatus]= useState([])

    const pushHandler = (item, id) => {
        const isCorzina = corzinaka.some((x) => x.id === id);
        
        if (!isCorzina) {
            corzinaka.push(item);
        } else {
            alert("Ваш продукт уже в корзинке");
        }
        
    };

    async function getService() {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getService();
    }, []);

    const heartHandler = (id, item) => {
        const isItem = chosenOne.some((x) => x.id === id);
        if (!isItem) {
            chosenOne.push(item);
            updateHeartStatus((prev)=>({
                ...prev,
                [id]:true
            }));
        } else {
            chosenOne.splice(chosenOne.findIndex((x) => x.id === id), 1);
            updateHeartStatus((prev)=>({
                ...prev,
                [id]:false
            }));
        }
    };

    return (
        <div className='image-blocks'>
            {user.slice(0, 4).map((item) => (
                <Link to={`/corzina/${item.id}`} key={item.id} className="image-block">
                    <div className="image-heart">
                        <img
                            onClick={(e) => {
                                e.preventDefault();
                                heartHandler(item.id, item);
                            }}
                            className="heart"
                            src={heartStatus[item.id] ? heart2 : heart}
                            alt=""
                        />
                    </div>
                    <div className="image-info-odejda">
                        <img
                            src={item.avatar}
                            alt=""
                        />
                    </div>
                    <div className="text-info">
                        <h1>{item.name}</h1>
                        <p>{item.info.slice(0, 50)}</p>
                        <div className="price-text">
                            <h5>{item.newPrice}$</h5>
                            <p>{item.oldPrice}$</p>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            pushHandler(item, item.id);
                        }}>Добавить в корзину</button>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Odejda;
