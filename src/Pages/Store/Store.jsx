import React from "react";
import { StoreItemsList } from '../../Components/StoreItemsList/StoreItemsList';
import classNames from "classnames";
import '../page.scss';
import "antd/dist/antd.min.css";


export const Store = () => {
  return (
    <div className={classNames('pageWrap')}>
        <StoreItemsList/>
    </div>
  );
}
