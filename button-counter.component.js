import axios from 'axios';

export const ButtonCounter = {
  data: function () {
    axios.get(`http://www.google.fr`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times
    </button>
  `
};