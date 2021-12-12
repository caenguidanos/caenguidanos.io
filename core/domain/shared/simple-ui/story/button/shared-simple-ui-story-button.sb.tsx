import { ComponentStory, ComponentMeta } from "@storybook/react";
import { styled } from "$caenguidanos.io/stitches";

import { ThemeColor, ThemeSize } from "../../entity/theme/shared-simple-ui-entity-theme";
import { Button } from "../../feature/button/shared-simple-ui-feature-button";

export default {
   title: "UI/Button",
   component: Button,
   argTypes: {
      size: {
         name: "size",
         type: { name: "string" },
         options: [ThemeSize.Sm, ThemeSize.Base, ThemeSize.Md],
         control: {
            type: "radio"
         }
      },
      color: {
         name: "color",
         type: { name: "string" },
         options: [ThemeColor.Default, ThemeColor.Primary, ThemeColor.Disable],
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
   color: ThemeColor.Default,
   size: ThemeSize.Base,
   disabled: false,
   load: false
};

export const Primary = Template.bind({});
Primary.args = {
   id: "testingPrimaryButton",
   onClick: () => console.log("Button clicked!"),
   children: "Primary",
   color: ThemeColor.Primary,
   size: ThemeSize.Base,
   disabled: false,
   load: false
};

export const Disable = Template.bind({});
Disable.args = {
   id: "testingDisableButton",
   onClick: () => console.log("Button clicked!"),
   children: "Primary",
   color: ThemeColor.Disable,
   size: ThemeSize.Base,
   disabled: true,
   load: false
};

export const Loading = Template.bind({});
Loading.args = {
   id: "testingLoadingButton",
   onClick: undefined,
   children: "Primary",
   color: ThemeColor.Disable,
   size: ThemeSize.Base,
   disabled: false,
   load: true
};
