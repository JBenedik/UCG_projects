var d = document;

for (var s in (S = d.styleSheets)) S[s].disabled = true;

for (var i in (I = d.querySelectorAll("[style]"))) I[i].style = "";
