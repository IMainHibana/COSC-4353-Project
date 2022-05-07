let table = document.querySelector('table');
var pg = require('pg');
var conString = "postgres://zjfheujb:zfGcU3cxrp-x5qS9hT7AgsFkToAvUPcs@ruby.db.elephantsql.com/zjfheujb"
const client = new pg.Client(conString);
const username = 'username123'; // username

async function tester(){
    try{
        let res = await client.query(`SELECT * from fuel_quote_history where user_id = '`+username+`'
        ;`)
        return res;
    }
    catch(err){
        console.log(err)
    }
}

async function main(){
    await client.connect()
    let res = await tester()
    console.log(res.rows[0].order_id)
    console.log(res.rows.length)
    console.log(res.rows)
    
   
    for(var x = 0; x< res.rows.length; x++)
    {
       let orderid = res.rows[x].order_id;
       let gallon = res.rows[x].gallons_requested;
       let addr = res.rows[x].delivery_address;
       let ddate = res.rows[x].delivery_date;
       let price = res.rows[x].price;
        
       console.log(orderid);
       console.log(gallon);
       console.log(addr);
       console.log(ddate);
       console.log(price);
       
     
       let template = `
                    <tr>
                        <td>${orderid}</td>
                        <td>${gallon}</td>
                        <td>${addr}</td>
                        <td>${ddate}</td>
                        <td>${price}</td>
                    </tr>`;

       table.innerHTML += template;
    
    }
    client.end()
    
}

main();