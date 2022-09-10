import React from "react";
import { RulesList } from "../../Components/RulesList/RulesList";
import classNames from "classnames";
import "../page.scss";
import "antd/dist/antd.min.css";

export const Sistem = () => {
  return (
    <div className={classNames("pageWrap")}>
      SimbirPlay - это рейтинговая система сотрудников с возможностью покупки
      мерча SimbirSoft. За твои активности руководителем или аккаунт-менеджером
      начисляются баллы и такое же количество виртуальной валюты (SimbirCoin).
      SimbirCoin ты можешь потратить в магазине мерча (получить заветную
      футболку, толстовку и др. вещь с логотипом SimbirSoft). При покупке мерча
      тратятся SimbirCoin, бонусы остаются неизменными (не расходуются). В
      рейтинге сотрудников учитываются именно начисленные бонусы, поэтому ты без
      опасений можете тратиться свои SimbirCoin.
    </div>
  );
};
