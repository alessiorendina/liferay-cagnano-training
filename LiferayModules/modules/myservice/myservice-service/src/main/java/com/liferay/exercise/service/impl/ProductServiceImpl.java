/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.liferay.exercise.service.impl;


import com.liferay.exercise.model.Product;
import com.liferay.exercise.service.base.ProductServiceBaseImpl;
import com.liferay.portal.aop.AopService;

import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.service.ServiceContext;
import org.osgi.service.component.annotations.Component;

import java.util.List;

/**
 * @author Brian Wing Shun Chan
 */
@Component(
	property = {
		"json.web.service.context.name=mlp",
		"json.web.service.context.path=Product"
	},
	service = AopService.class
)
public class ProductServiceImpl extends ProductServiceBaseImpl {
	public Product addProduct(
			String name, String type, String description,
			String sku, double price, ServiceContext serviceContext)
			throws PortalException {

		return productLocalService.addProduct(
				name, type, description, sku, price, serviceContext);
	}

	public Product readProduct(long productId) throws PortalException {
		return productLocalService.readProduct(productId);
	}

	public Product updateProduct(long productId, String name, String type, String description, String sku, double price , ServiceContext serviceContext) throws PortalException {
		return productLocalService.updateProduct(productId, name, type, description, sku, price, serviceContext);
	}

	public Product deleteProduct(long productId) throws PortalException {
		return productLocalService.deleteProduct(productId);
	}

	public List<Product> getAllProducts() {
		return productLocalService.getAllProducts();
	}
}