import React from "react";

import "antd/dist/antd.min.css";
import classNames from "classnames";
import "./popup.scss";

import background from "./delete.png";

export const Popup = (props) => {
  return (
   <div className={classNames('popup')}>
        <div className={classNames('popup__content')}>
            {
                props.form
            }
        </div>
        <div className={classNames('popup__esc')} style={{ backgroundImage: `url(${background})` }} onClick={() => {
            props.setPopupActive(!props.popupActive)
        }}/>
   </div>
  );
};
