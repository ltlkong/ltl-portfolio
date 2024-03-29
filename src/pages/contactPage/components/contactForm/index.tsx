import React, { ReactElement, HTMLProps } from "react";
import Card from "react-animated-3d-card";
import GopherFun from "../gopherFun";

const ContactForm = ({ className }: HTMLProps<ReactElement>): ReactElement => {
  const fields = [
    {
      label: "Name",
    },
    {
      label: "Email",
    },
  ];

  return (
    <form className={className}>
      {fields.map((field, key) => {
        return (
          <div key={key}>
            <label className={"form-label"}>{field.label}:</label>
            <input className={"form-control"} />
          </div>
        );
      })}
      <div>
        <label className={"form-label"}>Message:</label>
        <textarea className={"form-control"} />
      </div>
      <div style={{ position: "relative" }}>
        <button className="btn btn-outline-secondary d-block w-100 mt-2">
          Send
        </button>
        <GopherFun size={"1rem"}></GopherFun>
      </div>
    </form>
  );
};

export default ContactForm;
