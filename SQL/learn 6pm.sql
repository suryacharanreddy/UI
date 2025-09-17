CREATE TABLE employee(
eid INT,
ename VARCHAR(32),
esal FLOAT,
loc varchar(32));

INSERT INTO employee VALUES
(101, 'Rahul' ,25000,'Hyderbad'),
(102, 'Sonia' ,55000,'Hyderbad'),
(103, 'Priya' ,23000,'Banglore'),
(104, 'Rajni' ,27000,'Banglore'),
(105, 'Modi' ,14000,'Chennai'),
(106, 'Vijay' ,36000,'Chennai'),
(107, 'Vinay' ,70000,'Chennai'),
(108, 'Maddi' ,58000,'Kochi'),
(109, 'Ganesh' ,45000,'Kochi'),
(110, 'Balaji' ,85000,'Vizag');

1.SELECT* FROM employee
  WHERE ename LIKE 'R%';
  
 2.SELECT * FROM employee
   WHERE ename LIKE '%i';
   
3. SELECT * FROM employee
   WHERE ename LIKE '__j%';