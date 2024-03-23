import React, { useCallback, useEffect, useRef, useState } from "react";
import Spline, { SplineEvent } from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import "./Dashboard.css";
import Toggle from "./Toggle";
import SwitchAllButtons from "./SwitchAllButtons";

type DataPointType = {
  floor: "EG" | "OG";
  address: string;
  value: boolean;
};

const Dashboard = () => {
  const splineApp = useRef<Application | null>(null);
  const splineRef = useRef<HTMLDivElement | null>(null);
  const [floor, setFloor] = useState<"EG" | "OG">("EG");
  const [isLightVisible, setIsLightVisible] = useState(true);
  const [dataPoints, setDataPoints] = useState<Map<string, DataPointType>>(
    new Map<string, DataPointType>([
      [
        "Light Group Tv",
        { floor: "EG", address: "light-group-tv", value: false },
      ],
      [
        "Blind Group Tv",
        { floor: "EG", address: "blind-group-tv", value: false },
      ],
      [
        "Light Group Kitchen",
        { floor: "EG", address: "light-group-kitchen", value: false },
      ],
      [
        "Blind Group Kitchen",
        { floor: "EG", address: "blind-group-kitchen", value: false },
      ],
      [
        "Light Group Table",
        { floor: "EG", address: "light-group-table", value: false },
      ],
      [
        "Blind Group Table left",
        { floor: "EG", address: "blind-group-table-left", value: false },
      ],
      [
        "Blind Group Table right",
        { floor: "EG", address: "blind-group-table-right", value: false },
      ],
      [
        "Light Group Toilet",
        { floor: "EG", address: "light-group-toilet", value: false },
      ],
      [
        "Blind Group Toilet",
        { floor: "EG", address: "blind-group-toilet", value: false },
      ],
      [
        "Light Group Erker",
        { floor: "EG", address: "light-group-erker", value: false },
      ],
      [
        "Blind Group Erker inside",
        { floor: "EG", address: "blind-group-erker-inside", value: false },
      ],
      [
        "Light Group Erker left",
        { floor: "EG", address: "light-group-erker", value: false },
      ],
      [
        "Blind Group Erker left",
        { floor: "EG", address: "blind-group-erker-left", value: false },
      ],
      [
        "Blind Group Erker middle",
        { floor: "EG", address: "blind-group-erker-middle", value: false },
      ],
      [
        "Blind Group Erker right",
        { floor: "EG", address: "blind-group-erker-right", value: false },
      ],
      [
        "Light Group Guest",
        { floor: "EG", address: "light-group-counter", value: false },
      ],
      [
        "Blind Group Guest",
        { floor: "EG", address: "blind-group-counter", value: false },
      ],
      [
        "Light Group Stairs EG",
        { floor: "EG", address: "light-group-stairs-eg", value: false },
      ],
      [
        "Light Group Counter",
        { floor: "EG", address: "light-group-counter", value: false },
      ],
      [
        "Blind Group Counter",
        { floor: "EG", address: "blind-group-counter", value: false },
      ],
      [
        "Light Group Entrance",
        { floor: "EG", address: "light-group-entrance", value: false },
      ],
      [
        "Light Group Child 1 desk",
        { floor: "OG", address: "light-group-child-1-desk", value: false },
      ],
      [
        "Light Group Child 1 ceiling",
        { floor: "OG", address: "light-group-child-1-ceiling", value: false },
      ],
      [
        "Light Group Stairs OG",
        { floor: "OG", address: "light-group-stairs-og", value: false },
      ],
      [
        "Light Group Bathroom",
        { floor: "OG", address: "light-group-bathroom", value: false },
      ],
      [
        "Light Group Bedroom",
        { floor: "OG", address: "light-group-bedroom", value: false },
      ],
      [
        "Light Group Child 2",
        { floor: "OG", address: "light-group-child-2", value: false },
      ],
      [
        "Light Group Change",
        { floor: "OG", address: "light-group-change", value: false },
      ],
      [
        "Blind Group Child 1",
        { floor: "OG", address: "blind-group-child-1", value: false },
      ],
      [
        "Blind Group Child 2 open",
        { floor: "OG", address: "blind-group-child-2-open", value: false },
      ],
      [
        "Blind Group Child 2 closed",
        { floor: "OG", address: "blind-group-child-2-closed", value: false },
      ],
      [
        "Blind Group Sleep right",
        { floor: "OG", address: "blind-group-sleep-right", value: false },
      ],
      [
        "Blind Group Sleep bottom",
        { floor: "OG", address: "blind-group-sleep-bottom", value: false },
      ],
      [
        "Blind Group Bathroom open",
        { floor: "OG", address: "blind-group-bathroom-open", value: false },
      ],
      [
        "Blind Group Bathroom closed",
        { floor: "OG", address: "blind-group-bathroom-closed", value: false },
      ],
    ]),
  );

  useEffect(() => {
    window.addEventListener("resize", adjustCanvasSize);
    adjustCanvasSize();
    return () => {
      window.removeEventListener("resize", adjustCanvasSize);
    };
  }, []);

  const simulateKeyPress = () => {
    if (splineRef.current) {
      const keyDownEvent = new KeyboardEvent("keydown", {
        key: "q",
        code: "KeyQ",
        charCode: 0,
        keyCode: 81,
        view: window,
        bubbles: true,
      });

      splineRef.current.dispatchEvent(keyDownEvent);

      const keyUpEvent = new KeyboardEvent("keyup", {
        key: "q",
        code: "KeyQ",
        charCode: 0,
        keyCode: 81,
        view: window,
        bubbles: true,
      });

      splineRef.current.dispatchEvent(keyUpEvent);
    }
  };

  const adjustCanvasSize = () => {
    if (splineRef.current) {
      const canvas = splineRef.current.querySelector("canvas");
      if (canvas) {
        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight - 400;
        let size = Math.min(maxWidth, maxHeight);

        if (size < 200) size = 200;

        if (size > 552) size = 552;

        const sizeString = size + "px";
        canvas.style.width = sizeString;
        canvas.style.height = sizeString;
      }
    }
  };

  const onLoad = (spline: Application) => {
    splineApp.current = spline;

    for (let i = 0; i < 100; i++) {
      adjustCanvasSize();
    }
  };

  const handleAllAction = (isOn: boolean) => {
    dataPoints.forEach((value, key) => {
      if (
        (key.includes("Light") && isLightVisible) ||
        (key.includes("Blind") && !isLightVisible)
      ) {
        if (value.value === isOn || value.floor !== floor) return;

        if (!splineApp.current) return;

        if (isOn) splineApp.current.emitEvent("mouseDown", key);
        else splineApp.current.emitEventReverse("mouseDown", key);
      }
    });
  };

  const onMouseDown = useCallback(
    (event: SplineEvent) => {
      if (event.target.name === "Arrow Up") setFloor("OG");
      else if (event.target.name === "Arrow Down") setFloor("EG");

      const dataPoint = dataPoints.get(event.target.name);

      if (!dataPoint) return;

      setDataPoints(
        new Map(
          dataPoints.set(event.target.name, {
            ...dataPoint,
            value: !dataPoint.value,
          }),
        ),
      );
    },
    [dataPoints],
  );

  return (
    <div className="container">
      <div className="controls">
        <Toggle
          onToggle={simulateKeyPress}
          setIsLightVisible={setIsLightVisible}
        />
        <SwitchAllButtons
          onToggle={handleAllAction}
          isLightVisible={isLightVisible}
        />
      </div>
      <Spline
        scene="https://prod.spline.design/jvYex-jjqow1uScR/scene.splinecode"
        onLoad={onLoad}
        ref={splineRef}
        className="spline-container"
        style={{ width: "100%", height: "auto" }}
        onMouseDown={onMouseDown}
      />
      <div className="floor">{floor}</div>
    </div>
  );
};

export default Dashboard;
