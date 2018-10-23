var rootDoc;
$(document).ready(function(){
    rootDoc="MSSQL";
    initMSSQL();
});

var initMSSQL=function(){
    initDashBoard();
    $("#menu").menu();
    initMenuItmClick();
}