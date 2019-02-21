export default () => {
  console.log("get code");
  let code = fetch(
    "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Projects/index.js"
  )
    .then(function(response) {
      // When the page is loaded convert it to text
      return response.text();
    })
    .then(function(html) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, "text/html");

      // You can now even select part of that html as you would in the regular DOM
      // Example:
      // var docArticle = doc.querySelector('article').innerHTML;
      let body = doc.querySelector("body").innerHTML;
      console.log(body.toString());

      return body.toString();
    })
    .catch(function(err) {
      console.log("Failed to fetch page: ", err);
    });

  return code;
}
