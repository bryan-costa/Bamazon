const { createConnection } = require('mysql2')
const { prompt } = require('inquirer')

const db = createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'BCosta@1026',
    database: "bamazon"
})

// db.connect(e => {
//     if (e) throw e
//     console.log(`IT'S WORKING!!!`)
// })

let opening = _ => {
    db.query('SELECT * FROM products')
    return
}

opening()
prompt([
{
        type: 'list',
        name: 'item_id',
        message: 'Welcome to Bamazon! Please select ID of the product that you would like to buy',
        choices: [1,2,3,4,5,6,7,8,9,10]
},
{
    type: 'input',
    name: 'qty',
    message: 'How many items would you like to purchase?'
}
]).then(({ item_id, qty }) => {
    db.query(`SELECT * FROM products WHERE ?`, {item_id}, (e, data) => {
        if (e) throw e
        console.log(data.stock_quantity)
        // if (data.stock_quantity <= 0) {
        // // let {item_id: ID, product_name: Product, price: Price, stock_quantity: Inventory} = data
        // console.log(data)
        // // {ID, Product, Price, Inventory}
        // db.end()
        // }else{
        //     console.log("Insufficient inventory")
        //     db.end()
        // }
    })
}) 
