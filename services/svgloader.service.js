export default class {
  static parameters() {
    return {
      icon: {
        type: 'string'
      }
    };
  }

  load(url, cb) {
    return fetch(url,{
      method: 'get'
    }).then(function(response){
      return response.text()
    })
  }
}
