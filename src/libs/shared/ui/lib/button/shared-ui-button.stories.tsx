import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./shared-ui-button";
import { styled } from "../../stitches.config";

export default {
   title: "UI/Button",
   component: Button,
   argTypes: {
      size: {
         name: "size",
         type: { name: "string" },
         options: ["sm", "base", "md"],
         control: {
            type: "radio"
         }
      },
      color: {
         name: "color",
         type: { name: "string" },
         options: ["default", "primary"],
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
      type: {
         name: "type",
         type: { name: "string" },
         options: ["button", "submit", "reset"],
         control: {
            type: "radio"
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

export const Base = Template.bind({});
Base.args = {
   id: "testingBaseButton",
   onClick: () => console.log("Button Base clicked"),
   children: "Button",
   color: "default",
   size: "base",
   disabled: false,
   load: false,
   type: "button"
};
