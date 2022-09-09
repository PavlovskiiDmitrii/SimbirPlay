import React from "react";
import "antd/dist/antd.min.css";
import {List} from 'antd';
import Card from "antd/es/card/Card";
import {useSelector} from "react-redux";
import {selectHistory} from "../../store/history/historySlice";

import './AccrualHistory.scss'

export const AccrualHistory = () => {
    const items = useSelector(selectHistory);
    return (
        <div className="accrualHistory">
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={<img alt="example" src="https://www.factroom.ru/wp-content/uploads/2017/07/Depositphotos_11683481_l-2015.jpg"/>}
            >
                <span>Кузнецова Ольга </span>
                <span>Frontend-разработчик</span>
            </Card>
            <div className="accrualHistory__container">
            <List
                itemLayout="horizontal"
                dataSource={items}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            /*avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}*/
                            title={
                                <>
                                    <span className="accrualHistory__list">+ {item.points} </span>
                                    <a href="">{item.title}</a>
                                </>}
                            description={item.time}
                        />
                    </List.Item>
                )}
            />
            </div>

        </div>
    );
}
