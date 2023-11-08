import * as React from 'react';

import Userfront from '@userfront/toolkit/react';

export default function Backoffice() {
  return (
    
    <div >
        <h1>backoffice</h1>
        <button onClick={Userfront.logout}>Logout</button>
    </div>
  );
}
