<!DOCTYPE html>
<html>
<head>
<title>MTNG Spring MVC</title>
<style type="text/css">
body
</style>
<spring:url value="/resources/index.js" var="indexJS" />
<script src="${indexJS}"></script>

</head>
<body>
	<br>
	<div style="text-align: center">
		<h2>
			Hello, this is the MTNG sample page.<br> <br>
		</h2>
	</div>
	<form action="${pageContext.servletContext.contextPath}/goToPoll"
		method="GET">
		First name: <input type="text" name="firstname"> <br> <input
			type="submit" value="Submit">
	</form>

	<!--  <a href="${pageContext.servletContext.contextPath}/jsp/welcome.jsp">Click here to create a poll</a>-->
</body>
</html>