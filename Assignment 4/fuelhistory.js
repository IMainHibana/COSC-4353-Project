var pg = require('pg');
var conString = "postgres://zjfheujb:zfGcU3cxrp-x5qS9hT7AgsFkToAvUPcs@ruby.db.elephantsql.com/zjfheujb"
var client = new pg.Client(conString);

async function main(){
    await client.connect();
    let db_user = await client.query(`SELECT * FROM fuel_quote_history`);
    var table = '';
    //console.log(db_user.rows[0].order_id);
    console.log(db_user.rows);
    for(var i=0; i<db_user.rows.length; i++){  
        table +='<tr><td>'+ db_user.rows[i].order_id +'</td><td>'+ db_user.rows[i].user_id +'</td><td>'+db_user.rows[i].gallons_requested +'</td><td>'+db_user.rows[i].delivery_address +'</td><td>'+db_user.rows[i].delivery_date +'</td><td>'+db_user.rows[i].price +'</td></tr>';
         }
         
           
     table ='<table border="1"><tr><th>  Order id  </th><th>  User id  </th><th>  Gallons requested </th><th>  Delivery Address  </th><th>  Delivery Date  </th><th>Price</th>'+ table +'</table>';
      
    client.end();
}

main();