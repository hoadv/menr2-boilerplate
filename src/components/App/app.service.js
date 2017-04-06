let instance = null;
const apiUrl = '/api/questions';

export default class AppService {
  getQuestions() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  saveQuestion(form) {
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