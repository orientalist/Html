$(document).ready(function() {
  initialComponent();
});
var initialComponent = function() {
  $(".nav-link").click(function() {
    $("#render_body").html("");
    fnGetRenderbody(this);
  });
};
var fnGetRenderbody = function(e) {
  if (!$(e).hasClass("noChild")) {
    $.ajax({
      url: $(e).attr("id"),
      dataType: "html"
    }).done(function(content) {
      $("#render_body").html(content);
    });
  }
};
var initDashBoard = function() {
  var widthOfDashBoard = $("#dashBoard").width();
  var animateDistance = -(widthOfDashBoard - 15).toString() + "px";
  $("#db_button").click(function() {
    if ($("#dashBoard").hasClass("db_open")) {
      $("#dashBoard").animate(
        {
          "margin-left": animateDistance
        },
        "slow"
      );
      $("#dashBoard").removeClass("db_open");
      $("#dashBoard").addClass("db_close");
    } else {
      $("#dashBoard").animate(
        {
          "margin-left": "0px"
        },
        "slow"
      );
      $("#dashBoard").removeClass("db_close");
      $("#dashBoard").addClass("db_open");
    }
  });
};
var initMenuItmClick=function(){
  $(".Menu_Item").click(function(e) {
    var urlStr = rootDoc + "/";
    var Nodes = $(e.currentTarget)
      .closest('li[class^="Root_item"]')
      .find("div");
    $.each(Nodes, function(index, value) {
      urlStr += value.innerText + "/";
    });
    urlStr=urlStr.substring(0,urlStr.length-1)+".html";  
    urlStr=urlStr.replace(/ /g,"");    
    $.ajax({
      url: urlStr,
      dataType: "html"
    }).done(function(content) {
      $(".page_body").html(content);
    });
  });
} 