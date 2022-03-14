// FOR WHEN THE DATABASE WILL BE IMPLEMENTED
    /* 
        var pg = require('pg');
        var conString = "credentials go here"
        var client = new pg.Client(conString);
    */

const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const user = document.getElementById('user')
const pass = document.getElementById('user_pass')
login_errors = [];

form.addEventListener('submit', (e) => {
    // client.connect()
    valid_user(user)
    valid_pass(pass)
    if (login_errors.length > 0){
        e.preventDefault();
        errorElement.innerText = login_errors.join(', ')
        login_errors = [];
    }
    else{
        e.preventDefault()
        localStorage.setItem("username", user.value)
        localStorage.setItem("password", pass.value)
        window.location.href="home.html"
    }
    // client.end()
})

function valid_user(user){
    // TEMPORARY VALIDATION SINCE THERE IS NO DB
    if (user.value == ''){ login_errors.push("Username is required") }
    else{
        if (user.value != 'user123'){ login_errors.push("This account does not exist") }
    }
    // HOW THIS WOULD WORK WITH A DATABASE:
        /*
            let user_query = await client.query(`SELECT *
                                                FROM user_credentials_table
                                                WHERE username = ${user.value}`)
            if (user_query.rowCount == 0){ login_errors.push("This account does not exist") }
        */
}

function valid_pass(pass){
    // TEMPORARY VALIDATION SINCE THERE IS NO DB
    if (pass.value == ''){ login_errors.push("Password is required") }
    else{
        if (pass.value != 'pass123'){ login_errors.push("Incorrect password") }
    }
    // HOW THIS WOULD WORK WITH A DATABASE:
        /*
            let pass_query = await client.query(`SELECT password
                                                FROM user_credentials_table
                                                WHERE username = ${user.value}`)
            if (pass_query.rows[0] != pass.value){ login_errors.push("Incorrect password") }
        */
}
