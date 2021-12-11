import { ComponentStory, ComponentMeta } from "@storybook/react";

import { styled } from "$stitches";

import { Color, Size } from "../../shared";

import { Button } from "./ui-button-feature-button";

export default {
   title: "UI/Button",
   component: Button,
   argTypes: {
      size: {
         name: "size",
         type: { name: "string" },
         options: [Size.Sm, Size.Base, Size.Md],
         control: {
            type: "radio"
         }
      },
      color: {
         name: "color",
         type: { name: "string" },
         options: [Color.Default, Color.Primary, Color.Disable],
         control: {
            type: "radio"
         }
      },
      disabled: {
         name: "disabled",
         type: { name: "string" },
         options: [true, false],
         control: {
            type: "radio"
         }
      },
      load: {
         name: "load",
         type: { name: "string" },
         options: [true, false],
         control: {
            type: "radio"
         }
      },
      children: {
         name: "children",
         type: { name: "string", required: true },
         control: {
            type: "text"
         }
      },
      id: {
         name: "id",
         type: { name: "string", required: true },
         control: {
            type: "text"
         }
      },
      onClick: {
         name: "onClick",
         type: { name: "function" }
      }
   }
} as ComponentMeta<typeof Button>;

const Container = styled("div", {
   display: "grid",
   gridCols: 10
});

const Template: ComponentStory<typeof Button> = (args) => (
   <Container>
      <Button {...args} />
   </Container>
);

export const Default = Template.bind({});
Default.args = {
   id: "testingBaseButton",
   onClick: () => console.log("Button clicked!"),
   children: "Default",
   color: Color.Default,
   size: Size.Base,
   disabled: false,
   load: false
};

export const Primary = Template.bind({});
Primary.args = {
   id: "testingPrimaryButton",
   onClick: () => console.log("Button clicked!"),
   children: "Primary",
   color: Color.Primary,
   size: Size.Base,
   disabled: false,
   load: false
};

export const Disable = Template.bind({});
Disable.args = {
   id: "testingDisableButton",
   onClick: () => console.log("Button clicked!"),
   children: "Primary",
   color: Color.Disable,
   size: Size.Base,
   disabled: true,
   load: false
};

export const Loading = Template.bind({});
Loading.args = {
   id: "testingLoadingButton",
   onClick: undefined,
   children: "Primary",
   color: Color.Disable,
   size: Size.Base,
   disabled: false,
   load: true
};
