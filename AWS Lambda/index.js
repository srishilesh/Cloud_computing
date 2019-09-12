var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "database-2.c4etcoiqjcuq.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "databaseaws",
  database: "donor"
});


exports.handler = (event, context, callback) => {
   var number1 = event.number1;
   var number2 = event.number2;
   var sum = number1 + number2;
   var product = number1 * number2;
   var difference = Math.abs(number1 - number2);
   var quotient = number1 / number2;
   connection.connect(function(err) {
    console.log('Connected to database.');
    var sql1 =
      "INSERT INTO shipping.arithmetic (number1,number2,sum,product,difference,quotient) VALUES ('" +
      number1 +
      "','" +
      number2 +
      "','" +
      sum+
      "','" +
      product+
      "','" +
      difference+
      "','" +
      quotient+
      "');";
    connection.query(sql1, function(err, result) {
      console.log(sql1);
      if (err) throw err;
      console.log("1 record inserted");
    });
    });

   callback(null, {
       "Number1": number1,
       "Number2": number2,
       "Sum": sum,
       "Product": product,
       "Difference": difference,
       "Quotient": quotient
   });
};