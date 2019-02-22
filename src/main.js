import DefaultLayout from "~/layouts/Default.vue";
import "tachyons";
import "~/assets/style.css";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);

  // Vue.use(VueAxios, axios);

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Patrick+Hand|Quicksand"
  });

  head.meta.push({
    name: "author",
    content: "Matt Ondo"
  });
}
