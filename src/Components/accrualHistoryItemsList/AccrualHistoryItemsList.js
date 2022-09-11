import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, List, Button, Form, Divider, Input } from "antd";
import { fetchAddNewHistory } from "../../api/addNewHistory";
import classNames from "classnames";
import { Select } from "antd";
import {
  selectHistoryUser,
  fetchHistoryThunk,
} from "../../store/history/historySlice";
import { fetchRulesThunk, selectRules } from "../../store/rules/rulesSlice";
import "./AccrualHistory.scss";
import { Popup } from "../Popup/Popup";
import background from "./formula.png";

const { Option } = Select;

export const AccrualHistoryItemsList = () => {
  const dispatch = useDispatch();
  const iserId = useLocation().pathname.split("/").pop();
  const { user } = useSelector(selectHistoryUser);

  const [popupActive, setPopupActive] = useState(false);

  useEffect(() => {
    dispatch(fetchHistoryThunk(iserId));
  }, []);

  const FormHistory = () => {
    const dispatch = useDispatch();
    const { rules } = useSelector(selectRules);
    const [formHistoryProps, setFormHistoryProps] = useState(['...', 100, 1]);

    useEffect(() => {
      dispatch(fetchRulesThunk());
    }, []);

    const handleChange = (value) => {
      setFormHistoryProps([value.label, value.value, value.key]);
    };

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
          name="prom"
          rules={[{ required: true, message: "За что поощряется сотрудник?" }]}
        >
          <Select
            defaultValue={{ value: formHistoryProps[2], label: formHistoryProps[0] }}
            labelInValue
            style={{ width: 120 }}
            onChange={handleChange}
          >
            {
              rules.map((rule) => (
                <Option key={rule.id} value={rule.defaultRating}>{rule.name}</Option>
              ))
            }
          </Select>
        </Form.Item>

        {/* <Form.Item
          label="Поощрение"
          name="username"
          rules={[{ required: true, message: "За что поощряется сотрудник?" }]}
        >
          <Input style={{ marginLeft: "10px" }} />
        </Form.Item> */}

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
              fetchAddNewHistory(
                iserId,
                document.getElementById("basic_password").value,
                formHistoryProps[1],
                formHistoryProps[2],
              )
                .then(() => {
                  setPopupActive(false);
                  alert("Поощрение добавлено!");
                  // window.location.reload();
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
          История зачислений
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
            {/* <Button
              type="primary"
              onClick={() => {
                setPopupActive(true);
              }}
            >
              Добавить баллы
            </Button> */}
          </div>
          <div className={classNames("accrualHistory__game")}>
            <div className={classNames("accrualHistory__game-titile")}>Уровень активности</div>
            <div className={classNames("accrualHistory__game-content")}>
              <div className={classNames("accrualHistory__game-start")}></div>
              <div className={classNames("accrualHistory__game-line")}></div>
              <div className={classNames("accrualHistory__game-position")} style={{ backgroundImage: `url(${background})` }}></div>
              <div className={classNames("accrualHistory__game-finish")}></div>
            </div>
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
