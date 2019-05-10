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

prompt([
{
        type: 'list',
        name: 'intro',
        message: 'Welcome to Bamazon! Please select ID of the product that you would like to buy',
        choices: [1,2,3,4,5,6,7,8,9,10]
},
{
    type: 'input',
    name: 'qty',
    message: 'How many items would you like to purchase?'
}
]).then(({ intro, qty }) => {
    console.log(intro)
    console.log(qty)
    db.end()
})
