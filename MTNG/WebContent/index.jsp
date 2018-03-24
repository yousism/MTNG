<html>
<head>
<title>Spring MVC Tutorial Series by Crunchify.com</title>
<style type="text/css">
body {
	background-image: url('https://crunchify.com/bg.png');
}
</style>
</head>
<body>
	<br>
	<div style="text-align: center">
		<h2>
			Hello, this is the MTNG sample page.<br> <br>
		</h2>
	</div>
	<form action="${pageContext.servletContext.contextPath}/test" method = "POST">
		First name: <input type="text" name="firstname"> <br> <input
			type="submit" value="Submit">
	</form>
</body>
</html>