create table MLP_Product (
	productId LONG not null primary key,
	name VARCHAR(75) null,
	type_ VARCHAR(75) null,
	description VARCHAR(75) null,
	sku VARCHAR(75) null,
	price DOUBLE,
	createDate DATE null,
	modifiedDate DATE null
);