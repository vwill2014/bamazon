CREATE DATABASE bamazondb;

USE bamazondb;


CREATE TABLE products (
 id INTEGER AUTO_INCREMENT NOT NULL,
 product_name VARCHAR (50) NOT NULL,
 deparment_name VARCHAR (50),
 price DECIMAL (5,2),
 stock_quantity Integer,
 PRIMARY KEY (id)
 
);

DESCRIBE products

INSERT INTO products(product_name, department_name, price, 
stock_quality)
VALUES("Nike Running Shoes", "Athletic Department", 69.99, 100), 
("Addias Running Shoes", "Athletic Department", 79.99, 150),
("Silver Earrings", "Assessories", 15.00, 200),
("Gold Earrings", "Assessories", 20.95, 175),
("Red Dress", "Women's Clothing", 15.99, 50),
("Black Dress", "Women's Clothing", 15.99, 75),
("Men's Watch","Men's Assessories", 50.00, 100);


SELECT * FROM products;
