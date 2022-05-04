var pg = require('pg');
var conString = "postgres://zjfheujb:zfGcU3cxrp-x5qS9hT7AgsFkToAvUPcs@ruby.db.elephantsql.com/zjfheujb"
var client = new pg.Client(conString);

const md5 = require('blueimp-md5');

const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const user = document.getElementById('user')
const pass = document.getElementById('user_pass')
login_errors = [];

async function main(){
    await client.connect();
    form.addEventListener('submit', (e) => {
        if (user.value == ''){login_errors.push('User required.')}
        else{
            let db_user = await client.query(`
                SELECT * FROM user_credentials
                WHERE user_id = ${user.value};
            `);
            if (db_user.rowCount == 0){login_errors.push('Acc doesn\'t exist')}
        }
        if (pass.value == ''){login_errors.push('Pass req')}
        else{
            let db_pass = await client.query(`
                SELECT password_hash FROM user_credentials
                WHERE user_id = ${user.value};
            `);
            if(md5(pass.value) != db_pass.rows[0].password_hash){login_errors.push('Wrong password')}
        }
        if (login_errors.length > 0){
            e.preventDefault();
            errorElement.innerText = login_errors.join(', ');
            login_errors = [];
        }
        else{
            localStorage.setItem("username", user.value)
            localStorage.setItem("password", pass.value)
        }
    })
    client.end();
}

main();
