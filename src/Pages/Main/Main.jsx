import React from "react";
import { DirectionSelect } from "../../Components/DirectionSelect/DirectionSelect";
import classNames from "classnames";
import '../page.scss';
import './main.scss';

export const Main = () => {
  return (
    <div className={classNames('pageWrap')}>
        <DirectionSelect/>
    </div>
  );
};
