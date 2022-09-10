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
import Card from "antd/es/card/Card";
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
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={
                    <img
                        alt="example"
                        src="https://www.factroom.ru/wp-content/uploads/2017/07/Depositphotos_11683481_l-2015.jpg"
                    />
                }
            >
                {userData && <div className="card__descr">
                    <span>{userData.name} {userData.surname}</span>
                    <span>Аналитик</span>
                    <span>Баланс {userData.totalBalance} Simbircoin</span>
                </div>}
                {/* <span>{searchParams}</span> */}
            </Card>
            <div className={classNames("storeItemsList__wrap")}>
                <div className={classNames("storeItemsList__items")}>
                    {storeItems && storeItems.map((item) => (
                        <div key={item.id} className={classNames("storeItemsList__item")}>
                            <div>{item.name}</div>
                            <div className="item__price">
                                <div>{item.price}</div>
                                <SketchOutlined/></div>
                            <Button onClick={() => buyItem(item.id)}>Купить</Button>
                        </div>
                    ))}
                </div>
                <Button onClick={addItem} type="primary">Добавить товар</Button>
            </div>
        </>

    );
};
