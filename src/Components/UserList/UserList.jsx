import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {
  selectUserList,
  fetchUserListThunk,
} from "../../store/userList/userListSlice";
import classNames from "classnames";
import "./userList.scss";
import background from "./static/avatar.jpg";

export const UserList = () => {
  const { users } = useSelector(selectUserList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserListThunk());
  }, []);

  return (
    <div>
      {users.map((user, i) => (
        <div
          className={classNames("user__item", i < 3 ? "user__item_Big" : "")}
          key={user.id}
        >
          <Link to={`/accrualhistory/${i}`}>{'Профиль'}</Link>
          <div className={classNames("user__position")}>{i + 1}</div>
          <div
            className={classNames("user__avatar")}
            style={{ backgroundImage: `url(${background})` }}
          ></div>
          <div className={classNames("user__name")}>{user.name}</div>
          <div className={classNames("user__rating")}>
            {user.ratingPoints}
            <StarOutlined twoToneColor="#eb2f96" />
          </div>
        </div>
      ))}
    </div>
  );
};
