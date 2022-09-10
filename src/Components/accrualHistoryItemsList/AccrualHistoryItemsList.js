import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, List } from "antd";
import {
  selectHistoryUser,
  fetchHistoryThunk,
} from "../../store/history/historySlice";
import "./AccrualHistory.scss";

export const AccrualHistoryItemsList = () => {
  const dispatch = useDispatch();
  const iserId = useLocation().pathname.split("/").pop();
  const { user } = useSelector(selectHistoryUser);

  useEffect(() => {
    dispatch(fetchHistoryThunk(iserId));
  }, []);

  return (
    <div className="accrualHistory">
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="example" src={user.avatar} />}
      >
        <div>
          <span>
            {user.name}
            {user.surname}
          </span>
          <br />
          <span>Frontend-разработчик</span>
        </div>
      </Card>

      <div className="accrualHistory__container">
        <List
          dataSource={user.stimulus}
          renderItem={(item) => (
            <List.Item>
              <div>
                {item.name}_{item.balls}+{item.date}
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
