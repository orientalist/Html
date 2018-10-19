var rootDoc;
$(document).ready(function() {
  rootDoc = "Others";
  initOthers();
});

var initOthers = function() {
  initDashBoard();
  $("#menu").menu();
  initMenuItmClick();
};
