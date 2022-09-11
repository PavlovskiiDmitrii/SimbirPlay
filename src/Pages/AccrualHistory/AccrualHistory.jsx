import React from "react";

import {AccrualHistoryItemsList} from "../../Components/AccrualHistoryItemsList/AccrualHistoryItemsList";
import classNames from "classnames";
import "../page.scss";

export const AccrualHistory = () => {
    return (
        <div className={classNames('pageWrap')}>
            <AccrualHistoryItemsList/>
        </div>
    );
};
