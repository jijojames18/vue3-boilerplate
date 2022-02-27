import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import Main from "./Main.vue";

describe("Main View", () => {
  it("Testing test", () => {
    const wrapper = mount(Main, {
      global: {
        plugins: [createTestingPinia()],
      },
    });

    expect(wrapper.find("div").text()).toEqual("[]");
  });
});
