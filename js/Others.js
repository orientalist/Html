var rootDoc;
$(document).ready(function() {
  rootDoc = "Others";
  initOthers();
});

var initOthers = function() {
  initDashBoard();
  $("#menu").menu();
  $(".Menu_Item").click(function(e) {
    var urlStr = rootDoc + "/";
    var Nodes = $(e.currentTarget)
      .closest('li[class^="Root_item"]')
      .find("div");
    $.each(Nodes, function(index, value) {
      urlStr += value.innerText + "/";
    });
    urlStr=urlStr.substring(0,urlStr.length-1)+".html";        
    $.ajax({
      url: urlStr,
      dataType: "html"
    }).done(function(content) {
      $("#bootStrap_body").html(content);
    });
  });
};
