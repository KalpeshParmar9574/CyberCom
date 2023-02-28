create database sql_practice_4_3;
use sql_practice_4_3;

-- id (integer)
-- name (text)
-- email (text)
-- password (text)
-- created_at (timestamp)
-- updated_at (timestamp)

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

INSERT INTO users (id,name, email, password, created_at, updated_at) VALUES
  (1,'John Doe', 'john@example.com', 'password123', '2022-02-25 12:00:00', '2022-02-25 12:00:00'),
  (2,'Jane Smith', 'jane@example.com', 'password456', '2022-02-26 10:30:00', '2022-02-26 10:30:00'),
  (3,'Bob Johnson', 'bob@example.com', 'password789', '2022-02-26 14:45:00', '2022-02-26 14:45:00');
CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  amount FLOAT NOT NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO orders (id,user_id, amount, created_at, updated_at) VALUES
  (1,1, 25.50, '2022-02-25 12:30:00', '2022-02-25 12:30:00'),
  (2,1, 50.00, '2022-02-26 11:00:00', '2022-02-26 11:00:00'),
  (3,2, 75.25, '2022-02-26 12:00:00', '2022-02-26 12:00:00'),
  (4,3, 10.00, '2022-02-26 15:00:00', '2022-02-26 15:00:00'),
  (5,3, 20.50, '2022-02-26 16:30:00', '2022-02-26 16:30:00');
  
--   1. Create a new user with the following information:
insert into users (id,name,email,password,created_at,updated_at) value(4,'John Deo','john.deo@example.com','123456',current_timestamp(),current_timestamp());
-- 2. Retrieve the names and email addresses of all users who 
-- have placed at least one order.
create index idx_userID  on orders(user_id);
SELECT 
    u.name, u.email
FROM
    users u
        JOIN
    orders o ON u.id = o.user_id
GROUP BY u.id
HAVING COUNT(o.user_id) > 1;

-- 3. Retrieve the total amount of orders placed by each user, 
-- sorted in descending order of total amount.
 
SELECT 
    u.name, u.email, SUM(o.amount)
FROM
    users u
        JOIN
    orders o ON u.id = o.user_id
GROUP BY (o.user_id)
ORDER BY SUM(o.amount) DESC;
 
 
--  4. Retrieve the email address of the user who has placed the 
-- most orders.

SELECT u.email
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id
HAVING COUNT(*) = (
    SELECT MAX(order_count)
    FROM (
        SELECT user_id, COUNT(*) as order_count
        FROM orders
        GROUP BY user_id
    ) AS user_order_counts
);

-- 5. Retrieve the user IDs and the total amount of orders placed 
-- by users who have placed at least one order and whose total 
-- amount of orders exceeds $100.
use sql_practice_4_3;
SELECT 
    u.id, SUM(o.amount)
FROM
    users u
        JOIN
    orders o ON u.id = o.user_id
GROUP BY o.user_id
HAVING COUNT(*) >= 1 AND sum(o.amount) > 20;

-- 6. Retrieve the number of users who have not placed any 
-- orders.
SELECT COUNT(*) as num_users_no_orders,id
FROM users
WHERE id NOT IN (SELECT DISTINCT user_id FROM orders)
group by id;

-- Update the user with ID 1 to change their email address to 
-- "jane.doe@example.com"
update users 
set email = 'jane.test@example.com'
where id=1;
-- 8. Delete all orders placed by users whose email address 
-- contains the string "test".


-- SELECT 
--     o.id
-- FROM
--     orders o
--         JOIN
--     users u ON o.user_id = u.id
-- WHERE
--     email LIKE ('%test%');

delete o from orders o join users u on o.user_id = u.id where u.email like ('%test%');

-- 9. Retrieve the total amount of orders placed on each day of 
-- the current week, grouped by day.

select sum(amount) as total_amount from orders   where week(created_at)=week(now()) group by day(created_at);



-- 10. Retrieve the IDs and email addresses of users who have 
-- placed an order in the current year and whose email address 
-- is in the format "example.com".

SELECT 
    u.id, u.email
FROM
    users u
        JOIN
    orders o ON o.user_id = u.id
WHERE
    YEAR(o.created_at) = YEAR(now())
        AND u.email LIKE ('%example.com%')
GROUP BY o.user_id

