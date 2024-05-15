CREATE TABLE products (
    id INT PRIMARY KEY,
    code VARCHAR(50),
    name VARCHAR(100),
    description TEXT,
    image VARCHAR(100),
    price DECIMAL(10, 2),
    category VARCHAR(50),
    quantity INT,
    inventoryStatus ENUM('INSTOCK','LOWSTOCK' ,'OUTOFSTOCK'),
    rating INT
);