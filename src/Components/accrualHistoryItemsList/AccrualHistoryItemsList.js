import {useDispatch, useSelector} from "react-redux";
import {fetchDataThunk, selectHistory} from "../../store/history/historySlice";
import {useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import Card from "antd/es/card/Card";
import {List} from "antd";
import './AccrualHistory.scss'

export const AccrualHistoryItemsList = () => {
    const userList = useSelector(selectHistory);
/*    const dispatch = useDispatch;*/
    const iserId = useLocation().pathname.split('/').pop();
    console.log(iserId)
/*    useEffect(() => {
        dispatch(fetchDataThunk());
    }, [dispatch]);*/


    return (
        <div className="accrualHistory">
            <Card
                hoverable
                style={{
                    width: 240,
                }}
                cover={
                    <img
                        alt="example"
                        src="https://www.factroom.ru/wp-content/uploads/2017/07/Depositphotos_11683481_l-2015.jpg"
                    />
                }
            >
                <div className="card__descr">
                    <span>Кузнецова Ольга </span>
                    <span>Frontend-разработчик</span>
                </div>
                {/* <span>{searchParams}</span> */}
            </Card>
            <div className="accrualHistory__container">
                <List
                    itemLayout="horizontal"
                    dataSource={userList}
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                /*avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}*/
                                title={
                                    <>
                    <span className="accrualHistory__list">
                      + {item.points}{" "}
                    </span>
                                        <a href="">{item.title}</a>
                                    </>
                                }
                                description={item.time}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
};
