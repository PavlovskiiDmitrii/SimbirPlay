import React, {useState} from "react";
import {Select} from "antd";
import classNames from 'classnames';
import "antd/dist/antd.min.css";
import "./DirectionSelect.scss";
import {useSelector} from "react-redux";
import {selectUserList} from "../../store/userList/userListSlice";
import {UserList} from "../UserList/UserList";

const {Option} = Select;

export const DirectionSelect = () => {
    const {users} = useSelector(selectUserList);
    const [selectDirections, setSelectDirections] = useState("Все");

    const handleChange = (value) => {
        setSelectDirections(value);
    };

    return (
        <>
            <div className={classNames('directionSelect-wrap')}>
                <div className={classNames('directionSelect__wrap')}>
                    <div>Направление:</div>
                    <Select
                        className={classNames('directionSelect__select')}
                        defaultValue={[selectDirections]}
                        style={{width: 120}}
                        onChange={handleChange}
                    >
                        {users.concat({departament_id : 2929, departament: "Все"}).map((item) => (
                            <Option key={item.departament_id} value={item.departament}>{item.departament}</Option>
                        ))}
                    </Select>
                </div>
            </div>
            <div className="main__list">
                <UserList selectDirections={selectDirections}/>
            </div>
        </>
    );
};
