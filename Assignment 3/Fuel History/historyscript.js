
let myTable = document.querySelector('#table');
let employees = [
    { Order_Number: 1001, Gallons_Requested: 21, Order_Date: '11/30/2021', Price: 99.0 , Status: 'Pending', Delivered_Date: ' '},
    { Order_Number: 1002, Gallons_Requested: 31, Order_Date: '11/30/2021', Price: 100.0 , Status: 'Completed', Delivered_Date: '1/30/2022'},
    { Order_Number: 1003, Gallons_Requested: 58, Order_Date: '11/30/2021' , Price: 150.0, Status: 'Pending', Delivered_Date: ' '},
    { Order_Number: 1004, Gallons_Requested: 20, Order_Date: '11/30/2021', Price: 98.0 , Status: 'Completed', Delivered_Date: '2/28/2022'}
]
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
    employees.forEach(emp => {
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
