import "./style.scss";
import { SBaseModalBoxComponent } from "./components/modal-box/index.js";
import { SBaseHeaderComponent } from "./components/header/index.js";
import "./router.js";

window.addEventListener("DOMContentLoaded", () => {
  /**
   *  TODO: need to uncomment this , !important code
   */
  // const modalBox = new SBaseModalBoxComponent();
  // modalBox.render();

  const header = new SBaseHeaderComponent();
  header.render();
});

/** OR *********************************************************************
 *
 * window.addEventListener("load", () => {});
 * *************************************************************************/
