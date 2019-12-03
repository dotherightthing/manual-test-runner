/**
 * Unit tests for uiVerbosityControl
 */
import { shallowMount } from '@vue/test-utils'
import uiVerbosityControl from '@/components/UiVerbosityControl.vue'

describe('UiVerbosityControl.vue', () => {
  it('When the component is mounted, the full verbosity option is checked', () => {
    const wrapper = shallowMount(uiVerbosityControl, {
      propsData: { uiVerbosity }
    });
    expect(wrapper.find('#ui_verbosity_full:checked').exists()).toBe(true)
  });
});
