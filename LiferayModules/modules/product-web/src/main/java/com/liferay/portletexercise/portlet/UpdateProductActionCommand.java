package com.liferay.portletexercise.portlet;

import com.liferay.exercise.service.ProductLocalServiceUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCActionCommand;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.util.ParamUtil;
import com.liferay.portletexercise.constants.ProductControllerPortletKeys;
import org.osgi.service.component.annotations.Component;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;
import javax.portlet.PortletException;

@Component(
        immediate = true,
        property = {
                "javax.portlet.name=" + ProductControllerPortletKeys.PRODUCTCONTROLLER,
                "mvc.command.name=updateproductSubmit"
        },
        service = MVCActionCommand.class
)
public class UpdateProductActionCommand implements MVCActionCommand {
    @Override
    public boolean processAction(ActionRequest actionRequest, ActionResponse actionResponse) throws PortletException {

        long productId = ParamUtil.getLong(actionRequest,"productId");
        String name = ParamUtil.getString(actionRequest, "name");
        String type = ParamUtil.getString(actionRequest, "type");
        String description = ParamUtil.getString(actionRequest, "description");
        String sku = ParamUtil.getString(actionRequest, "sku");
        double price = ParamUtil.getFloat(actionRequest, "price");

        ServiceContext serviceContext = new ServiceContext();

        try {
            ProductLocalServiceUtil.updateProduct(productId,name,type,description,sku,price,serviceContext);
        } catch (PortalException e) {
            throw new RuntimeException(e);
        }

        return true;
    }
}
