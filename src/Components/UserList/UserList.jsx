import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {StarOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {
    selectUserList,
    fetchUserListThunk,
} from "../../store/userList/userListSlice";
import classNames from "classnames";
import "./userList.scss";
import background from "./static/avatar.jpg";
import {Space, Table, Tag} from "antd";
import Avatar from "antd/es/avatar/avatar";

export const UserList = (selectDirections) => {
    const {users} = useSelector(selectUserList);
    const dispatch = useDispatch();
    const filterUsers = selectDirections.selectDirections === '' ? users :  users.filter(el => el.departament === selectDirections.selectDirections)

    useEffect(() => {
        dispatch(fetchUserListThunk());
    }, []);

    useEffect(() => {
        console.log(filterUsers);
    }, [filterUsers]);

    const columns = [
        {
            title: 'Рейтинг',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating) => (
                <>
                    <StarOutlined twoToneColor="#eb2f96"/>
                    <span>{rating}</span>
                </>
            )
        },
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            render: (name, filtersUserElement) => {
                return (
                    <div className="customCell">
                        {/*<div
                            className={classNames("user__avatar")}
                            style={{backgroundImage: `url(${filtersUserElement.avatar})`}}
                        ></div>*/}
                        <Avatar size={56} src={filtersUserElement.avatar} />
                        <div className="customCell__name">{filtersUserElement.name + ' ' + filtersUserElement.surname}</div>
                    </div>
                );
            }
        },
        {
            title: 'Направление',
            dataIndex: 'departament',
            key: 'departament',
        },
    ];

    return (
        <div>
            <Table key={filterUsers.id} columns={columns} dataSource={filterUsers}/>
            {/*{users.map((user, i) => (
        <div
          className={classNames("user__item", i < 3 ? "user__item_Big" : "")}
          key={user.id}
        >
          <Link to={`/accrualhistory/${i}`}>{'Профиль'}</Link>
          <div className={classNames("user__position")}>{user.id}</div>
          <div
            className={classNames("user__avatar")}
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <div className={classNames("user__name")}>{user.name}{user.surname}</div>
          <div className={classNames("user__rating")}>
            {user.ratingPoints}
            <StarOutlined twoToneColor="#eb2f96" />
          </div>
        </div>
      ))}*/}
        </div>
    );
};
