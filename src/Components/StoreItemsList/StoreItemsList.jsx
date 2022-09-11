import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import classNames from "classnames";
import {
  selectStoreItems,
  fetchStoreItemsThunk,
} from "../../store/storeItems/storeItemsSlice";
import { fetchAddNewStoreItem } from "../../api/addNewStoreItem";
import { Popup } from "../Popup/Popup";
import "./storeItemsList.scss";
import backgroundVideo from "./backgroundVideo.mp4";

export const StoreItemsList = () => {
  const { storeItems } = useSelector(selectStoreItems);
  const [popupActive, setPopupActive] = useState(false);
  const dispatch = useDispatch();

  const data = storeItems?.data?.result || [];

  const refff1 = useRef(null);
  const refff2 = useRef(null);

  const FormStore = () => {
    return (
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Название"
          name="username"
          rules={[{ required: true, message: "Как называется товар?" }]}
        >
          <Input ref={refff1} style={{ marginLeft: "10px" }} />
        </Form.Item>

        <Form.Item
          label="Цена"
          name="password"
          rules={[{ required: true, message: "Сколько стоит?" }]}
        >
          <Input ref={refff2} style={{ marginLeft: "10px" }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            onClick={() => {
                fetchAddNewStoreItem(document.getElementById('basic_username').value, document.getElementById('basic_password').value)
                .then(() => {
                  setPopupActive(false);
                  alert("Поощрение добавлено!");
                })
                .catch((err) => {
                  setPopupActive(false);
                  alert("Повторите позже :(");
                  console.log(err)
                });
            }}
          >
            Создать товар
          </Button>
        </Form.Item>
      </Form>
    );
  };

  useEffect(() => {
    dispatch(fetchStoreItemsThunk());
  }, []);

  return (
    <>
      <video
        className={classNames("storeItemsList__video")}
        autoPlay
        muted
        loop
        preload="auto"
        src={backgroundVideo}
      ></video>

      <div className={classNames("storeItemsList__wrap")}>
        <div className={classNames("storeItemsList__items")}>
          {data.map((item) => (
            <div key={item.id} className={classNames("storeItemsList__item")}>
              <img
                className={classNames("storeItemsList__img")}
                src={
                  item.picture
                    ? item.picture
                    : "https://img0.happywear.ru/2000x2000/cache/goods/K/R/KR201513_%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9_front.jpg"
                }
              />
              <div>{item.name}</div>
              <div className="item__price">
                <div>{item.price}💎</div>
              </div>
              <Button onClick={() => {}}>Купить</Button>
            </div>
          ))}
        </div>
        <Button
          onClick={() => {
            setPopupActive(true);
          }}
          type="primary"
        >
          Добавить товар
        </Button>
        {popupActive && (
          <Popup
            setPopupActive={setPopupActive}
            popupActive={popupActive}
            form={<FormStore />}
          />
        )}
      </div>
    </>
  );
};
