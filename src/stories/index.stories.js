import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, boolean, color,
} from '@storybook/addon-knobs';

import Button from '../components/Button/Button.vue';

export default {
  title: 'Button',
  component: Button,
  decorators: [() => `<section style="background-color:#779FA1; padding: 10px;">
      <story />
     </section>`],

};

export const WithSlot = () => ({
  components: { Button },
  decorators: [withKnobs],
  props: {
    isDisabled: { default: boolean('Disabled', false) },
    text: { default: text('Text', 'Hello Storybook') },
    color: { default: color('Color', 'green') },
    isLoading: { default: boolean('is Loading?', false) },
  },

  template: ` 
  <Button :isDisabled="isDisabled" :color="color"> {{ text }} </Button> 
  `,
});

WithSlot.story = {
  decorators: [() => `<section style="background-color:#FF6542; padding: 5px;">
      <story />
     </section>`],
};

export const WithText = () => ({
  props: {
    text: {
      default: text('Button Text',
        'Botoncillo'),
    },
    isLoading: { default: boolean('is Loading?', false) },
  },

  render() {
    return <Button
      text={this.text}
      isLoading= {this.isLoading}
      onClick= { action('Hizo click')}
      > </Button>;
  },

});
