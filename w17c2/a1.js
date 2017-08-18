var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://amazon.com")
  .type("#twotabsearchtextbox", "lunchables")
  .click("#nav-search > form > div.nav-right > div > input")
  .wait("#s-results-list")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });