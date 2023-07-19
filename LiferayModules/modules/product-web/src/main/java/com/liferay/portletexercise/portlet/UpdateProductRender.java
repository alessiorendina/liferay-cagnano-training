package com.liferay.portletexercise.portlet;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portletexercise.constants.ProductControllerPortletKeys;
import org.osgi.service.component.annotations.Component;

import javax.portlet.*;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + ProductControllerPortletKeys.PRODUCTCONTROLLER,
                "mvc.command.name=/create/updateProd"
        },
        service = MVCRenderCommand.class
)
public class UpdateProductRender implements MVCRenderCommand {
    @Override
    public String render(RenderRequest renderRequest,RenderResponse renderResponse) throws PortletException {
        return "/edit.jsp";
    }
}