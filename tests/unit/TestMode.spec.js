/**
 * Unit tests for TestMode
 */
import { shallowMount } from '@vue/test-utils'
import TestMode from '@/components/TestMode.vue'

describe('TestMode.vue', () => {
  it('TestModeState dictates the selected radio', () => {
    for (let mode of ['author', 'run', 'coverage']) {
      const wrapper = shallowMount(TestMode, {
        propsData: { TestModeState: mode }
      });
      expect(wrapper.find(`#test_mode_${mode}:checked`).exists()).toBe(true)
    }
  });
});
