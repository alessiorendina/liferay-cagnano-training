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
import com.liferay.exercise.service.base.ProductLocalServiceBaseImpl;
import com.liferay.portal.aop.AopService;

import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.service.ServiceContext;
import org.osgi.service.component.annotations.Component;

import java.util.Date;

/**
 * @author Brian Wing Shun Chan
 */
@Component(
	property = "model.class.name=com.liferay.exercise.model.Product",
	service = AopService.class
)
public class ProductLocalServiceImpl extends ProductLocalServiceBaseImpl {
	public Product addProduct(
			String name, String type, String description,
			String sku, double price, ServiceContext serviceContext) {

		long productId = counterLocalService.increment(Product.class.getName());

		Product product = productPersistence.create(productId);

		product.setName(name);
		product.setType(type);
		product.setDescription(description);
		product.setSku(sku);
		product.setPrice(price);

		product.setCreateDate(serviceContext.getCreateDate(new Date()));
		product.setModifiedDate(serviceContext.getModifiedDate(new Date()));

		product = productPersistence.update(product);

		return product;
	}

	public Product readProduct(long productId) throws PortalException {
		return productPersistence.findByPrimaryKey(productId);
	}

	public Product updateProduct(
			long productId, String name, String type, String description,
			String sku, double price, ServiceContext serviceContext)
			throws PortalException {

		Product product = productPersistence.findByPrimaryKey(productId);

		product.setName(name);
		product.setType(type);
		product.setDescription(description);
		product.setSku(sku);
		product.setPrice(price);

		product.setModifiedDate(serviceContext.getModifiedDate(new Date()));

		product = productPersistence.update(product);

		return product;
	}

	public Product deleteProduct(long productId) throws PortalException {
		Product product = productPersistence.findByPrimaryKey(productId);

		return productPersistence.remove(product);
	}
}