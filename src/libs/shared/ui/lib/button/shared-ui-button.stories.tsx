import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./shared-ui-button";

export default {
   title: "UI/Button",
   component: Button,
   argTypes: {
      size: {
         name: "size",
         type: { name: "string" },
         options: ["md"],
         control: {
            type: "radio"
         }
      },
      color: {
         name: "color",
         type: { name: "string" },
         options: ["primary"],
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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
   id: "testingPrimaryButton",
   onClick: () => console.log("Button primary clicked"),
   children: "Primary",
   color: "primary",
   size: "md",
   disabled: false,
   load: false
};
