// CONNECT TO THE DATABASE IN JAVASCRIPT:
var pg = require('pg');
var conString = "postgres://zjfheujb:zfGcU3cxrp-x5qS9hT7AgsFkToAvUPcs@ruby.db.elephantsql.com/zjfheujb";
var client = new pg.Client(conString);

// QUERIES TO THE DATABASE USING JAVASCRIPT:
async function queries(){
    await client.query(`
        CREATE TABLE user_credentials(
            user_id varchar(20) NOT NULL PRIMARY KEY,
            password_hash varchar(100) NOT NULL
        );
    `);
    await client.query(`
        CREATE TABLE client_information(
            user_id varchar(20) NOT NULL PRIMARY KEY,
            full_name varchar(50) NOT NULL,
            address_1 varchar(100) NOT NULL,
            address_2 varchar(100),
            city varchar(100) NOT NULL,
            state varchar(2) NOT NULL
        );
    `);
    await client.query(`
        CREATE TABLE fuel_quote_history(
            order_id int NOT NULL PRIMARY KEY,
            user_id varchar(20) NOT NULL PRIMARY KEY,
            gallons_requested int NOT NULL,
            delivery_address varchar(100) NOT NULL,
            delivery_date date NOT NULL,
            price int NOT NULL
        );
    `);
    await client.query(`
        INSERT INTO user_credentials (user_id, password_hash)
        VALUES ('username123', '482c811da5d5b4bc6d497ffa98491e38');
    `);
    await client.query(`
        INSERT INTO client_information (user_id, full_name, address_1, address_2, city, state)
        VALUES ('username123', 'John Smith', '27 California St. Houston, TX', '28 California St. Houston, TX', 'Houston', 'TX');
    `);
    await client.query(`
        INSERT INTO fuel_quote_history(user_id, gallons_requested, delivery_address, delivery_date, price)
        VALUES ('username123', 5500, '27 California St. Houston, TX', '12/25/2021', 37524);
    `);
}

// CONNECTING AND RUNNING QUERIES:
async function main(){
    await client.connect(function(err){
        if(err){
            return console.error('Could not connect to postgres', err);
        }
        await queries()
    })
    client.end()
}

main();