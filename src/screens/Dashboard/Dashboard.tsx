import React from 'react';

// styles:
import Wrapper from './Dashboard.styles';

// containers:
import { DashboardOptions } from './containers/DashboardOptions';

const Dashboard: React.FC = () => {
  return (
    <Wrapper>
      <div className="container">
        <DashboardOptions />
      </div>
    </Wrapper>
  );
};

export default Dashboard;
