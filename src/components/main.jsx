import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';

import cls from '../style.module.css';

function Main() {
  return (
    <div className={cls.app}>
      <p className={cls.loading}>{process.env.REACT_APP_MESSAGE}</p>
    </div>
  );
}
export default Main;
