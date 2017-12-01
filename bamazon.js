var mysql = require ("mysql");
var inquirer = require ("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,

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
      name:"purchaseItem"
    }

      ])

    .then(function(input){

    var query = connection.query (

        "INSERT INTO products SET ?",

        {
        name:input.purchaseItem,
        },
      
        function(err){

          if (!err){

            console.log ("You have successfully purchased your " + input.purchaseItem);

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

    inquirer
    .prompt([

    {
      type: "input",
      message:"What is the item you'd to submit?",
      name:"userItem"
    },

    {
      type: "input",
      message:"What catogory would you like to place your action in?",
      name:"userType"
    }])

    .then(function(){

     type:"list"
     message:"What item would you like to "


    })
      }

    

  
