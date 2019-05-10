CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price decimal(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

USE bamazon;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES ("1", "Lord of The Rings: The Fellowship of the Ring", "Books", "24.99", "52"),
("2", "The Chronicles of Narnia: The Voyage of The Dawn Treader", "Books", "10.95", "45"),
("3", "Guardians of The Galaxy", "Movies", "15.99", "100"),
("4", "About Time", "Movies", "14.95", "65"),
("5", "Lavender Essential Oil", "Health/Wellness", "6.99", "0"),
("6", "Dare to Lead", "Books", "26.99", "110"),
("7", "Harry Potter and The Prisoner of Azkaban", "Books", "35.95", "2"),
("8", "To End All Wars", "Movies", "10.99", "1"),
("9", "IP Man", "Movies", "9.95", "75"),
("10", "Nutritional Yeast Supplement", "Health/Wellness", "6.99", "100"); 