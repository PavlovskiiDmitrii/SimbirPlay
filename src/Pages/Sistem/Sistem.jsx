import React from "react";
import classNames from "classnames";
import { Divider } from "antd";
import "../page.scss";
import "antd/dist/antd.min.css";

export const Sistem = () => {
  return (
    <div className={classNames("pageWrap")} style={{fontSize : '18px'}}>
      <Divider className={classNames("rule__title")} orientation="left">
        💰 Что такое SimbirPlay 💰
      </Divider>
      <div>
        SimbirPlay - это рейтинговая система сотрудников с возможностью покупки
        мерча SimbirSoft.
      </div>
      <br />
      <div>
        За твои активности руководителем или аккаунт-менеджером начисляются
        баллы и такое же количество виртуальной валюты (SimbirCoin).
      </div>
      <br />
      <div>
        SimbirCoin ты можешь потратить в магазине мерча 🧦 (получить заветную
        футболку, толстовку и др. вещь с логотипом SimbirSoft).
      </div>
      <br />
      <div>
        При покупке мерча тратятся SimbirCoin💎, бонусы остаются неизменными (не
        расходуются). В рейтинге сотрудников учитываются именно начисленные
        бонусы, поэтому ты без опасений можете тратиться свои SimbirCoin.
      </div>
    </div>
  );
};
