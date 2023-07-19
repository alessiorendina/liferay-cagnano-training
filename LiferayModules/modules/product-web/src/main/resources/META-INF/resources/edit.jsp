<%@ include file="/init.jsp" %>

<portlet:actionURL name="updateproductSubmit" var="updateproductSubmit" />
<h4> Update product </h4><br>
<form action="<%= updateproductSubmit %>" method="Post">
ProductId: <input type="text" name="<portlet:namespace />productId"><br>
Name: <input type="text" name="<portlet:namespace />name"><br>
Type: <input type="text" name="<portlet:namespace />type"><br>
Description: <input type="text" name="<portlet:namespace />description"><br>
Sku: <input type="text" name="<portlet:namespace />sku"><br>
Price: <input type="number" min="0" name="<portlet:namespace />price"><br>
<input type="Submit" value="SUBMIT">
</form>