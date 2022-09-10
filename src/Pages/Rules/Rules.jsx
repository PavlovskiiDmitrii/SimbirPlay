import React from "react";
import { RulesList } from '../../Components/RulesList/RulesList';
import classNames from "classnames";
import '../page.scss';
import "antd/dist/antd.min.css";


export const Rules = () => {
  return (
    <div className={classNames('pageWrap__rules')}>
        <RulesList/>
    </div>
  );
}
