import { shallowMount } from '@vue/test-utils';
import MyButton from './index.vue';

describe('Testing MyButton', () => {
  const props = {
    label: 'Test label',
    type: 'primary',
  };

  const wrapper = shallowMount(MyButton, { propsData: props });
  test('Props', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
