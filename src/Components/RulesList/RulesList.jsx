import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRulesThunk } from "../../store/rules/rulesSlice";
import "antd/dist/antd.min.css";
import "./RulesList.scss";

export const RulesList = () => {
  /*    const {rules} = useSelector(selectRules);*/
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRulesThunk());
  }, [dispatch]);

  return (
    <>
      <h2>💰 Как получить simbircoins? 💰</h2>
      <div className="rule__descr">
        {" "}
        Simbircoins ты можешь получить за развитие, выполнение активностей и
        добрые дела❤. Затем свои Simbircoins ты можешь потратить в нашем
        магазине (получить заветную футболку, толстовку и др. вещь с логотипом
        SimbirSoft).
      </div>
      <h2>⭐ Баллы и валюта начисляется за следующие активности:⭐</h2>
      <span>
        {" "}
        ESG - экология :
        <ul>
          <li>Посадил дерево</li>
          <li>Организовал или помог убрать мусор на природной территории</li>
          <li>Организовал раздельное ведение мусора</li>
        </ul>
        Личный рост сотрудников :
        <ul>
          <li>Сделал ИПР</li>
          <li>Сдал квалификацию</li>
          <li>Выиграл в профессиональном конкурсе</li>
        </ul>
        Клиентская часть :
        <ul>
          <li> Получил положительный отзыв от Клиента</li>
          <li>Спас Команду и продукт Клиента</li>
          <li>Передал референс или информацию для расширения</li>
        </ul>
        Волонтерство: :
        <ul>
          <li>Организовал помощь приюту для бездомных животных</li>
          <li>Организовал помощь социально незащищенной категории</li>
          <li>Провел мероприятие с детьми из детских домов</li>
        </ul>
      </span>
    </>
  );
};
