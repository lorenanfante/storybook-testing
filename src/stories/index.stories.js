import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from '../components/Button/Button.vue';

export default {
  title: 'Button',
  component: Button,
  decorators: [() => `<section style="background-color:#779FA1; padding: 10px;">
      <story />
     </section>`],

};

export const withSlot = () => ({
  components: { Button },
  decorators: [withKnobs],
  props: {
    isDisabled: { default: boolean('Disabled', false) },
    text: { default: text('Text', 'Hello Storybook') },
  },

  template: ` 
  <Button :isDisabled="isDisabled"> Slot {{ text }} </Button> 
  `,
});

withSlot.story = {
  decorators: [() => `<section style="background-color:#FF6542; padding: 5px;">
      <story />
     </section>`],
};

export const withText = () => ({
  props: {
    text: {
      default: text('Button Text',
        'Botoncillo'),
    },
  },

  render() {
    return <Button text={this.text} > </Button>;
  },

});
