import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SketchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import classNames from "classnames";
import {
  selectStoreItems,
  fetchStoreItemsThunk,
} from "../../store/storeItems/storeItemsSlice";
import "./storeItemsList.scss";

export const StoreItemsList = () => {
  const { storeItems } = useSelector(selectStoreItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStoreItemsThunk());
  }, [dispatch]);

  return (
    <div className={classNames("storeItemsList__wrap")}>
      {storeItems.map((item) => (
        <div key={item.id} className={classNames("storeItemsList__item")}>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <SketchOutlined />
        </div>
      ))}
    <Button type="primary">Добавить товар</Button>
    </div>
  );
};
