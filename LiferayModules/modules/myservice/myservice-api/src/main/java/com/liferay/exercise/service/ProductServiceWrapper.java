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

package com.liferay.exercise.service;

import com.liferay.portal.kernel.service.ServiceWrapper;

/**
 * Provides a wrapper for {@link ProductService}.
 *
 * @author Brian Wing Shun Chan
 * @see ProductService
 * @generated
 */
public class ProductServiceWrapper
	implements ProductService, ServiceWrapper<ProductService> {

	public ProductServiceWrapper() {
		this(null);
	}

	public ProductServiceWrapper(ProductService productService) {
		_productService = productService;
	}

	@Override
	public com.liferay.exercise.model.Product addProduct(
			String name, String type, String description, String sku,
			double price,
			com.liferay.portal.kernel.service.ServiceContext serviceContext)
		throws com.liferay.portal.kernel.exception.PortalException {

		return _productService.addProduct(
			name, type, description, sku, price, serviceContext);
	}

	@Override
	public com.liferay.exercise.model.Product deleteProduct(long productId)
		throws com.liferay.portal.kernel.exception.PortalException {

		return _productService.deleteProduct(productId);
	}

	/**
	 * Returns the OSGi service identifier.
	 *
	 * @return the OSGi service identifier
	 */
	@Override
	public String getOSGiServiceIdentifier() {
		return _productService.getOSGiServiceIdentifier();
	}

	@Override
	public com.liferay.exercise.model.Product readProduct(long productId)
		throws com.liferay.portal.kernel.exception.PortalException {

		return _productService.readProduct(productId);
	}

	@Override
	public com.liferay.exercise.model.Product updateProduct(
			long productId, String name, String type, String description,
			String sku, double price,
			com.liferay.portal.kernel.service.ServiceContext serviceContext)
		throws com.liferay.portal.kernel.exception.PortalException {

		return _productService.updateProduct(
			productId, name, type, description, sku, price, serviceContext);
	}

	@Override
	public ProductService getWrappedService() {
		return _productService;
	}

	@Override
	public void setWrappedService(ProductService productService) {
		_productService = productService;
	}

	private ProductService _productService;

}