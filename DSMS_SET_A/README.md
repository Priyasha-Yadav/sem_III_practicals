### Q1. Write SQL queries to create a table MenuItems with the following:

* item_id INT (Primary Key)
* item_name VARCHAR(50) (Unique)
* price INT (Not Null)
* category VARCHAR(30)

```sql
CREATE TABLE MenuItems(
    item_id INT PRIMARY KEY, 
    item_name VARCHAR(50) UNIQUE,
    price INT NOT NULL,
    category VARCHAR(30),
    );
```

### Q2. Write SQL queries for the following operations on the MenuItems table:

* Insert three menu items.
* Update the price of any item
* Delete the price of any item
* Find the average price of all items
* Find the sum of all prices

```sql
INSERT INTO MenuItems VALUES(1, "Pizza", 250, "fast food"),
(2, "Burger", 30, "fast food"),
(3, "Pasta", 60, "fast food"),
(4, "Coffee", 50, "drinks");

UPDATE MenuItems SET price = 50 WHERE item_id = 1;
DELETE FROM MenuItems WHERE item_id = 1;

SELECT 
AVG(price) as average_price,
SUM(price) as total_price
FROM MenuItems;
```

```sql
+---------------+-------------+
| average_price | total_price |
+---------------+-------------+
|       46.6667 |         140 |
+---------------+-------------+
```

### Output: SELECT * FROM MenuItems; 

```sql
+---------+-----------+-------+-----------+
| item_id | item_name | price | category  |
+---------+-----------+-------+-----------+
|       2 | Burger    |    30 | fast food |
|       3 | Pasta     |    60 | fast food |
|       4 | Coffee    |    50 | drinks    |
+---------+-----------+-------+-----------+
```
