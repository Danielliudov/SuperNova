import React from 'react';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import Baserouter from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <CustomLayout>
        <Baserouter />
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
