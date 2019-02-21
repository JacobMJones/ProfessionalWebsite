function getCode (url){
    console.log("get code");
    // fetch(
    //   "https://raw.githubusercontent.com/JacobMJones/PersonalWebsite/master/src/Pages/Projects/index.js"
    // )
    //   .then(function(response) {
    //     // When the page is loaded convert it to text
    //     return response.text();
    //   })
    //   .then(function(html) {
    //     // Initialize the DOM parser
    //     var parser = new DOMParser();

    //     // Parse the text
    //     var doc = parser.parseFromString(html, "text/html");

    //     // You can now even select part of that html as you would in the regular DOM
    //     // Example:
    //     // var docArticle = doc.querySelector('article').innerHTML;

    //     console.log(doc);
    //     return doc
    //   })
    //   .catch(function(err) {
    //     console.log("Failed to fetch page: ", err);
    //   });
  };
  export default {getCode}