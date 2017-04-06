let instance = null;
const apiUrl = '/api/todos';

export default class AppService {
  getTodos() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  saveTodo(form) {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: form.content,
        options: form.options,
        answer: form.answer
      })
    })
    .catch((error) => {
        console.error(error);
      });
  }
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }
}