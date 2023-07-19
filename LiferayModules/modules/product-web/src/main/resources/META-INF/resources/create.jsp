<%@ include file="/init.jsp" %>

<portlet:actionURL name="productSubmit" var="productSubmit" />
<h4> Create product </h4><br>
<form action="<%= productSubmit %>" method="Post">
Name: <input type="text" name="<portlet:namespace />name"><br>
Type: <input type="text" name="<portlet:namespace />type"><br>
Description: <input type="text" name="<portlet:namespace />description"><br>
Sku: <input type="text" name="<portlet:namespace />sku"><br>
Price: <input type="number" min="0" name="<portlet:namespace />price"><br>
<input type="Submit" value="SUBMIT">
</form>
