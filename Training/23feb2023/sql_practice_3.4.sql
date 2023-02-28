-- // sql practice 3.4 //
-- Case 1
-- Assume you are working on a database for a car dealership. The 
-- database contains the following tables:
-- Table: Cars
-- CarID (int, PK)
-- Brand (varchar(50))
-- Model (varchar(50))
-- Year (int)
-- Mileage (int)
-- Price (decimal(10,2))
-- Available (bit)
-- Table: Customers
-- CustomerID (int, PK)
-- FirstName (varchar(50))
-- LastName (varchar(50))
-- Email (varchar(100))
-- PhoneNumber (varchar(20))
-- Table: Sales
-- SaleID (int, PK)
-- CarID (int, FK to Cars.CarID)
-- CustomerID (int, FK to Customers.CustomerID)
-- SaleDate (date)
-- SalePrice (decimal(10,2))

create database carDealership;
CREATE TABLE carDealership.Car (
  carID int auto_increment primary key,
    Brand VARCHAR(50),
    Model VARCHAR(50),
    _Year INT,
    Milage INT,
    Price DECIMAL(10 , 2 ),
    Available BIT
);

CREATE TABLE carDealership.Customers (
    customerID INT NOT NULL PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100),
    PhoneNumber VARCHAR(20)
);

CREATE TABLE carDealership.sales (
    carID INT,
    customerID INT,
    salesDate DATE,
    salesPrice DECIMAL(10 , 2 ),
    FOREIGN KEY (carID)
        REFERENCES carDealership.Car (carID)
        ON DELETE CASCADE,
    FOREIGN KEY (customerID)
        REFERENCES carDealership.Customers (customerID)
        ON DELETE CASCADE
);

-- 1. Retrieve the top 10 most expensive cars from the Cars 
-- table.

SELECT 
    carID
FROM
    carDealership.Car
ORDER BY Price DESC
LIMIT 10;
-- 2. Retrieve the average price of all available cars from the 
-- Cars table.\
SELECT CarID
FROM carDealerShip.Cars
WHERE Available = 1 AND Price = (
  SELECT AVG(Price)
  FROM carDealerShip.Cars
  WHERE Available = 1
);

-- 3. Retrieve the list of customers who have purchased a car, 
-- along with the total number of cars each customer has 
-- purchased.

SELECT 
 c.LastName,
    c.FirstName,
   
    c.customerID,
    COUNT(s.carID) AS totalcars
FROM
    carDealership.customers c
        INNER JOIN
    carDealership.sales s ON c.customerID = s.customerID
    group by c.customerID, c.FirstName,c.LastName;
    
 --    4. Retrieve the list of customers who have not yet made a 
-- purchase.
SELECT 
    c.customerID
FROM
    carDealership.Customers c
        LEFT JOIN
    carDealership.Sales s ON c.customerID = s.customerID
WHERE
    s.customerID IS NULL;
    
--     . Insert a new car into the Cars table with the following 
-- information: Brand='Toyota', Model='Corolla', Year=2022, 
-- Mileage=0, Price=20000, Available=1.
INSERT INTO  carDealership.Car(carID,Brand, Model, _Year, Milage, Price, Available) 
VALUES (1,'Toyota', 'Corolla', 2022, 0, 20000, 1);
-- 6. Update the price of all cars in the Cars table by adding 
-- 10% to their current price.

update carDealership.car
set Price = Price*1.1;
-- 7. Delete all sales from the Sales table that occurred before 
-- January 1, 2022.
DELETE FROM  carDealership.Sales
WHERE SaleDate < '2022-01-01';

-- Case 2
-- Consider you’ve one employee database system. Create table 
-- schema and add data according to the following queries.
CREATE TABLE carDealership. employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  hire_date DATE NOT NULL,
  job_title VARCHAR(50) NOT NULL,
  department VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);
-- Insert demo data into the "employees" table
INSERT INTO carDealership.employees (first_name, last_name, email, hire_date, job_title, department)
VALUES
('John', 'Doe', 'johndoe@example.com', '2022-01-01', 'Software Engineer', 'Engineering'),
('Jane', 'Smith', 'janesmith@example.com', '2022-01-02', 'Product Manager', 'Product'),
('Mike', 'Johnson', 'mikejohnson@example.com', '2022-01-03', 'Sales Executive', 'Sales'),
('Sara', 'Williams', 'sarawilliams@example.com', '2022-01-04', 'Human Resources Coordinator', 'Human Resources'),
('Chris', 'Lee', 'chrislee@example.com', '2022-01-05', 'Marketing Specialist', 'Marketing');

-- 1. Write a query that returns the first and last name of all 
-- employees who have a title that contains the word 
-- "Manager".
select first_name , last_name from carDealership.employees  where job_title like('%Manager%');
-- 2. Write a query that returns the department name and the 
-- average salary of all employees in each department.

SELECT  department, AVG(salary) AS avg_salary
FROM carDealership.employees
GROUP BY department;

-- 3. Write a query that returns the number of employees who were 
-- hired in each year, sorted by year.
SELECT YEAR(hire_date) AS hire_year, COUNT(*) AS num_hires
FROM employees
GROUP BY hire_year
ORDER BY hire_year;
-- 4. Write a query that returns the first name, last name, and 
-- salary of the top 10 highest-paid employees.
SELECT 
    first_name, last_name, salary
FROM
    carDealership.employees
ORDER BY salary DESC
LIMIT 10;
-- 5. Write a query that updates the salary of all employees in 
-- the "Sales" department to be 10% higher than their current 
-- salary.
update carDealership.employees 
set salary = salary*1.1
where department='sales';
-- 6. Write a query that deletes all employees who were hired 
-- before the year 2000.
DELETE FROM carDealership.employees
WHERE YEAR(hire_date) < 2000;
-- 7. Write a query that creates a new table called 
-- "employee_stats" that contains the following columns: 
-- "department_name", "total_employees", and "average_salary". 
-- The table should include one row for each department.
create table carDealership . employee_stats(
 department_name varchar(50),
 total_employees int ,
 average_salary decimal(10,2)
);

-- 8. Write a query that returns the first and last name of all 
-- employees who have the same last name as their manager.

SELECT e.first_name, e.last_name
FROM employees e
JOIN employees m ON e.manager_id = m.employee_id
WHERE e.last_name = m.last_name
  AND e.job_title = m.job_title;
--   9. Write a query that returns the top 5 departments with the 
-- highest average salary.
SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC
LIMIT 5;

-- 10. Write a query that returns the first and last name of 
-- all employees who have at least one dependent. Sort the 
-- results by last name.












    