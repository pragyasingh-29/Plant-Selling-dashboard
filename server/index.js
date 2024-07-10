//Our dependencies

const express = require("express")
const app = express();


const mysql = require("mysql")
const cors = require("cors")

app.use(express.json())
app.use(cors())


//Let us run the server

let port = 8080;

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})

//let us create our database (mysql)

const db = mysql.createConnection({
    
    user:'root',
    host:'localhost',
    password:'',
    database:'plantdb',

})

//let us now create a route to the server that will register a user

app.post('/register',(req, res)=>{

     //we need to get the variables sent from the form

     const sentEmail = req.body.Email;
     const sentUserName = req.body.UserName;
     const sentPassword = req.body.Password;

     //lets create sql statement to insert the user to the database table users

     const SQL = 'INSERT INTO users (email, username, password) VALUES(?,?,?)'
     // we are going to enter these values through a variable

     const Values = [sentEmail, sentUserName, sentPassword]

     //query to execute the stated ststements above
     db.query(SQL, Values, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log("user inserted successfully");
          
        }
     })

})

//lets create another route

app.post('/login', (req, res)=>{
       //we need to get the variables sent from the form

    
     const sentloginUserName = req.body.LoginUserName;
     const sentLoginPassword = req.body.LoginPassword;

     //lets create sql statement to insert the user to the database table users

     const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'
     // we are going to enter these values through a variable

     const Values = [sentloginUserName, sentLoginPassword]

     //query to execute the stated ststements above
      
     db.query(SQL, Values, (err, results)=>{

        if(err){
            // res.send({error: err});
            console.log(err);
        }
        if(results){

              res.send(results);
              
        }
        else{
            res.send({message: 'Credentials Dont match!'});
            // setLoginStatus(`Credentials Dosen't Exist!`);
        }
})
})

