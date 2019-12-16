import { ButtonCounter } from './button-counter.component';

export const App = {
  components: { ButtonCounter },
  data: function () {
    return {
      message: 'Hello Vue!'
    }
  },
  template: `
    <div>
      <h1>Hi Gregory</h1>
      <p>
        You're awesome!!
      </p>

      <div>{{ message }}</div>

      <h2>ButtonCounter Component</h2>
  	  <ButtonCounter />
    </div>
  `
}