import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IndexPage from "./pages-index-feature";

export default {
   title: "Pages/Index",
   component: IndexPage,
   argTypes: {
      html: {
         name: "html",
         type: { name: "string", required: true },
         defaultValue: "<h1>Hello from Storybook!</h1>",
         description: "HTML raw input for render code block",
         control: {
            type: "text"
         }
      }
   }
} as ComponentMeta<typeof IndexPage>;

const Template: ComponentStory<typeof IndexPage> = (args) => <IndexPage {...args} />;

export const LogIn = Template.bind({});
LogIn.args = {};
