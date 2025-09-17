cmd>mysql -uroot -proot

system cls;
show databases;
CREATE DATABASE dbone;

USE dbone;

show tables;

CREATE TABLE employees();

CREATE TABLE employees(
eid int,
ename VARCHAR(32), 
esal  float
);

DESC employees


SELECT *FROM employees;


INSERT INTO employees
VALUES
(101,'Rahul',45000.45);
===============================
class-2

mysql -uroot -proot

system cls;

CREATE DATABASE dbtwo;

USE dbtwo;
CREATE TABLE employees();


CREATE TABLE employees(
eid int,
ename VARCHAR(32),
esal FLOAT,
loc VARCHAR(32)
);

DESC employees;


mysql> DESC employees;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| eid   | int         | YES  |     | NULL    |       |
| ename | varchar(32) | YES  |     | NULL    |       |
| esal  | float       | YES  |     | NULL    |       |
| loc   | varchar(32) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
4 rows in set (0.03 sec)


SELECT *FROM employees;

INSERT INTO employees
VALUES
(101,'Rahul',45000.45,'Wayanad');

INSERT INTO employees
VALUES
(102,'Sonia',55000.55,'New Delhi'),
(103,'Priyanka',65000.65,'New Delhi');

INSERT INTO employees(eid,ename,loc)
VALUES
(104,'Modi','Bangalore');

INSERT INTO employees(eid,ename)
VALUES
(105,'Amith');


UPDATE employees
SET ename="Rahul Gandhi JI"
WHERE eid=101;

UPDATE employees
SET esal=400;


DELETE FROM employees
WHERE eid=105;

DELETE FROM employees;

=================================
mysql -uroot -proot
system cls;

show databases;
USE dbtwo;
show tables;

CREATE TABLE employees(
eid int,
ename VARCHAR(32),
esal float,
loc VARCHAR(32)
);
DESC employees;

SELECT eid,ename 
FROM employees;

SELECT eid AS Employee_Id,
       ename AS Name,
	   loc AS Location
FROM employees;


SELECT eid AS "Employee Id",
       ename AS Name,
	   loc AS Location
FROM employees;
==========================================
CONSTRAINT ON mysql ? rules ON data
NOT NULL      -  NULL VALUES NOT allowed,but duplicate allowed
UNIQUE        -  duplicates are NOT allowed but NULL VALUES allowed
CHECK
DEFAULT 
PRIMARY KEY  - NOT NULL +UNIQUE 
FOREIGN KEY 
INDEX

DROP TABLE employees;

CREATE TABLE employees(
eid INT UNIQUE,
ename VARCHAR(32) NOT NULL,
esal  float,
age  int,
loc VARCHAR(32) DEFAULT 'Bangalore'
);

DESC employees;

INSERT INTO employees
VALUES
(101,'Rahul',45000.45,46,'Wayanad');

INSERT INTO employees(ename,esal,age,loc)
VALUES
('Sonia',55000.55,80,'New Delhi');

INSERT INTO employees(eid,esal,age,loc)
VALUES
(103,75000.75,71,'New Delhi');

INSERT INTO employees(eid,ename,esal,age)
VALUES
(104,'Modi',75000,78);



INSERT INTO employees(eid,ename,esal,age)
VALUES
(105,'Rajni',85000,8);

=====================================
DROP TABLE employees;


CREATE TABLE employees(
eid INT UNIQUE,
ename VARCHAR(32) NOT NULL,
esal float,
age INT CHECK(age>=18),
loc VARCHAR(32) DEFAULT 'Bangalore'
);

DESC employees;
INSERT INTO employees
VALUES
(105,'Rajni',85000,8,'Chennai');

===========================================
class-4

mysql -uroot -proot
system cls

show databases;

DROP DATABASE dbtwo;


CREATE DATABASE dbthree;

USE dbthree;

CREATE TABLE EMPLOYEES(
eid int,
ename VARCHAR(32) NOT NULL, 
esal FLOAT NOT NULL,
age INT check(age>=18),
PRIMARY KEY(eid)
);

DESC employees;


INSERT INTO employees
VALUES
(101,'Rahul',45000.45,48);

INSERT INTO employees(ename,esal,age)
VALUES
('Modi',75000.75,81);
==============================
CREATE TABLE orders(
order_Id int,
details VARCHAR(32) NOT NULL,
price FLOAT NOT NULL,
status VARCHAR(32) DEFAULT 'Open',
PRIMARY KEY(order_Id)
);
DESC orders;

mysql> DESC orders;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |  
+----------+-------------+------+-----+---------+-------+
| order_Id | int         | NO   | PRI | NULL    |       |
| details  | varchar(32) | NO   |     | NULL    |       |
| price    | float       | NO   |     | NULL    |       |
| status   | varchar(32) | YES  |     | Open    |       |
+----------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)

INSERT INTO orders
VALUES
(10001,'Marker Pen1',35,'Closed');

SELECT *FROM orders;

INSERT INTO orders(order_Id,details,price)
VALUES
(10004,'Iphone 5s',50000);
===========================================
DROP TABLE employees;

CREATE TABLE bunit(
b_Id int,
name VARCHAR(32) NOT null,
loc VARCHAR(32) NOT null,
PRIMARY KEY(b_Id)
);
DESC bunit;

CREATE TABLE employees(
eid int,
ename VARCHAR(32) NOT NULL,
esal FLOAT NOT NULL,  
bu_Id INT, 
age INT CHECK(age>=18),
PRIMARY KEY(eid),
FOREIGN KEY(bu_Id) REFERENCES bunit(b_Id)
);

DESC employees;

INSERT INTO bunit
VALUES
(1001,'ATT','NY'),
(1002,'COLT','London'),
(1003,'Airtel','Mumbai');

INSERT INTO employees
VALUES
(101,'Rahul',45000,1003,45);


INSERT INTO employees
VALUES
(102,'Sonia',45000,1003,75);


INSERT INTO employees
VALUES
(103,'Priyanka',65000,1003,42);

SELECT 
	employees.ename,
	bunit.name
	FROM
employees, 
bunit
WHERE employees.bu_Id=bunit.b_Id;

INSERT INTO employees
VALUES
(104,'Gnanesh',75000,1002,21);