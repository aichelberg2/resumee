import './App.css';
import SplineRender from './Components/SplineRender';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import React from 'react';
import Welcome from './Descriptions/Welcome';

function App() {
  const [ headerTitle, setHeaderTitle ] = React.useState<string>('Home Automation');
  const [ sidebarPage, setSidebarPage ] = React.useState<JSX.Element>(Welcome);


  return (
    <div className="resumee">
      <SplineRender setHeaderTitle={setHeaderTitle} setSidebarPage={setSidebarPage} />
      <Header title={headerTitle} />
      <Sidebar content={sidebarPage} />
    </div>
  );
}

export default App;
