$(document).ready(function(){
    var path = window.location.pathname;
    var path1 = path.replace(/\/$/, "");
    var path2 = path1.substr(path1.indexOf("/") + 1);
    var path3 = path2.substr(path2.indexOf("/") + 1);
    $(".s-navmenu a").each(function () {
        var href = $(this).attr('href');
        if ((path == href) || (path1 == href) || (path2 == href) || (path3 == href)) {
            $(this).parent().addClass('active');
			$(this).parents('li').addClass('active');
        }
    });
});
$(document).ready(function(){
  var path = window.location.pathname;
  var path1 = path.replace(/\/$/, "");
  var path2 = path1.substr(path1.indexOf("/") + 1);
  var path3 = path2.substr(path2.indexOf("/") + 1);
  $("div[id^='s-top-bar'] a").each(function () {
	  var href = $(this).attr('href');
	  if ((path == href) || (path1 == href) || (path2 == href) || (path3 == href)) {
		  $(this).parent().addClass('active');
		  $(this).parents('li').addClass('active');
	  }
  });
});