import React, { useState } from "react";
import { Select } from "antd";
import classNames from 'classnames';
import "antd/dist/antd.min.css";
import "./DirectionSelect.scss";

const { Option } = Select;

const defaultDirections = ["Все", "Frontend", "Backend", "QA"];

export const DirectionSelect = () => {
  const [selectDirections, setSelectDirections] = useState(
    defaultDirections[0]
  );

  const handleChange = (value) => {
    setSelectDirections(value);
  };
  return (
    <div className={classNames('directionSelect__wrap')}>
      <div>Направление:</div>
      <Select
        className={classNames('directionSelect__select')}
        defaultValue={selectDirections}
        style={{ width: 120 }}
        onChange={handleChange}
      >
        {defaultDirections.map((item) => (
          <Option key={item} value={item}>{item}</Option>
        ))}
      </Select>
    </div>
  );
};
