

CREATE DATABASE test;
 CREATE TABLE sales
 (
 date_of_purchase DATE,
 customer_id INT,
 item_code VARCHAR(10),
 
 FOREIGN KEY (customer_id) REFERENCES customer(customer_id) ON DELETE CASCADE 
 
 );
CREATE TABLE customer (
cutomer_id INT PRIMARY KEY AUTO_INCREMENT ,
fname VARCHAR(255),
lname VARCHAR(255),
email VARCHAR(255),
no_of_cimplains INT
);
-- Alter table customer
-- RENAME COLUMN  cutomer_id TO customer_id,
ALTER TABLE customer
Add UNIQUE KEY (email)