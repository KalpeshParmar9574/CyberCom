use sales;
-- 1. Write a SQL query to retrieve the top 10 customers who have made 
-- the most orders in the "orders" table, along with the total 
-- number of orders they have made.

SELECT 
    c.customerID,
   count( o.orderID),
    sum(p.unit_price)
FROM
    customers c
        JOIN
    orders o ON o.customerID = c.customerID
        JOIN
    product p ON p.productID = o.productID
GROUP BY o.customerID ,p.productID
order by count(o.orderID) desc limit 1;

-- 2. Write a SQL query to retrieve the names of all employees who have 
-- sold more than $100,000 worth of products in the "order_details" 
-- table, sorted by the amount sold in descending order.

SELECT 
    e.emp_name
FROM
    employee e
        JOIN
    orders o ON e.id = o.empID
GROUP BY o.empID
HAVING SUM(o.salesWorth) > 1000000;

-- 3. Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, along with the total amount 
-- they have spent on all orders and the total amount they have 
-- spent on orders made in the last 30 days.


SELECT 
    c.first_name,
    COUNT(o.orderID) * SUM(p.unit_pricce) total_spent,
    SUM(p.unit_price)
FROM
    customers c
        JOIN
    orders ON c.id = o.customerID
        JOIN
    product p ON p.productID = o.productID
WHERE
    order_date BETWEEN DATE(order_date) - 30 AND DATE(order_date) + 30
GROUP BY c.id , o.customerID , p.productID;

use employees;

-- 4. Write a SQL query to retrieve the names and salaries of all 
-- employees who have a salary greater than the average salary of 
-- all employees in the "employees" table, sorted by salary in 
-- descending order.

SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees)
ORDER BY salary DESC;


-- . Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, but have not made any orders 
-- in the last 90 days.


SELECT DISTINCT customers.name
FROM customers
JOIN orders ON customers.id = orders.customer_id
WHERE orders.order_date < DATEADD(day, -90, GETDATE())
AND customers.id NOT IN (
  SELECT DISTINCT customer_id
  FROM orders
  WHERE order_date >= DATEADD(day, -90, GETDATE())
);
-- 6. Write a SQL query to retrieve the names and salaries of all 
-- employees who have a salary greater than the minimum salary of 
-- their department in the "employees" table, sorted by department 
-- ID and then by salary in descending order.

SELECT e.first_name, e.last_name, e.salary
FROM employees e
WHERE e.salary > (
  SELECT MIN(salary)
  FROM employees
  WHERE department_id = e.department_id
)
ORDER BY e.department_id ASC, e.salary DESC;

-- 7. Write a SQL query to retrieve the names and salaries of the five 
-- highest paid employees in each department of the "employees" 
-- table, sorted by department ID and then by salary in descending 
-- order.

SELECT d.department_name, e.first_name, e.last_name, e.salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE (
  SELECT COUNT(*)
  FROM employees e2
  WHERE e2.department_id = e.department_id AND e2.salary >= e.salary
) <= 5
ORDER BY d.department_id ASC, e.salary DESC;


-- 8. Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, but have not made any orders 
-- for products in the "products" table with a price greater than 
-- $100.

SELECT c.customer_name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN (
  SELECT DISTINCT order_id
  FROM order_items oi
  JOIN products p ON oi.product_id = p.product_id
  WHERE p.price > 100
) oi2 ON o.order_id = oi2.order_id
WHERE oi2.order_id IS NULL;

-- 9. Write a SQL query to retrieve the names of all customers who have 
-- made orders in the "orders" table, along with the total amount 
-- they have spent on all orders and the average amount they have 
-- spent per order.


SELECT c.customer_name, SUM(oi.quantity * p.price) AS total_spent, AVG(oi.quantity * p.price) AS avg_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
GROUP BY c.customer_name;

-- 10. Write a SQL query to retrieve the names of all products in 
-- the "products" table that have been ordered by customers in more 
-- than one country, along with the names of the countries where the 
-- products have been ordered.

SELECT p.product_name, GROUP_CONCAT(DISTINCT c.country_name ORDER BY c.country_name ASC SEPARATOR ', ') AS countries_ordered_in
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
JOIN orders o ON oi.order_id = o.order_id
JOIN customers c ON o.customer_id = c.customer_id
GROUP BY p.product_name
HAVING COUNT(DISTINCT c.country_name) > 1;





--  


