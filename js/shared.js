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
