import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
  //    parameters: {
  //   controls: { expanded: true }, // 👈 ADD THIS
  // },
    size: { control: "radio", options: ["small", "medium", "large"]  },
    variant: { control: "select", options: ["primary", "secondary", "danger"]  },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Playground = Template.bind({});
Playground.args = {
  children: "Click Me",
  variant: "primary",
  size: "medium",
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = { ...Playground.args, variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { ...Playground.args, variant: "secondary" };

export const Danger = Template.bind({});
Danger.args = { ...Playground.args, variant: "danger" };

export const Large = Template.bind({});
Large.args = { ...Playground.args, size: "large" };

export const Small = Template.bind({});
Small.args = { ...Playground.args, size: "small" };

export const Disabled = Template.bind({});
Disabled.args = { ...Playground.args, disabled: true };