-- 1. Write a SQL query to retrieve the names of all customers 
-- who have placed orders for products in the "Electronics" 
-- category, along with the total amount they have spent on 
-- all orders. The output should be sorted by the total amount 
-- spent in descending order.

SELECT c.customer_name, SUM(oi.quantity * p.price) AS total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
JOIN categories cat ON p.category_id = cat.category_id
WHERE cat.category_name = 'Electronics'
GROUP BY c.customer_name
ORDER BY total_spent DESC;

-- 2. Write a SQL query to retrieve the names of all employees 
-- who have sold at least one product in the "Clothing" 
-- category, along with the total revenue they have generated 
-- from those sales. The output should be sorted by total 
-- revenue generated in descending order.

SELECT e.employee_name, SUM(oi.quantity * p.price) AS total_revenue
FROM employees e
JOIN orders o ON e.employee_id = o.employee_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
JOIN categories c ON p.category_id = c.category_id
WHERE c.category_name = 'Clothing'
GROUP BY e.employee_name
HAVING SUM(oi.quantity) > 0
ORDER BY total_revenue DESC;
-- 3. Write a SQL query to retrieve the names of all customers 
-- who have placed orders for products in both the 
-- "Electronics" and "Clothing" categories. The output should 
-- only include customers who have ordered products in both 
-- categories.
SELECT c.customer_name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
JOIN categories c1 ON p.category_id = c1.category_id
JOIN categories c2 ON p.category_id = c2.category_id
WHERE c1.category_name = 'Electronics'
AND c2.category_name = 'Clothing'
GROUP BY c.customer_name
HAVING COUNT(DISTINCT c1.category_id) = 1 AND COUNT(DISTINCT c2.category_id) = 1;


-- 4. Write a SQL query to retrieve the names of all employees 
-- who have sold at least one product to a customer who has a 
-- shipping address in the same city as the employee. The 
-- output should only include employees who have made at least 
-- one such sale.


SELECT e.employee_name
FROM employees e
JOIN orders o ON e.employee_id = o.employee_id
JOIN customers c ON o.customer_id = c.customer_id
WHERE c.shipping_city = e.city
GROUP BY e.employee_name
HAVING COUNT(DISTINCT o.order_id) >= 1;

-- 5. Write a SQL query to retrieve the names of all customers 
-- who have placed orders for products in the "Electronics" 
-- category, but have never placed an order for products in 
-- the "Clothing" category

SELECT c.customer_name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN order_details od ON o.order_id = od.order_id
JOIN products p ON od.product_id = p.product_id
WHERE p.category = 'Electronics'
AND c.customer_id NOT IN (
  SELECT c2.customer_id
  FROM customers c2
  JOIN orders o2 ON c2.customer_id = o2.customer_id
  JOIN order_details od2 ON o2.order_id = od2.order_id
  JOIN products p2 ON od2.product_id = p2.product_id
  WHERE p2.category = 'Clothing'
)
GROUP BY c.customer_name;
-- 6. Write a SQL query to retrieve the names of all employees 
-- who have sold at least one product to customers who have 
-- placed orders for products in the "Electronics" category, 
-- but have never placed an order for products in the 
-- "Clothing" category. The output should only include 
-- employees who have made at least one such sale.

SELECT DISTINCT e.name
FROM employees e
JOIN orders o ON e.employee_id = o.employee_id
JOIN (
  SELECT DISTINCT customer_id
  FROM orders
  WHERE product_id IN (
    SELECT product_id
    FROM products
    WHERE category = 'Electronics'
  )
  AND customer_id NOT IN (
    SELECT customer_id
    FROM orders
    WHERE product_id IN (
      SELECT product_id
      FROM products
      WHERE category = 'Clothing'
    )
  )
) c ON o.customer_id = c.customer_id
WHERE o.product_id IN (
  SELECT product_id
  FROM products
  WHERE category = 'Electronics'
);

-- 7. Write a SQL query to retrieve the names of all customers 
-- who have placed orders for more than five different 
-- products in the "Electronics" category.

SELECT customers.name
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id
INNER JOIN order_items ON orders.id = order_items.order_id
INNER JOIN products ON order_items.product_id = products.id
WHERE products.category = 'Electronics'
GROUP BY customers.id
HAVING COUNT(DISTINCT products.id) > 5;


-- 8. Write a SQL query to retrieve the names of all employees 
-- who have sold products to customers who have placed orders 
-- for more than five different products in the "Electronics" 
-- category. The output should only include employees who have 
-- made at least one such sale.

SELECT DISTINCT e.employee_name
FROM employees e
JOIN orders o ON e.employee_id = o.employee_id
JOIN order_details od ON o.order_id = od.order_id
JOIN products p ON od.product_id = p.product_id
WHERE p.category = 'Electronics'
AND o.customer_id IN (
    SELECT o2.customer_id
    FROM orders o2
    JOIN order_details od2 ON o2.order_id = od2.order_id
    JOIN products p2 ON od2.product_id = p2.product_id
    WHERE p2.category = 'Electronics'
    GROUP BY o2.customer_id
    HAVING COUNT(DISTINCT p2.product_id) > 5
)
ORDER BY e.employee_name;




