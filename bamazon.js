var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon.js"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId + "\n");
  
});

inquirer
.prompt ([

{
type: "list",
message: "What product would you like to buy?",
choices: ["shoes", "assessories", "clothing"],
name: "action"

}

])

.then(function (data){
if(data.action === "shoes"){
  
    inquirer
    .prompt([

    {
      type: "input",
      message:"How many shoes would you like to purchase?",
      name:"shoeItem"
    }

      ])

    .then(function(list){

    var query = connection.query (

        "INSERT INTO products SET ?",

        {
        name:input.shoeItem,
        },
      
        function(err){

          if (!err){

            console.log ("You have successfully purchased your " + list.shoeItem);

          }

        })
        
        })
        }
        
    .then(function (data){
    if(data.action === "assessories"){
    
      inquirer
      .prompt([

      {
        type: "input",
        message:"How many assessories would you like to purchase?",
        name:"assessItem"
      }

        ])

      .then(function(list){

      var query = connection.query (

          "INSERT INTO products SET ?",

          {
          name:list.assessItem,
          },
        
          function(err){

            if (!err){

              console.log ("You have successfully purchased your " + list.assessItem);

            }

          })
          
          })
          }
        .then(function (data){
        if(data.action === "clothing"){
    
      inquirer
      .prompt([

      {
        type: "input",
        message:"How many clothing would you like to purchase?",
        name:"clothItem"
      }

        ])

      .then(function(list){

      var query = connection.query (

          "INSERT INTO products SET ?",

          {
          name:list.clothItem,
          },
        
          function(err){

            if (!err){

              console.log ("You have successfully purchased your " + list.clothItem);

            }

          })
          
          })
          }   
  else{

      function readItems(){

        connection.query("SELECT * FROM products", function(err, res){

          if(err) throw err;
          for (var i = 0; i < res.length; i++){

            console.log(res[i].name);

          }


        });

      }
      readItems();
    }

    }); 

   
    

  
