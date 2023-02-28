-- 1. Write a SQL query to retrieve the names and salaries of all 
-- employees who have a salary greater than the average salary 
-- of all employees.

SELECT name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
-- 2. Write a SQL query to retrieve the names and total revenue 
-- generated by all customers in the "orders" table, sorted by 
-- revenue in descending order.

SELECT c.name, SUM(o.quantity * o.price) AS total_revenue
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.name
ORDER BY total_revenue DESC;

-- 3. Write a SQL query to retrieve the names and total revenue 
-- generated by all customers in the "orders" table, sorted by 
-- revenue in descending order, where the total revenue is 
-- greater than $10,000.

SELECT c.name, SUM(o.quantity * o.price) as total_revenue
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id
HAVING total_revenue > 10000
ORDER BY total_revenue DESC;


-- 4. Write a SQL query to retrieve the names and total revenue 
-- generated by all customers in the "orders" table, sorted by 
-- revenue in descending order, where the total revenue is 
-- greater than the average revenue generated by all 
-- customers.

SELECT customers.name, SUM(orders.price) AS total_revenue
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id
GROUP BY customers.id
HAVING total_revenue > (SELECT AVG(total_revenue) FROM (
                          SELECT SUM(price) AS total_revenue 
                          FROM orders 
                          GROUP BY customer_id
                        ) AS revenue_by_customer
                      )
ORDER BY total_revenue DESC;


-- 5. Write a SQL query to retrieve the names and total revenue 
-- generated by all customers in the "orders" table, sorted by 
-- revenue in descending order, where the total revenue is 
-- greater than the average revenue generated by all 
-- customers, and the customer is from the "USA" or "Canada".
SELECT c.name, SUM(o.quantity * o.price) AS revenue
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
WHERE c.country IN ('USA', 'Canada')
GROUP BY c.id, c.name
HAVING SUM(o.quantity * o.price) > (SELECT AVG(total_revenue) FROM (SELECT SUM(orders.quantity * orders.price) AS total_revenue FROM orders GROUP BY customer_id) AS revenue_table)
ORDER BY revenue DESC;
-- 6. Write a SQL query to retrieve the names of all employees 
-- who have made sales greater than $50,000 in the "orders" 
-- table.

SELECT e.employee_name, SUM(o.order_total) AS total_sales
FROM orders o
INNER JOIN employees e
ON o.employee_id = e.employee_id
GROUP BY e.employee_name, e.employee_id
HAVING SUM(o.order_total) > 50000;


-- 7. Write a SQL query to retrieve the names of all employees 
-- who have made sales greater than the average sales of all 
-- employees in the "orders" table, sorted by sales in 
-- descending order.

SELECT e.name, SUM(o.amount) AS total_sales
FROM employees e
INNER JOIN orders o ON e.id = o.employee_id
GROUP BY e.id
HAVING SUM(o.amount) > (SELECT AVG(sales) FROM (
                            SELECT SUM(amount) AS sales FROM orders GROUP BY employee_id
                        ) AS sales_by_employee)
ORDER BY total_sales DESC;


-- 8. Write a SQL query to retrieve the names and total revenue 
-- generated by all customers in the "orders" table, sorted by 
-- revenue in descending order, where the customer is from the 
-- "USA" and the revenue is greater than $5,000.
SELECT c.name, SUM(o.price * o.quantity) AS revenue
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
WHERE c.country = 'USA' AND SUM(o.price * o.quantity) > 5000
GROUP BY c.name
ORDER BY revenue DESC;


-- 9. Write a SQL query to retrieve the names and total revenue 
-- generated by all customers in the "orders" table, sorted by 
-- revenue in descending order, where the customer is from the 
-- "USA" and the revenue is greater than the average revenue 
-- generated by all customers from the "USA".


SELECT customers.name, SUM(orders.quantity * orders.price) as total_revenue
FROM orders
JOIN customers ON orders.customer_id = customers.id
WHERE customers.country = 'USA'
GROUP BY customers.name
HAVING total_revenue > (SELECT AVG(total_revenue) 
                        FROM (SELECT SUM(orders.quantity * orders.price) as total_revenue 
                              FROM orders 
                              JOIN customers ON orders.customer_id = customers.id 
                              WHERE customers.country = 'USA' 
                              GROUP BY customers.name) as usa_revenue)
ORDER BY total_revenue DESC;
-- 10. Write a SQL query to retrieve the names and total 
-- revenue generated by all customers in the "orders" table, 
-- sorted by revenue in descending order, where the customer 
-- is from the "USA" and the revenue is greater than the 
-- average revenue generated by all customers, and the 
-- customer has made at least 2 orders.

SELECT customers.name, SUM(orders.amount) AS total_revenue
FROM customers 
JOIN orders ON customers.id = orders.customer_id
WHERE customers.country = 'USA'
GROUP BY customers.id
HAVING COUNT(orders.id) >= 2 AND SUM(orders.amount) > (SELECT AVG(total_revenue) FROM 
    (SELECT customers.id, SUM(orders.amount) AS total_revenue
    FROM customers 
    JOIN orders ON customers.id = orders.customer_id
    WHERE customers.country = 'USA'
    GROUP BY customers.id) AS customer_revenue)
ORDER BY total_revenue DESC;
 
 
 




