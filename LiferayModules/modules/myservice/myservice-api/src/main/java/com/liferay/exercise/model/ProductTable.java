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

package com.liferay.exercise.model;

import com.liferay.petra.sql.dsl.Column;
import com.liferay.petra.sql.dsl.base.BaseTable;

import java.sql.Types;

import java.util.Date;

/**
 * The table class for the &quot;MLP_Product&quot; database table.
 *
 * @author Brian Wing Shun Chan
 * @see Product
 * @generated
 */
public class ProductTable extends BaseTable<ProductTable> {

	public static final ProductTable INSTANCE = new ProductTable();

	public final Column<ProductTable, Long> productId = createColumn(
		"productId", Long.class, Types.BIGINT, Column.FLAG_PRIMARY);
	public final Column<ProductTable, String> name = createColumn(
		"name", String.class, Types.VARCHAR, Column.FLAG_DEFAULT);
	public final Column<ProductTable, String> type = createColumn(
		"type_", String.class, Types.VARCHAR, Column.FLAG_DEFAULT);
	public final Column<ProductTable, String> description = createColumn(
		"description", String.class, Types.VARCHAR, Column.FLAG_DEFAULT);
	public final Column<ProductTable, String> sku = createColumn(
		"sku", String.class, Types.VARCHAR, Column.FLAG_DEFAULT);
	public final Column<ProductTable, Double> price = createColumn(
		"price", Double.class, Types.DOUBLE, Column.FLAG_DEFAULT);
	public final Column<ProductTable, Date> createDate = createColumn(
		"createDate", Date.class, Types.TIMESTAMP, Column.FLAG_DEFAULT);
	public final Column<ProductTable, Date> modifiedDate = createColumn(
		"modifiedDate", Date.class, Types.TIMESTAMP, Column.FLAG_DEFAULT);

	private ProductTable() {
		super("MLP_Product", ProductTable::new);
	}

}