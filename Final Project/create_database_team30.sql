CREATE TABLE user_credentials(
            user_id varchar(20) NOT NULL PRIMARY KEY,
            password_hash varchar(100) NOT NULL
        );
CREATE TABLE client_information(
            user_id varchar(20) NOT NULL PRIMARY KEY,
            full_name varchar(50) NOT NULL,
            address_1 varchar(100) NOT NULL,
            address_2 varchar(100),
            city varchar(100) NOT NULL,
            state varchar(2) NOT NULL
        );
CREATE TABLE fuel_quote_history(
            order_id int NOT NULL PRIMARY KEY,
            user_id varchar(20) NOT NULL,
            gallons_requested int NOT NULL,
            delivery_address varchar(100) NOT NULL,
            delivery_date date NOT NULL,
            price int NOT NULL
        );
INSERT INTO user_credentials (user_id, password_hash)
        VALUES ('username123', '482c811da5d5b4bc6d497ffa98491e38');
INSERT INTO client_information (user_id, full_name, address_1, address_2, city, state)
        VALUES ('username123', 'John Smith', '27 California St. Houston, TX', '28 California St. Houston, TX', 'Houston', 'TX');
INSERT INTO fuel_quote_history(user_id, gallons_requested, delivery_address, delivery_date, price)
        VALUES (1234, 'username123', 5500, '27 California St. Houston, TX', '12/25/2021', 37524);
