import React from "react";
import { DirectionSelect } from "../../Components/DirectionSelect/DirectionSelect";
import classNames from "classnames";
import '../page.scss';
import './main.scss';
import { UserList } from "../../Components/UserList/UserList";

export const Main = () => {
  return (
    <div className={classNames('pageWrap')}>
      <div className="main__header-wrap">
        <DirectionSelect />
      </div>
      <div className="main__list">
        <UserList/>
      </div>
    </div>
  );
};
