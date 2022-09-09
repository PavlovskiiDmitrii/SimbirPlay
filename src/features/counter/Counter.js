import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementAsync,
  selectCount,
} from './counterSlice';
import { Button } from 'antd';
import classNames from 'classnames';
import './сounter.scss';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div>
        <span className={classNames('value')}>{count}</span>
      </div>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button type="primary" onClick={() => dispatch(incrementAsync(incrementValue))}>Primary Button</Button>
      </div>
    </div>
  );
}
