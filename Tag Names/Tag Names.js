<!DOCTYPE html>
<html>
<head>
<title>Tag Names</title>
</head>

<body>

<p>This bed is too small.</p>
<p>This bed is too big.</p>
<p>This bed is just right.</p>

<button type="button" onclick="changeme()">Affect Everyone</button>



<script>

function changeme() {
	var par = document.getElementsByTagName("p");
	for (var i = 0; i < par.length; i++) {
		par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
	}
}



</script>

</body>
</html>