
-- 01. Create a database structure for employee leave application. It 
-- should include all the employee's information as well as their 
-- leave information
create database employees;
 CREATE TABLE employees.emp_info (
    emp_id INT NOT NULL PRIMARY KEY auto_increment,
    emp_name VARCHAR(255),
    emp_joining_date DATE,
    emp_resign_date date,
    department INT
   
);
alter table employees.emp_info
add foreign key(department)references department(dept_id)on delete cascade;
CREATE TABLE employees.department (
    dept_id INT PRIMARY KEY not NULL AUTO_INCREMENT,
    employees INT,
    teams INT
   
);
-----------------------------------------------------
-- 2. Write an SQL query to report the movies with an odd-numbered 
-- ID and a description that is not "boring". Return the result 
-- table ordered by rating in descending order.

create database cinema ;

CREATE TABLE cinema.movie_info (
    movie_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    movie_name VARCHAR(255),
    movie_description VARCHAR(255),
    rating DECIMAL(2 , 1 )
);

insert into cinema. movie_info(movie_name,movie_description,rating) value("war","great 3d",8.9),("science","fiction",8.3),("irish","boring",6.2),("ice song","fantacy",8.6),
("House card","intresting ",9.1);

-- ouery for output 
select * from cinema.movie_info
order by rating desc limit 2;
--------------------------------------------------------
-- 3. Write an SQL query to swap all 'f' and 'm' values (i.e., 
-- change all 'f' values to 'm' and vice versa) with a single 
-- update statement and no intermediate temporary tables.Note 
-- that you must write a single update statement, do not write 
-- any select statement for this problem.
create database sql_practice02;
CREATE TABLE sql_practice02.salary (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(255),
    sex ENUM('male', 'female', 'others') NOT NULL,
    salary INT
);
insert into sql_practice02. salary (emp_name,sex,salary)value('A','male',2500),('B','female',1500),
('C','male',5500),('D','female',500);

 -------------------------------------------------------------
--  4. Write an SQL query to delete all the duplicate emails, keeping 
-- only one unique email with the smallest id. Return the result 
-- table in any order.

create table sql_practice02 . person (
id int not null auto_increment primary key,
email varchar(255)
);
insert into sql_practice02.person(email)value('john@example.com'),('bob@example.com'),('john@exampole.com');

SELECT DISTINCT email FROM sql_practice02. person;
------------------------------------------------------
--  Write an SQL query to report all customers who never order 
-- anything. Return the result table in any order.

create table sql_practice02. customers(
id int auto_increment not null primary key ,
customer_name varchar(255)
);
create table sql_practice02. orders (
id int auto_increment primary key not null,
customerId int

);

insert into sql_practice02.customers(customer_name)value ('joe'),('henry'),('max'),('sam');
insert into sql_practice02. orders(customerId)value(3),(2);

select customer_name from sql_practice02.customers
where id IN (select customerId from sql_practice02.orders);


-- 6. Write an SQL query to create index on the email column.
-- +-------------+---------+
-- | Column Name | Type |
-- +-------------+---------+
-- | id | int |
-- | email | varchar |
-- +-------------+---------+

create table sql_practice02. users (
id int auto_increment not null primary key,
email varchar(255)
);

CREATE UNIQUE INDEX idx_email
ON sql_practice02. users (email);
-----------------------------------------------------------
--  Create a database schema for student grade system. It contains 
-- student data and their grade of each subject based on the 
-- different semester.
CREATE TABLE sql_practice02. students (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE sql_practice02. subjects (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE sql_practice02. semesters (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE sql_practice02. grades (
  id INT NOT NULL AUTO_INCREMENT,
  student_id INT NOT NULL,
  subject_id INT NOT NULL,
  semester_id INT NOT NULL,
  grade DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (student_id) REFERENCES students (id),
  FOREIGN KEY (subject_id) REFERENCES subjects (id),
  FOREIGN KEY (semester_id) REFERENCES semesters (id)
);
----------------------------------------------------------
-- Write an SQL query to report the first name, last name, city, 
-- and state of each person in the Person table. If the address 
-- of a personId is not present in the Address table, report null 
-- instead. Return the result table in any order.

create table sql_practice02. persons2(
personId   int not null auto_increment primary key,
lastname varchar(255),
firstname varchar(255)
);

create table sql_practice02. address(
addressId int auto_increment primary key not null,
personId int,
city varchar(100),
state varchar(100),
foreign key (personId) references  persons2(personId) on delete cascade
);

insert into sql_practice02 . persons2(firstname,lastname) value('Wang','Allen'),('Alice','Bob');
insert into sql_practice02 . address (personId,city,state) value ( 2 ,'new york city ','new york'),(3,'leetcode','california');

select firstname,lastname  from sql_practice02.persons2
join (select)



