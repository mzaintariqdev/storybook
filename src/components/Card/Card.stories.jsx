import React from "react";
import Card from "./Card";
import ExampleImage from "../../assets/logoshop.jpeg";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: { control: { type: "select", options: ["default", "primary", "secondary"] } },
    shadow: { control: "boolean" },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { title: "Default Card", content: "This is a simple card." };

export const Primary = Template.bind({});
Primary.args = { title: "Primary Card", content: "Card with primary color.", variant: "primary" };

export const WithImage = Template.bind({});
WithImage.args = { title: "Card with Image", content: "Has an image on top.", image: ExampleImage };

export const NoShadow = Template.bind({});
NoShadow.args = { title: "Flat Card", content: "No shadow applied.", shadow: false };