
var pg = require('pg');
var conString = "postgres://zjfheujb:zfGcU3cxrp-x5qS9hT7AgsFkToAvUPcs@ruby.db.elephantsql.com/zjfheujb"
var client = new pg.Client(conString);
const ordergallon = document.getElementById("gallon");
const orderprice = document.getElementById("price");
const ddate = document.getElementById("ddate");
const place = document.getElementById("place");
var currentorderNum = 1005;


async function main(){
    await client.connect();
    form.addEventListener('submit', (e) => {
    
    let db_user = await client.query(`
            INSERT INTO fuel_quote_history(order_id, user_id, gallons_requested, delivery_address, delivery_date, price)
            VALUES ('${currentorderNum.value}', '${localStorage.username},'${ordergallon.value}','${place.value}','${ddate.value}','${orderprice.value}');
            `);
            currentorderNum++;
          
        })
    client.end();

    }

main();
