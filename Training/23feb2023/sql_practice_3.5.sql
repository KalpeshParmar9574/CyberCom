-- sql practice3.5 

-- Create a database called "sales" with three tables: "customers", 
-- "orders", and "products".
-- The "customers" table should have the following columns: 
-- "customer_id", "first_name", "last_name", "email", and "phone".
-- The "orders" table should have the following columns: 
-- "order_id", "order_date", "customer_id", and "product_id".
-- The "products" table should have the following columns: 
-- "product_id", "product_name", "unit_price", and "description".

create database sales ;
create table sales . Customers(
customerID int auto_increment primary key ,
first_name varchar(55),
last_name varchar(55),
email varchar(100),
phone varchar(20)

);

create table sales.Product (
productID int auto_increment primary key ,
product_name varchar(50),
unit_price decimal(5,2),
_description varchar(300)
);


create table sales. Orders(
orderID int auto_increment primary key  ,
order_date date ,
customerID int,
productID int ,
foreign key (customerID) references sales.Customers(customerID),
foreign key (productID) references sales.Product(productID)
);



-- 1. Insert at least five customers, five products, and ten 
-- orders into the respective tables. Make sure that at least 
-- two customers have multiple orders, and at 

-- customer table 

insert into sales.Customers(first_name,last_name,email,phone) value ('kalpesh ','parmar','kp@gmail.com',9537547435),('jayesh','tank','jayeshtank@gmail.com',9265140639),
('meet','karodiya','meet@gmail.com','8567444444'),('Jane', 'Smith', 'janesmith@example.com', '555-5678'),
('Bob', 'Johnson', 'bjohnson@example.com', '555-9012');

INSERT INTO sales.Product (product_name, unit_price, _description)
VALUES
('Widget', 12.50, 'A small widget'),
('Gizmo', 19.99, 'A fancy gizmo'),
('Thingamajig', 8.75, 'A useful thingamajig');
INSERT INTO sales.Orders (order_date, customerID, productID)
VALUES
('2023-02-20', 1, 1),
('2023-02-21', 2, 1),
('2023-02-22', 1, 2),
('2023-02-23', 3, 3),
('2023-02-24', 2, 3);

-- 2. Write a query that retrieves the customer's first name, 
-- last name, email, and the number of orders they have 
-- placed. The results should be ordered by the number of 
-- orders in descending order

select c.first_name ,c.last_name , c.email,count(o.orderID)as totalOrder from sales.Customers c inner join sales.Orders o on c.customerID=o.customerID
group by c.customerID;

-- 3. Write a query that retrieves the product name, the total 
-- number of orders for each product, and the total revenue 
-- generated by each product. The results should be ordered by 
-- the total revenue in descending order.
SELECT 
  p.product_name, 
  COUNT(o.productID) AS total_number_of_orders, 
  SUM(p.unit_price) * COUNT(o.productID) AS total_revenue
FROM 
  sales.Product p 
  INNER JOIN sales.Orders o 
  ON p.productID = o.productID 
GROUP BY 
  p.productID;
  
--   4. Write a query that retrieves the first name, last name, 
-- email, and product name for each order. The results should 
-- only include orders where the customer has placed multiple 
-- orders.

SELECT 
  c.first_name,
  c.last_name,
  c.email,
  p.product_name
FROM 
  sales.Customers c
  INNER JOIN sales.Orders o1 
    ON c.customerID = o1.customerID
  INNER JOIN sales.Orders o2 
    ON c.customerID = o2.customerID AND o1.orderID <> o2.orderID
  INNER JOIN sales.Product p
    ON o1.productID = p.productID
WHERE 
  c.customerID IN (
    SELECT 
      customerID
    FROM 
      sales.Orders
    GROUP BY 
      customerID
    HAVING 
      COUNT(DISTINCT orderID) > 1
  )
ORDER BY 
  c.last_name, c.first_name, p.product_name;

-- 5. Write a query that retrieves the first name, last name, and 
-- email for each customer who has placed at least one order 
-- for a product with a unit price greater than $50.
SELECT 
  c.first_name, 
  c.last_name, 
  c.email 
FROM 
  sales.Customers c 
  INNER JOIN sales.Orders o ON c.customerID = o.customerID 
  INNER JOIN sales.Product p ON o.productID = p.productID 
WHERE 
  p.unit_price > 50 
GROUP BY 
  c.customerID 
ORDER BY 
  c.last_name, c.first_name;
--   6. Write a query that retrieves the product name and the 
-- number of times it has been ordered, but only includes 
-- products that have been ordered more than once.

SELECT 
  p.product_name, 
  COUNT(o.productID) AS order_count 
FROM 
  sales.Product p 
  INNER JOIN sales.Orders o ON p.productID = o.productID 
GROUP BY 
  p.productID 
HAVING 
  COUNT(o.productID) > 1 
ORDER BY 
  order_count DESC;
  

