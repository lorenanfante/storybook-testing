import { addDecorator } from "@storybook/vue";

//adding decorators globally
addDecorator (() => `<section style="background-color:#E0CBA8; padding: 10px;">
      <story />
     </section>`);

//adding parmeters

export const parameters = {
  layout: "centered"
}