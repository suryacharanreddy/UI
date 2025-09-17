create table employees (
eid INT ,
fname VARCHAR(32),
lname VARCHAR(32),
city VARCHAR(32),
esal INT,
age INT,
PRIMARY KEY(eid)
);

INSERT INTO employees VALUES
(101,'Rahul','Gandhi','Wayanad',45000,52),
(102,'Sonia','Gandhi','New Delhi',55000,75),
(103,'Priyanka','Gandhi','Nodia',65000,45),
(104,'Modi','Narendra','New Delhi',75000,69),
(105,'Rajni','Kanth','Chennai',85000,65),
(106,'Vijay','Setupathi','Chennai',95000,47),
(107,'Nayana','Tara','Chennai',25000,40),
(108,'Alia','Bhut','Mumbai',45000,31),
(109,'Mahesh','Bhut','Mumbai',15000,68),
(110,'Sonam','Kapoor','Mumbai',30000,27),
(111,'Anil','Kapoor','Mumbai',38000,40),
(112,'Raj','Kapoor','Mumbai',18000,78),
(113,'Vishnu','Manchu','Hyderabad',10000,40),
(114,'Manoj','Manchu','Hyderabad',12000,35);

INSERT INTO employees (eid,fname,lname,city,age)
values
(115,'Mohan','Manchu','Hyderabad',70);

SELECT * FROM employees;

+-----+----------+-----------+-----------+-------+------+
| eid | fname    | lname     | city      | esal  | age  |
+-----+----------+-----------+-----------+-------+------+
| 101 | Rahul    | Gandhi    | Wayanad   | 45000 |   52 |
| 102 | Sonia    | Gandhi    | New Delhi | 55000 |   75 |
| 103 | Priyanka | Gandhi    | Nodia     | 65000 |   45 |
| 104 | Modi     | Narendra  | New Delhi | 75000 |   69 |
| 105 | Rajni    | Kanth     | Chennai   | 85000 |   65 |
| 106 | Vijay    | Setupathi | Chennai   | 95000 |   47 |
| 107 | Nayana   | Tara      | Chennai   | 25000 |   40 |
| 108 | Alia     | Bhut      | Mumbai    | 45000 |   31 |
| 109 | Mahesh   | Bhut      | Mumbai    | 15000 |   68 |
| 110 | Sonam    | Kapoor    | Mumbai    | 30000 |   27 |
| 111 | Anil     | Kapoor    | Mumbai    | 38000 |   40 |
| 112 | Raj      | Kapoor    | Mumbai    | 18000 |   78 |
| 113 | Vishnu   | Manchu    | Hyderabad | 10000 |   40 |
| 114 | Manoj    | Manchu    | Hyderabad | 12000 |   35 |
| 115 | Mohan    | Manchu    | Hyderabad |  NULL |   70 |
+-----+----------+-----------+-----------+-------+------+
15 rows in set (0.00 sec)

1. Write a query to fetch employee whose last name is same.
SELECT * FROM employees
WHERE lname='Gandhi';

2. Write a query to fetch whose age is grater then 70.
	SELECT * FROM employees
	WHERE age>70;
+-----+-------+--------+-----------+-------+------+
| eid | fname | lname  | city      | esal  | age  |
+-----+-------+--------+-----------+-------+------+
| 102 | Sonia | Gandhi | New Delhi | 55000 |   75 |
| 112 | Raj   | Kapoor | Mumbai    | 18000 |   78 |
+-----+-------+--------+-----------+-------+------+

3. Write a query to fetch employee with same city.

4. Write a query to fetch whose name ends with 'h'.
	SELECT * FROM employees
	WHERE fname LIKE '%h';
+-----+--------+-------+--------+-------+------+
| eid | fname  | lname | city   | esal  | age  |
+-----+--------+-------+--------+-------+------+
| 109 | Mahesh | Bhut  | Mumbai | 15000 |   68 |
+-----+--------+-------+--------+-------+------+

5. Write a query to count employee whose last name ends with 'i'.
	SELECT * FROM employees
	WHERE lname LIKE '%i';
+-----+----------+-----------+-----------+-------+------+
| eid | fname    | lname     | city      | esal  | age  |
+-----+----------+-----------+-----------+-------+------+
| 101 | Rahul    | Gandhi    | Wayanad   | 45000 |   52 |
| 102 | Sonia    | Gandhi    | New Delhi | 55000 |   75 |
| 103 | Priyanka | Gandhi    | Nodia     | 65000 |   45 |
| 106 | Vijay    | Setupathi | Chennai   | 95000 |   47 |
+-----+----------+-----------+-----------+-------+------+	

6. Write a query to find employee with highest salary.
	SELECT * FROM employees
	WHERE esal=(SELECT MAX(esal) FROM employees;
+-----+-------+-----------+---------+-------+------+
| eid | fname | lname     | city    | esal  | age  |
+-----+-------+-----------+---------+-------+------+
| 106 | Vijay | Setupathi | Chennai | 95000 |   47 |
+-----+-------+-----------+---------+-------+------+
	
7. Write a query to find employee with lowest salary.
	SELECT * FROM employees
	WHERE esal=(SELECT MIN(esal)FROM employees);
+-----+--------+--------+-----------+-------+------+
| eid | fname  | lname  | city      | esal  | age  |
+-----+--------+--------+-----------+-------+------+
| 113 | Vishnu | Manchu | Hyderabad | 10000 |   40 |
+-----+--------+--------+-----------+-------+------+

8. Write a query to change last name of employee whose id is 102.
	UPDATE employees
	SET lname='kapoor'
	WHERE eid=102;
+-----+-------+--------+-----------+-------+------+
| eid | fname | lname  | city      | esal  | age  |
+-----+-------+--------+-----------+-------+------+
| 102 | Sonia | kapoor | New Delhi | 55000 |   75 |
+-----+-------+--------+-----------+-------+------+

9. Write a query to find name of employee whose name starts with 'A' and city name starts with 'B'.
	SELECT * FROM employees
	WHERE fname LIKE 'A%' AND city LIKE 'B%';
EMPTY set.

10. Write a query to find employee with highest salary in 'Bangalore'.
	SELECT * FROM employees
	WHERE esal=(SELECT MAX(esal)
		       FROM employees
			   WHERE city='Bangalore');
EMPTY set.

11. Write a query to find employee who live in 'Hyderabad' with age above 70.
	SELECT * FROM employees
	WHERE city='Hyderabad' AND age>70;
empty set.
	
12. Write a query to find employee with salary below 50000.
	SELECT * FROM employees
	WHERE esal<50000;
+-----+--------+--------+-----------+-------+------+
| eid | fname  | lname  | city      | esal  | age  |
+-----+--------+--------+-----------+-------+------+
| 101 | Rahul  | Gandhi | Wayanad   | 45000 |   52 |
| 107 | Nayana | Tara   | Chennai   | 25000 |   40 |
| 108 | Alia   | Bhut   | Mumbai    | 45000 |   31 |
| 109 | Mahesh | Bhut   | Mumbai    | 15000 |   68 |
| 110 | Sonam  | Kapoor | Mumbai    | 30000 |   27 |
| 111 | Anil   | Kapoor | Mumbai    | 38000 |   40 |
| 112 | Raj    | Kapoor | Mumbai    | 18000 |   78 |
| 113 | Vishnu | Manchu | Hyderabad | 10000 |   40 |
| 114 | Manoj  | Manchu | Hyderabad | 12000 |   35 |
+-----+--------+--------+-----------+-------+------+


