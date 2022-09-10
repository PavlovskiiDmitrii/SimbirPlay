import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {SketchOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import classNames from "classnames";
import {
    selectStoreItems,
    fetchStoreItemsThunk,
} from "../../store/storeItems/storeItemsSlice";
import "./storeItemsList.scss";
import backgroundVideo from './backgroundVideo.mp4';

export const StoreItemsList = () => {
    const {storeItems} = useSelector(selectStoreItems);
    const dispatch = useDispatch();

    const data = storeItems?.data?.result || [];

    // console.log('storeItems', storeItems.data.result)

    useEffect(() => {
        dispatch(fetchStoreItemsThunk());
    }, []);

    return (
        <>
            <video className={classNames("storeItemsList__video")} autoPlay muted loop preload="auto" src={backgroundVideo}>
            </video>

            <div className={classNames("storeItemsList__wrap")}>
                <div className={classNames("storeItemsList__items")}>
                    {data.map((item) => (
                        <div key={item.id} className={classNames("storeItemsList__item")}>
                            <img className={classNames("storeItemsList__img")}
                                src={item.picture? item.picture : 'https://img0.happywear.ru/2000x2000/cache/goods/K/R/KR201513_%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9_front.jpg'}/>
                            <div>{item.name}</div>
                            <div className="item__price">
                                <div>{item.price}</div>
                                <SketchOutlined/></div>
                            <Button onClick={() => {}}>Купить</Button>
                        </div>
                    ))}
                </div>
                {/*<Button onClick={addItem} type="primary">Добавить товар</Button>*/}
            </div>
        </>

    );
};
