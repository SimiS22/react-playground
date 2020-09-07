import React, { ChangeEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.scss';
import { AppState } from '../../store';

const Header: React.FC = () => {
  const appName = useSelector((state: AppState) => state.appName);
  const dispatcher = useDispatch();
  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatcher({
      type: 'CHANGE_APP_NAME',
      payload: e.target.value,
    });
  };

  return (
    <div className="header">
      <input value={appName} onChange={changeHandler} />
    </div>
  );
};
export default Header;
