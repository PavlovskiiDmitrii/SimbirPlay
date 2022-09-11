import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, List, Button, Form, Divider, Input } from "antd";
import { fetchAddNewHistory } from "../../api/addNewHistory";
import classNames from "classnames";
import {
  selectHistoryUser,
  fetchHistoryThunk,
} from "../../store/history/historySlice";
import "./AccrualHistory.scss";
import { Popup } from "../Popup/Popup";

export const AccrualHistoryItemsList = () => {
  const dispatch = useDispatch();
  const iserId = useLocation().pathname.split("/").pop();
  const { user } = useSelector(selectHistoryUser);


  console.log(user)

  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    dispatch(fetchHistoryThunk(iserId));
  }, []);

  const FormHistory = () => {
    return (
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Поощрение"
          name="username"
          rules={[{ required: true, message: "За что поощряется сотрудник?" }]}
        >
          <Input style={{ marginLeft: "10px" }} />
        </Form.Item>

        <Form.Item
          label="Комментарий"
          name="password"
          rules={[{ required: false }]}
        >
          <Input style={{ marginLeft: "10px" }} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            onClick={() => {
              fetchAddNewHistory(1, "New Comment", 77)
                .then(() => {
                  setPopupActive(false);
                  alert("Поощрение добавлено!");
                })
                .catch(() => {
                  setPopupActive(false);
                  alert("Повторите позже :(");
                });
            }}
          >
            Добавить Баллы
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div className={classNames("accrualHistory")}>
      <div>
        <Divider
          className={classNames("accrualHistory__title")}
          orientation="left"
        >
          История получения???
        </Divider>
        <div className={classNames("accrualHistory__wrap")}>
          <div className={classNames("accrualHistory__card")}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={user.avatar} />}
            >
              <div>
                <span>
                  {user.name}&nbsp;
                  {user.surname}
                </span>
                <br />
                <span>Frontend-разработчик</span>
              </div>
            </Card>
          </div>
          <div className={classNames("accrualHistory__list")}>
            <List
              size="large"
              footer={<div> Всего : {user.totalRating}💎</div>}
              dataSource={user.stimulus}
              renderItem={(item) => (
                <List.Item>
                  <div>
                    {/* {item.name}__{item.balls}__{item.date} */}

                    <div className={classNames("rule__item")}>
                      <div className={classNames("rule__text")}>
                        <strong>{item.name}</strong>
                      </div>
                      <div className={classNames("rule__ball")}>
                        <strong>{item.balls}</strong> SimbirCoin
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
            />
            <Button
              type="primary"
              onClick={() => {
                setPopupActive(true);
              }}
            >
              Добавить баллы
            </Button>
          </div>
        </div>
      </div>

      {popupActive && (
        <Popup
          setPopupActive={setPopupActive}
          popupActive={popupActive}
          form={<FormHistory />}
        />
      )}
    </div>
  );
};
