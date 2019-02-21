import Parser from 'html-react-parser';

export default () => {
  console.log("get code");
  let code = fetch(
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Projects/index.js"
  )
    .then(function(response) {
      return response.text();
    })
    .catch(function(err) {
      console.log("Failed to fetch page: ", err);
    });

  return code;
}
