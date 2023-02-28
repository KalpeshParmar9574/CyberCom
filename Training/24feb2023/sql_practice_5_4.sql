-- 1. Write a SQL query to retrieve the names of all customers 
-- who have made at least one order in the "orders" table and 
-- have not made any orders in the "returns" table.


SELECT DISTINCT c.name 
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN returns r ON o.order_id = r.order_id
WHERE r.return_id IS NULL;


-- 2. Write a SQL query to retrieve the names of all customers 
-- who have made orders in the "orders" table and have 
-- returned at least one item in the "returns" table.

SELECT DISTINCT o.customer_name
FROM orders o
JOIN returns r ON o.order_id = r.order_id;

-- 3. Write a SQL query to retrieve the names of all customers 
-- who have made orders in the "orders" table and have not 
-- returned any items in the "returns" table.
SELECT DISTINCT customer_name 
FROM orders 
WHERE customer_name NOT IN 
  (SELECT DISTINCT customer_name 
   FROM returns)
ORDER BY customer_name;

-- 4. Write a SQL query to retrieve the names of all customers 
-- who have made orders in the "orders" table and have 
-- returned more items than they have ordered.
SELECT c.name
FROM customers c
INNER JOIN (
  SELECT customer_id, SUM(quantity) AS ordered_items
  FROM orders
  GROUP BY customer_id
) o ON c.id = o.customer_id
INNER JOIN (
  SELECT customer_id, SUM(quantity) AS returned_items
  FROM returns
  GROUP BY customer_id
) r ON c.id = r.customer_id
WHERE r.returned_items > o.ordered_items
;
-- . Write a SQL query to retrieve the names of all customers 
-- who have made orders in the "orders" table and have not 
-- returned more items than they have ordered.

SELECT c.name
FROM customers c
JOIN orders o ON c.id = o.customer_id
LEFT JOIN returns r ON o.id = r.order_id
GROUP BY c.id
HAVING COUNT(DISTINCT o.id) > COUNT(DISTINCT r.order_id)
OR COUNT(DISTINCT r.order_id) IS NULL;

-- 6. Write a SQL query to retrieve the names of all customers 
-- who have made orders in the "orders" table and have spent 
-- more than $100 in total on all orders.

SELECT c.name
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name
HAVING SUM(o.total_price) > 100
ORDER BY SUM(o.total_price) DESC;

-- 7. Write a SQL query to retrieve the names of all customers 
-- who have made orders in the "orders" table and have spent 
-- more than $100 in total on all orders, sorted by the total 
-- amount spent in descending order.

SELECT c.name, SUM(o.total_amount) as total_spent
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
GROUP BY c.name
HAVING total_spent > 100
ORDER BY total_spent DESC;

-- 8. Write a SQL query to retrieve the names of all customers 
-- who have made orders in the "orders" table and have ordered 
-- products in all categories.

SELECT c.name
FROM customers c
WHERE EXISTS (
  SELECT 1
  FROM orders o
  JOIN products p ON o.product_id = p.id
  JOIN categories cat ON p.category_id = cat.id
  WHERE o.customer_id = c.id
)
AND NOT EXISTS (
  SELECT 1
  FROM categories cat
  WHERE NOT EXISTS (
    SELECT 1
    FROM products p
    JOIN orders o ON p.id = o.product_id
    WHERE o.customer_id = c.id AND p.category_id = cat.id
  )
);

-- 9. Write a SQL query to retrieve the names of all customers 
-- who have made orders in the "orders" table and have not 
-- ordered products in all categories.
SELECT DISTINCT customer_name
FROM orders
WHERE customer_name NOT IN (
    SELECT customer_name
    FROM orders
    GROUP BY customer_name
    HAVING COUNT(DISTINCT category) < (SELECT COUNT(DISTINCT category) FROM orders)
);

-- 10. Write a SQL query to retrieve the names of all 
-- customers who have made orders in the "orders" table and 
-- have ordered products in at least two different categories.
SELECT c.customer_name
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_details od ON o.order_id = od.order_id
INNER JOIN products p ON od.product_id = p.product_id
GROUP BY c.customer_id, p.category_id
HAVING COUNT(DISTINCT p.category_id) >= 2;








