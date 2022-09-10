import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {SketchOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import classNames from "classnames";
import {
    selectStoreItems,
    fetchStoreItemsThunk, buyStoreItemsThunk,
} from "../../store/storeItems/storeItemsSlice";
import "./storeItemsList.scss";
import backgroundVideo from './backgroundVideo.mp4';
import {fetchUserDataThunk, selectUserData} from "../../store/history/historySlice";

export const StoreItemsList = () => {
    const {storeItems} = useSelector(selectStoreItems);
    const {userData} = useSelector(selectUserData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStoreItemsThunk());
        dispatch(fetchUserDataThunk());
    }, []);

    const buyItem = (id) => {
        dispatch(buyStoreItemsThunk(id));
    };
    const addItem = () => {
        console.log('addItem')
    };
    return (
        <>
            <video className={classNames("storeItemsList__video")} autoPlay muted loop preload="auto" src={backgroundVideo}>
            </video>
            <div className={classNames("storeItemsList__card")}>
                <img className={classNames("storeItemsList__card-img")}
                    alt="example"
                    src="https://www.factroom.ru/wp-content/uploads/2017/07/Depositphotos_11683481_l-2015.jpg"
                />
                <div className="card__descr">
                    <span>Иван Осипов{/*{userData.name} {userData.surname}*/}</span>
                    <span>Аналитик</span>
                    <span>Баланс {/*{userData.totalBalance}*/} <SketchOutlined/> SimbirСoin</span>
                </div>
                {/* <span>{searchParams}</span> */}
            </div>

            <div className={classNames("storeItemsList__wrap")}>
                <div className={classNames("storeItemsList__items")}>
                    {storeItems && storeItems.map((item) => (
                        <div key={item.id} className={classNames("storeItemsList__item")}>
                            <img className={classNames("storeItemsList__img")} src="https://img0.happywear.ru/2000x2000/cache/goods/K/R/KR201513_%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9_front.jpg"/>
                            <div>{item.name}</div>
                            <div className="item__price">
                                <div>{item.price}</div>
                                <SketchOutlined/></div>
                            <Button onClick={() => buyItem(item.id)}>Купить</Button>
                        </div>
                    ))}
                </div>
                {/*<Button onClick={addItem} type="primary">Добавить товар</Button>*/}
            </div>
        </>

    );
};
