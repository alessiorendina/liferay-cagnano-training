package com.liferay.portletexercise.portlet;

import com.liferay.exercise.service.ProductLocalServiceUtil;
import com.liferay.portal.kernel.dao.search.SearchContainer;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portletexercise.constants.ProductControllerPortletKeys;
import org.osgi.service.component.annotations.Component;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + ProductControllerPortletKeys.PRODUCTCONTROLLER,
                "mvc.command.name=/create/read"
        },
        service = MVCRenderCommand.class
)
public class CreateReadCommand implements MVCRenderCommand{
    @Override
    public String render(RenderRequest renderRequest, RenderResponse renderResponse) throws PortletException {
        int delta = ParamUtil.getInteger(renderRequest, SearchContainer.DEFAULT_DELTA_PARAM);
        int cur = ParamUtil.getInteger(renderRequest, SearchContainer.DEFAULT_CUR_PARAM, SearchContainer.DEFAULT_CUR);

        int start = delta * (cur - 1);
        int end = delta + start;

        renderRequest.setAttribute("totalProducts", ProductLocalServiceUtil.getProductsCount());
        renderRequest.setAttribute("products", ProductLocalServiceUtil.getProducts(start, end));
        return "/read.jsp";
    }
}
