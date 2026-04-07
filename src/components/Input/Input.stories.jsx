import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: { control: { type: "select", options: ["small", "medium", "large"] } },
    type: { control: { type: "select", options: ["text", "password", "email"] } },
  },
};

export const Default = () => {
  const [value, setValue] = useState("");
  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Small = () => <Input size="small" placeholder="Small input" />;
export const Large = () => <Input size="large" placeholder="Large input" />;
export const Password = () => <Input type="password" placeholder="Password" />;