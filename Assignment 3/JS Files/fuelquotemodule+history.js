let myTable = document.querySelector('#table');
let orders = [
    { Order_Number: 1001, Gallons_Requested: 21, Order_Date: '11/30/2021', Price: 99.0 , Status: 'Pending', Delivered_Date: '1/30/2022 '},
    { Order_Number: 1002, Gallons_Requested: 31, Order_Date: '11/30/2021', Price: 100.0 , Status: 'Completed', Delivered_Date: '1/30/2022'},
    { Order_Number: 1003, Gallons_Requested: 58, Order_Date: '11/30/2021' , Price: 150.0, Status: 'Pending', Delivered_Date: '2/28/2022 '},
    { Order_Number: 1004, Gallons_Requested: 20, Order_Date: '11/30/2021', Price: 98.0 , Status: 'Completed', Delivered_Date: '2/28/2022'}
]
var currentorderNum = 1004;

function updatelist()
{

var currentdate = '3/13/2022';
var ordergallon = document.getElementById("gallon");
var orderprice = document.getElementById("price");
var ddate = document.getElementById("ddate");
currentorderNum++;
let variable = {
    Order_Number: currentorderNum,
    Gallons_Requested: document.getElementById("gallon"),
    Order_Date: '3/13/2022',
    Price: "$99.0",
    Status: 'Pending',
    Delivery_Date: document.getElementById("ddate"),

  };
orders.push(variable);
}


function fuelhistory()
{
    let headers = ['Order Number', 'Gallons Requested', 'Order Date', 'Price', 'Status', 'Delivered Date'];


    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    orders.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })
        table.appendChild(row);
    });
    myTable.appendChild(table);
}
