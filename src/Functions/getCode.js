import Parser from "html-react-parser";

export default url => {
  console.log("get code");
  let code = fetch(url)
    .then(function(response) {
      return response.text();
    })
    .catch(function(err) {
      console.log("Failed to fetch page: ", err);
    });

  return code;
};
