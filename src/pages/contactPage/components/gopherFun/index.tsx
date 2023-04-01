import React, { ReactElement, useRef, MouseEvent, ReactNode } from "react";
import "./Style.css";

interface IProps {
  size: string;
  children?: ReactNode;
}

function GopherFun({ size, children }: IProps): ReactElement {
  const eyeLRef = useRef<HTMLDivElement>(null);
  const eyeRRef = useRef<HTMLDivElement>(null);

  function eyeRotateAnimation(event: MouseEvent): void {
    let eyeLEle: HTMLDivElement;
    let eyeREle: HTMLDivElement;

    eyeLEle = eyeLRef.current!;
    eyeREle = eyeRRef.current!;

    const clientX: number = event.clientX;
    const clientY: number = event.clientY;
    const eyeLeftX: number = eyeLEle.getBoundingClientRect().left;
    const eyeLeftY: number = eyeLEle.getBoundingClientRect().top;
    const diffX: number = eyeLeftX - clientX;
    const diffY: number = eyeLeftY - clientY;
    const rotate = (-Math.atan2(diffX, diffY) * 180) / Math.PI + 90;

    eyeLEle.querySelector("span")!.style.transform = `rotate(${rotate}deg)`;
    eyeREle.querySelector("span")!.style.transform = `rotate(${rotate}deg)`;
  }

  function handleMouseMove(event: MouseEvent): void {
    eyeRotateAnimation(event);
  }

  return (
    <div
      className="gophers-container pa"
      style={{ fontSize: size }}
      onMouseMove={handleMouseMove}
    >
      <div>{children}</div>
      <div className="gophers pa">
        <div className="pa" ref={eyeLRef}>
          <span className="pa"></span>
        </div>

        <div className="pa" ref={eyeRRef}>
          <span className="pa"></span>
        </div>

        <div className="pa"></div>
      </div>
    </div>
  );
}

export default GopherFun;
