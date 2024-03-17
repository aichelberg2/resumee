import React from "react";
import Spline from '@splinetool/react-spline';
import "./SplineRender.css";

interface SplineRenderProps {
  setHeaderTitle: React.Dispatch<React.SetStateAction<string>>;
  setSidebarPage: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

const SplineRender: React.FC<SplineRenderProps> = ({ setHeaderTitle, setSidebarPage }) => {
  return (
    <div className="spline">
      <Spline scene="https://prod.spline.design/pRIHRNXN4BzzYFVF/scene.splinecode" />
    </div>
  );
};

export default SplineRender;