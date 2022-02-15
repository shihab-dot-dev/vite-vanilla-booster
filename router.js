import Navigo from "navigo";

const router = new Navigo("/");

router.on("/#/shihab", function () {
  // do something
  console.log("welcome to shihab page");
});
