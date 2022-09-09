import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRules,
  fetchRulesThunk,
} from "../../store/rules/rulesSlice";
import classNames from "classnames";
import "antd/dist/antd.min.css";


export const RulesList = () => {
  const {rules} = useSelector(selectRules);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchRulesThunk());
  }, [dispatch]);

  return (
    <div>
        {
          rules.map((rule) => (
            <div key={rule.id}>
              {rule.text}
            </div>
          ))
        }
    </div>
  );
}
