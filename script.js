window.onload = function() {
  var link = top.document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = "/wiki.ico";
  top.document.getElementsByTagName("head")[0].appendChild(link);
}