import React, { forwardRef } from "react";
import "./Header.css";
import { sidebarPageIndexMap, sidebarPageNameType } from "../App";

interface HeaderProps {
  sidebarPageName: sidebarPageNameType;
  isSidebarOpen: boolean;
  setIsSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setSidebarPageName: React.Dispatch<React.SetStateAction<sidebarPageNameType>>;
}

const iconMap: { [ key in sidebarPageNameType ]: string[] } = {
  'Welcome': [
    'https://www.w3schools.com/w3images/lights.jpg',
    'https://www.w3schools.com/w3images/map.jpg',
  ],
  'Gantry System': [
    '/resumee/dotnet.png',
    '/resumee/omnisharp.png',
    '/resumee/typescript.png',
  ],
  'Product Catalog': [
    '/resumee/dotnet.png',
    '/resumee/csharp.png',
    '/resumee/visual-studio.png',
  ],
  'Welding Guns': [
    '/resumee/dotnet.png',
    '/resumee/xunit.png',
    '/resumee/codebeamer.png',
  ],
  'Digital Learning': [
    '/resumee/dotnet.png',
    '/resumee/react.png',
    '/resumee/typescript.png',
  ],
  'Home Automation': [
    '/resumee/knx.png',
    '/resumee/node-red.png',
    '/resumee/linux.png',
  ],
};

const Header: React.ForwardRefRenderFunction<HTMLDivElement, HeaderProps> = (
  { sidebarPageName, isSidebarOpen, setIsSidebarOpen, setSidebarPageName },
  ref
) => {
  const currentIndex = Object.values(sidebarPageIndexMap).indexOf(sidebarPageName);
  const numPages = Object.keys(sidebarPageIndexMap).length;

  const goToPreviousPage = () => {
    const previousIndex = (currentIndex - 1 + numPages) % numPages;
    setSidebarPageName(sidebarPageIndexMap[ previousIndex ]);
  };

  const goToNextPage = () => {
    const nextIndex = (currentIndex + 1) % numPages;
    setSidebarPageName(sidebarPageIndexMap[ nextIndex ]);
  };

  return (
    <div className="header" ref={ref}>
      <div className="navigation-item" onClick={goToPreviousPage}>
        {'<'}
      </div>
      <div className="title">
        {sidebarPageName}
      </div>
      <div className="navigation-item" onClick={goToNextPage}>
        {'>'}
      </div>
      <div className="icon-container">
        {iconMap[ sidebarPageName ].map((icon: string, index: number) => (
          <div className="icon" key={index}>
            <img src={icon} alt={sidebarPageName} />
          </div>
        ))}
      </div>
      <div
        className="sidebar-toggle"
        onClick={() => setIsSidebarOpen ? setIsSidebarOpen(!isSidebarOpen) : null}
      >
        {isSidebarOpen ? 'Less ▲' : 'More ▼'}
      </div>
    </div>
  );
};

export default forwardRef(Header);
