import React from "react";
import classNames from "classnames";
import { Divider } from "antd";
import "../page.scss";
import { PlayCircleTwoTone } from "@ant-design/icons";
import "antd/dist/antd.min.css";

export const Sistem = () => {
  return (
    <div className={classNames('pageWrap')}>
      {" "}
      <Divider className={classNames("rule__title")} orientation="left">
        Что такое <PlayCircleTwoTone />
        SimbirPlay
      </Divider>
      <div
        className={classNames("pageWrap")}
        style={{ fontSize: "18px", width: "1300px" }}
      >
        <div>
          <PlayCircleTwoTone /><strong>SimbirPlay</strong> - это рейтинговая система сотрудников с возможностью
          покупки мерча SimbirSoft.
        </div>
        <br />
        <div>
          За твои активности руководителем или аккаунт-менеджером начисляются
          ⭐баллы рейтинга и такое же количество виртуальной валюты
          (SimbirCoin💎).
        </div>
        <br />
        <div>
          SimbirCoin💎 ты можешь потратить в магазине мерча (получить
          заветную футболку, толстовку и др. вещь с логотипом SimbirSoft).
        </div>
        <br />
        <div>
          При покупке мерча тратятся SimbirCoin💎, а ⭐баллы остаются
          неизменными (не расходуются). В рейтинге сотрудников учитываются
          именно начисленные ⭐баллы, поэтому ты без опасений можешь
          тратить свои SimbirCoin💎.
        </div>
      </div>
    </div>
  );
};
