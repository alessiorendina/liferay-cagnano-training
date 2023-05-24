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

import com.liferay.exercise.model.Product;
import com.liferay.portal.kernel.exception.PortalException;

/**
 * Provides the remote service utility for Product. This utility wraps
 * <code>com.liferay.exercise.service.impl.ProductServiceImpl</code> and is an
 * access point for service operations in application layer code running on a
 * remote server. Methods of this service are expected to have security checks
 * based on the propagated JAAS credentials because this service can be
 * accessed remotely.
 *
 * @author Brian Wing Shun Chan
 * @see ProductService
 * @generated
 */
public class ProductServiceUtil {

	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify this class directly. Add custom service methods to <code>com.liferay.exercise.service.impl.ProductServiceImpl</code> and rerun ServiceBuilder to regenerate this class.
	 */
	public static Product addProduct(
			String name, String type, String description, String sku,
			double price,
			com.liferay.portal.kernel.service.ServiceContext serviceContext)
		throws PortalException {

		return getService().addProduct(
			name, type, description, sku, price, serviceContext);
	}

	public static Product deleteProduct(long productId) throws PortalException {
		return getService().deleteProduct(productId);
	}

	/**
	 * Returns the OSGi service identifier.
	 *
	 * @return the OSGi service identifier
	 */
	public static String getOSGiServiceIdentifier() {
		return getService().getOSGiServiceIdentifier();
	}

	public static Product readProduct(long productId) throws PortalException {
		return getService().readProduct(productId);
	}

	public static Product updateProduct(
			long productId, String name, String type, String description,
			String sku, double price,
			com.liferay.portal.kernel.service.ServiceContext serviceContext)
		throws PortalException {

		return getService().updateProduct(
			productId, name, type, description, sku, price, serviceContext);
	}

	public static ProductService getService() {
		return _service;
	}

	private static volatile ProductService _service;

}