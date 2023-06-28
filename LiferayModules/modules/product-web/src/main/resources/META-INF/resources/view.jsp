<%@ include file="/init.jsp" %>

<portlet:renderURL var="readProduct">
        <portlet:param name="mvcPath" value="/read.jsp"/>
        <portlet:param name="mvcRenderCommandName" value="/create/read"/>
        <portlet:param name="delta" value="4" />
        <portlet:param name="deltaConfigurable" value="true"/>
</portlet:renderURL>

<a href="${readProduct}">Read products</a>