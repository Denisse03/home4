import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  console.log(" " + pageID);

  if (pageID == "") {
    MODEL.changePage("home");
  } else if (pageID == "contact") {
    MODEL.changePage(pageID, addsubmitListeners);
  } else {
    MODEL.changePage(pageID);
  }
}
function addsubmitListeners() {
  $("#submite").click(function (e) {
    e.preventDefault();
    console.log("submit");
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    let eName = $("#eName").val();
    let pName = $("#pName").val();
    if (fName == "") {
      Swal.fire("add first name");
    } else if (lName == "") {
      Swal.fire("add last name");
    } else if (eName == "") {
      Swal.fire("add email");
    } else if (pName == "") {
      Swal.fire("add phone number");
    } else {
      login();
    }
    console.log(fName);
    // login();
  });
}

function login() {
  Swal.fire("submit");
}

function initListeners() {}

function initApp() {
  $(window).on("hashchange", route);
  route();
}

$(document).ready(function () {
  initApp();
  initListeners();
});
