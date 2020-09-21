function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  fetch(url)
    .then(reponse => {
      if (reponse.status === 200) {
        return reponse.json();
      } else {
        Promise.reject('error msg');
      }
    })
    .then(data => {
      document.writeln(data.name);
    })
    .catch(error => {
      console.log(error);
    });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
