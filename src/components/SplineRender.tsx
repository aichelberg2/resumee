import React from "react";
import Spline from '@splinetool/react-spline';
import "./SplineRender.css";
import { sidebarPageNameType } from "../App";


interface SplineRenderProps {
  setSidebarPage: React.Dispatch<React.SetStateAction<sidebarPageNameType>>;
}

const SplineRender: React.FC<SplineRenderProps> = ({ setSidebarPage }) => {
  // const [ loading, setLoading ] = React.useState(true);
  const [ loadCounter, setLoadCounter ] = React.useState(0);

  const onLoad = () => {
    if (loadCounter === 0) {
      setLoadCounter(1);
      return;
    }

    // setLoading(false);
    // setHeaderTitle('Home Automation');
    // setSidebarPage(<></>);
  }

  return (
    <div className="spline">
      {/* {
        (loading) ?
          <div className="loading">Loading...</div>
          :
          <></>
      } */}
      <Spline scene="https://prod.spline.design/pRIHRNXN4BzzYFVF/scene.splinecode" onLoad={onLoad} />
    </div>
  );
};

export default SplineRender;