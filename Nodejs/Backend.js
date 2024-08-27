const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const connection  = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'school'
})

connection.connect((err)=>{
    if(err){
        console.error('Error is connecting',err);
        return;
    }
    console.log('Connected to the database as '+connection.threadId);
})





app.post('/mark',(req,res)=>{
   
    const rollno = req.body.rollno;
    const sql = 'SELECT * FROM mark  WHERE rollno=? ';
    connection.query(sql,[rollno],(error,results,fields)=>{
        if(error){
            console.error('Error inserting data into student table:',error);
            return;
        }
        // res.send(result);
        res.json(results);

         console.log('Student Marksheet  Details added successfully');
         
     });
    })
    app.post('/selectimage',(req,res)=>{
        const id = req.body.id;
        const category = req.body.category;
        const imageURL = req.body.imageURL;
        const sql = 'SELECT * FROM image ';
        connection.query(sql,[id,category,imageURL],(error,result,fields)=>{
            if(error){
                console.error('Error inserting data into student table:',error);
                return;
            }
            // res.send(result);
            res.json(result);
    
             console.log('Student Details added successfully');
             
         });
    });



app.listen(port,()=>{
    console.log(`Server is running on localhost :  ${port}`)
})
