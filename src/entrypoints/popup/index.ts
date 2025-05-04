import { mount } from "svelte";
import App from "./App.svelte";

const elParent = document.querySelector("#app");
if (elParent) {
  mount(App, { target: elParent });
}
