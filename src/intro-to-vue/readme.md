# Tutorial

[Vue Mastery - Intro to Vue.js](https://www.vuemastery.com/courses/intro-to-vue-js)

## Progress

- [x] 1. The Vue Instance
- [x] 2. Attribute Binding
- [x] 3. Conditional Rendering
- [x] 4. List Rendering
- [x] 5. Event Handling
- [x] 6. Class & Style Binding
- [x] 7. Computed Properties
- [x] 8. Components
- [ ] 9. Communicating Events
- [ ] 10. Forms
- [ ] 11. Tabs

## Notes

- [Nuxt.js](https://nuxtjs.org/) has SSR and more. It is a framework built on top of Vue.js which makes it easier to setup a more complex web application by providing additional tooling.
- `v-if`, `v-else-if`, `v-else`, `v-show`, `v-for` for conditional logic and looping
- `v-bind:alt` or shorthand `:alt` for setting html attributes with dynamic data
- Use `:key` when rendering a list to help vue keep track of the order of the list.
- `@click` is a shorthand for `v-on:click`
- `:style` can be used to bind to dynamic styles. Use an object for easily defining multiple css properties.
- `:class` binding can dynamically add classes using conditionals
- `computed` key can be used to combine or mutate data before displaying it.
- Use `Vue.component` to create a reusable component which can accept props.
- Component's `data` key needs to be an object which returns data.
