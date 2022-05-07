var pg = require('pg');
var conString = "postgres://zjfheujb:zfGcU3cxrp-x5qS9hT7AgsFkToAvUPcs@ruby.db.elephantsql.com/zjfheujb"
const client = new pg.Client(conString);
const form = document.getElementById('form')
const ordernum = 6066699;
const username = 'username123';
const gallonr= document.getElementById("gallon");
const addr = document.getElementById("place");
const ddate = document.getElementById("ddate");
const price = document.getElementById("price");



async function main(){
    await client.connect()
    form.addEventListener('submit', (e) => {
        try{
            await client.query(`
            INSERT INTO fuel_quote_history(order_id, user_id, gallons_requested, delivery_address, delivery_date, price)
            VALUES (`+ordernum+`,'`+username+`',`+gallonr+`, '`+addr+`', '`+ddate+`', `+price+`);
            `)
        }
        catch(err){
            console.log(err)
        }
    })
    client.end()
}

main();