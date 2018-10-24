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
    var Nodes=$(e.currentTarget).parentsUntil('#menu');

    var str="";

    var ParentNode=$(e.currentTarget).parent()[0];
    while($(ParentNode).attr("id")!='menu'){      
      if(ParentNode.localName=='li'){        
        str=$(ParentNode).children('div')[0].innerText+"/"+str;        
      }
      ParentNode=$(ParentNode).parent()[0];
    }
    str=rootDoc+'/'+str;
    
    str=str.substr(0,str.length-1);
    str+=".html";    
    str=str.replace(/ /g,"");
    $(".page_body").load(decodeURI(encodeURI(str)));
    // $.ajax({
    //   url: decodeURI(str),
    //   dataType: "html"
    // }).done(function(content) {
    //   $(".page_body").html(content);
    // });
  });
} 