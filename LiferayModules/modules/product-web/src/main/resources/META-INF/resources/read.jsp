<%@ include file="/init.jsp" %>
<%@  taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>
<%@ page import="javax.portlet.PortletURL" %>

<liferay-portlet:renderURL varImpl="iteratorURL">
  <liferay-portlet:param name="mvcRenderCommandName" value="/create/read"/>
</liferay-portlet:renderURL>

<liferay-ui:search-container delta="4" emptyResultsMessage="no-entries-were-found" total="${totalProducts}" deltaConfigurable="<%= true %>" iteratorURL="<%=iteratorURL %>">
        <liferay-ui:search-container-results results="${products}"/>
            <liferay-ui:search-container-row className="com.liferay.exercise.model.Product"
              keyProperty="productId" modelVar="product" escapedModel="<%=true%>" >
                <liferay-ui:search-container-column-text property="name" />
                <liferay-ui:search-container-column-text property="type" />
                <liferay-ui:search-container-column-text property="description" />
                <liferay-ui:search-container-column-text property="sku" />
                <liferay-ui:search-container-column-text property="price" />
            </liferay-ui:search-container-row>
    <liferay-ui:search-iterator/>
</liferay-ui:search-container>