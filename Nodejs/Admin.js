const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 8000;


//MySql Connection
const connection = mysql.createConnection({
     host:'localhost',
     user :'root',
     password:'A1@qwer',
     database:'elearning',

});


connection.connect((err)=>{
    if(err){
        console.error('Error connecting to the database:',err);
        return;
    }
    console.log('Connected to the database as id'+connection.threadId);
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.post('/teacherprofile',(req,res)=>{
    const email = req.body.email;
    // const teachername = req.body.teachername;
    const mobileno = req.body.mobileno;
    const batch = req.body.batch;
    const languages = req.body.languages;
    const certification = req.body.certification;
    const location = req.body.location;
    console.log(email);
    console.log(mobileno);

    //  const sql = 'INSERT INTO teacherprofile(teacherid,email,teachername,mobileno,batch,languages,certification,location) VALUES (?,?,?,?,?,?,?,?)';
        const sql = 'update teacherprofile set mobileno = ?, batch = ?, languages = ?, certification = ?,location = ? where email = ?'
    connection.query(sql,[mobileno,batch,languages,certification,location,email],(error,result,fields)=>{
       if(error){
           console.error('Error inserting data into admin table:',error);
           return;
       }
       res.send({'status': true})
        console.log('teacher profile updated successfully');
    });
    
});



app.post('/selectlanguage',(req,res)=>{
    const languageid = req.body.languageid;
    const languagename = req.body.languagename;
    const sql = 'SELECT * FROM languageinsert ';
    connection.query(sql,[languageid,languagename],(error,result,fields)=>{
        if(error){
            console.error('Error inserting data into student table:',error);
            return;
        }
        // res.send(result);
        res.json(result);

         console.log('Student Details added successfully');
         
     });
});



app.post('/selecttlanguage',(req,res)=>{
    const languageId=req.body.languageId;
    const languages=req.body.languages;
    const imageURL=req.body.imageURL;
        const sql = 'SELECT * FROM testlanguage ';                                          //RegisteredTest language in practice DB
        connection.query(sql,[languageId,languages,imageURL],(error,result,fields)=>{
            if(error){
                console.error('Error inserting data ',error);
                return;
            }
            // res.send(result);
            res.json(result);
    
             console.log('language Details fetched successfully');
    });
    })


app.post('/selectteacherprofile',(req,res)=>{
   
    const {email} = req.body;
    console.log(email);

    const sql = 'SELECT * FROM teacherprofile where email=?';
    connection.query(sql,[email],(error,result,fields)=>{
        if(error){
            console.error('Error inserting data into teacher table:',error);
            return;
        }
        // res.send(result);
        res.json(result);

         console.log(result);
         
     });
});


app.post('/mylanguages',(req,res)=>{
    const languageimage = req.body.languageimage;
    const languagename = req.body.languagename;
    const teachername = req.body.teachername;
    const experience = req.body.experience;
    const languageid = req.body.languageid;
    const sql="SELECT * FROM mylanguages ";
    connection.query(sql,[languageimage , languagename , teachername , experience,languageid  ],(error,result,field)=>{
        if(error){
            console.error('Error inserting data into material : ',error);
            return;
        }
        res.json(result);
        console.log('Student reviews added succesfully');
    });
})


app.post('/presentlearning',(req,res)=>{
    const languagesimage = req.body.languagesimage;
    const languagesname = req.body.languagesname;
    const teachersname = req.body.teachersname;
    const studentenroll = req.body.studentenroll;
    const languageid = req.body.languageid;
    const sql="SELECT * FROM presentlearning ";
    connection.query(sql,[languagesimage , languagesname , teachersname , studentenroll,languageid  ],(error,result,field)=>{
        if(error){
            console.error('Error inserting data into material : ',error);
            return;
        }
        res.json(result);
        console.log('Student languages view succesfully');
    });
})

//admin login 
app.post('/adminn',(req,res)=>{
  const username_email= req.body.username_email;

  const password = req.body.password;
  connection.query("SELECT * FROM admin where username_email=?  and password=? " , [username_email , password] , (error , results, fields)=>{
      if(error){
          console.error('Eror',error);
          res.status(500).send('error occur during fetching');
          return;
      }
      if(results.length>0){
          res.send({'status':true});
      }
      else{
          res.send({'status':false});
      }
  });
  
});

app.post('/StudentDetails',(req,res)=>{

    const Name=req.body.Name;
    const Language_Opted=req.body.Language_Opted;
    const imageURL=req.body.imageURL;
    const sql='Insert INTO studentenrooll(Name,Language_Opted,imageURL) VALUES (?,?,?)';
     connection.query (sql,[Name,Language_Opted,imageURL],(error,results,fields) => {
        if(error){
            console.error('Error inserting data into StudentEnroll table:',error);
            return;
        }
        console.log('Student Enrolled successfully');
        res.send('Student Enrolled successfully');
    });
});  


app.post('/StudentDetailsDelete',(req,res)=>{

    const Name=req.body.Name;
    const Language_Opted=req.body.Language_Opted;
    const imageURL=req.body.imageURL;
    const sql='delete from Studentenrooll where Name= ?';
     connection.query (sql,[Name,Language_Opted,imageURL],(error,results,fields) => {
        if(error){
            console.error('Error deleting data into StudentEnroll table:',error);
            return;
        }
        console.log('Student Deleted successfully');
        res.send('Student deleted successfully');
});
});
    
app.get('/StudentDetailsView',(req,res)=>{
    const Name=req.body.Name;
    const Language_Opted=req.body.Language_Opted;
    const imageURL=req.body.imageURL;
const sql = 'SELECT * FROM studentenrooll';
connection.query(sql,[Name,Language_Opted,imageURL], (error, result, fields) => {
if (error) {
  console.error('Error fetching data from studentenroll table:', error);
  return;
}
res.json(result);
res.send('Fetched all teacher details successfully');
});
});  


app.get('/teachlang',(req,res)=>{
    
    // const sql='select * from caterdata';
    connection.query('select Name from testing1',(error,results,fields)=>{
        if (error){
            console.error('Error fetching data from emp table ',error);
            res.status(500).send('error fetching data from emp table')
            return;
        }
        res.json(results);
        // console.log(results);
    });
    });

    app.post('/updatestudentprofile',(req,res)=>{
        const studentid = req.body.studentid;
        const email = req.body.email;
       
       
        const update="update studentprofile set email=? where studentid=?";
        connection.query(update,[studentid,email,],(error,results,fields)=>{
        if(error){
            console.error('error inserting data into studentprofile table:' , error);
            return;
        }
        // res.send(results);
        // res.json(results)
        res.send('Data updated successfully')
        console.log("studentprofile updated");
    });
    });

  

app.post('/kalu3signup',(req,res)=>{
    const uname = req.body.uname;
    const email = req.body.email;
    const password = req.body.password;
    
    const sql='INSERT INTO studentlogin (uname,email, password) VALUES (?,?,?)';
    connection.query(sql,[uname,email , password ],(error,results,field)=>{
        if(error){
            console.error('Error inserting data into material : ',error);
            return;
        }
        res.send('signup details inserted');
        console.log('Student signup details added succesfully');
    });

    const sql1='INSERT INTO studentprofile (uname,email) VALUES (?,?)';
    connection.query(sql1,[uname,email ],(error,results,field)=>{
        if(error){
            console.error('Error inserting data into material : ',error);
            return;
        }
        res.send('signup details inserted');
        console.log('Student signup details added succesfully');
    });
});

app.post('/kalu3login',(req,res)=>{
   
    const email=req.body.email;
    const password = req.body.password;
    connection.query("SELECT * FROM studentlogin where email=? and password=? " , [email, password] , (error , results, fields)=>{
        if(error){
            console.error('Eror',error);
            res.status(500).send('error occur during fetching');
            return;
        }
        if(results.length>0){
            res.send({'status':true});
        }
        else{
            res.send({'status':false});
        }
    });


    
    
});


app.post('/studentprofileupdate',(req,res)=>{
    const uname= req.body.uname;
    const email=req.body.email;
    const studentid = req.body.studentid;
    connection.query("SELECT * FROM studentprofile where uname=? and email=? and studentid=?" , [uname ,email, studentid] , (error , results, fields)=>{
        if(error){
            console.error('Eror',error);
            res.status(500).send('error occur during fetching');
            return;
        }
        if(results.length>0){
            res.send({'status':true});
        }
        else{
            res.send({'status':false});
        }
    });
})





// Fetch student profile
app.post('/getStudentProfile/:id', (req, res) => {
    const studentId = req.params.id;
    db.query('SELECT * FROM studentProfile WHERE studentId = ?', [studentId], (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(result[0]);
      }
    });
  });
  

  
  // Update student profile
app.post('/updateStudentProfile/:id', (req, res) => {
    const studentId = req.params.id;
    const { email, name, mobileNo, class: studentClass } = req.body;
    db.query(
      'UPDATE studentProfile SET email = ?, name = ?, mobileNo = ?, class = ? WHERE studentId = ?',
      [email, name, mobileNo, studentClass, studentId],
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send({ message: 'Profile updated successfully' });
        }
      }
    );
  });
  




  app.post('/select',(req,res)=>{
    
    connection.query('select lang_name from languages',(error,results,fields)=>{
        if (error){
            console.error('Error fetching data from emp table ',error);
            res.status(500).send('error fetching data from emp table')
            return;
        }
        res.json(results);
        // console.log(results);
    });
    });


    app.post('/kalu3showsingle',(req,res)=>{
        // const languageimage = req.body.languageimage
        const languagename = req.query.languagename;
        // const LanguageId = req.query.LanguageId;
        // const Teacher = req.query.Teacher;present
        // const Experience = req.query.Experience;
        const sql="SELECT * FROM mylanguages where languagename='English' ";
        connection.query(sql,[languageimage,languagename ,teachername,experience,languageid ],(error,result,field)=>{
            if(error){
                console.error('Error inserting data into material : ',error);
                return;
            }
            res.json(result);
            console.log('Student reviews added succesfully');
        });
    });



    app.post('/teachersignup',(req,res)=>{
        const uname = req.body.uname;
        const email = req.body.email;
        const password = req.body.password;

        console.log(req.body.uname);
        console.log(req.body);
        
        const sql='INSERT INTO teacherlogin (uname,email, password) VALUES (?,?,?)';
        connection.query(sql,[uname,email , password ],(error,results,field)=>{
            if(error){
                console.error('Error inserting data into material : ',error);
                return;
            }
          
        });
    
        const sql1='INSERT INTO teacherprofile (uname,email,mobileno,batch,languages,certification,location) VALUES (?,?,?,?,?,?,?)';
        connection.query(sql1,[uname,email,'','','','','' ],(error,results,field)=>{
            if(error){
                console.error('Error inserting data into material : ',error);
                return;
            }
         
        });
        res.send({'status':true});
        console.log('Student signup details added succesfully');
    });
    
    app.post('/kalu4login',(req,res)=>{
       
        const email=req.body.email;
        const password = req.body.password;
        connection.query("SELECT * FROM teacherlogin where email=? and password=? " , [email, password] , (error , results, fields)=>{
            if(error){
                console.error('Eror',error);
                res.status(500).send('error occur during fetching');
                return;
            }
            if(results.length>0){
                res.send({'status':true});
            }
            else{
                res.send({'status':false});
            }
        });
    
    
        
        
    });




    app.get('/TeacherDetailsView',(req,res)=>{
        const Name=req.query.Name;
        const Language_Proficiency=req.query.Language_Proficiency;
        const imageURL=req.query.imageURL;
        const sql='SELECT * FROM  teacherenroll';
        connection.query(sql,[Name,Language_Proficiency,imageURL],(error,result,fields) => {
            if(error){
                console.error('Error fetching data from teacherEnroll table:',error);
                return;
            }
            res.json(result);
            console.log('Teacher details fetched successfully');
          });
    });
    //meeting link
    app.post('/linkfetch',(req,res)=>{
     const {name2,language2}=req.body;
      connection.query("SELECT meetinglink FROM appointments where uname=?" , [name2,language2] , (error , results, fields)=>{
          if(error){
              console.error('Eror',error);
              res.status(500).send('error occur during fetching');
              return;
          }
          console.log(results);
         res.json(results);
         console.log("fetched");
      });
      
  });



    // Request Appointment
    app.post('/request-appointment', (req, res) => {
      console.log(req.body);
    
      const { start, end, status, description,uname ,email,language} = req.body;
      if (!start || !end) {
        return res.status(400).json({ message: "Please ensure that you send a legal range of time" });
      }
    
      const newAppointment = {
        uname:uname,
        email:email,
        language:language,
        start: start,
        end: end,
        status: status || 'pending',
        description: description
      };
    
      
      const sql = 'INSERT INTO appointments (start, end, status, description,uname,email,language) VALUES (?, ?, ?, ?,?,?,?)';
      const values = [newAppointment.start, newAppointment.end, newAppointment.status, newAppointment.description,newAppointment.uname , newAppointment.email,newAppointment.language];
    
      connection.query(sql, values, (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal Server Error" });
        }
        res.status(200).json({ message: "Appointment Request Sent Successfully" });
      });
    });

  

    // app.post('/fetch-description', (req,res) => {
    //     connection.query('SELECT * FROM appointments', (err, results) => {
    //       if (err) {
    //         console.error(err);
    //         return res.status(500).json({message: "Internal Server Error"});
    //       }
    //       res.status(200).json({message:"Request Fetched Successfully", description: results});
    //     });
    // });
    
    // Fetch Appointments
    app.post('/fetch-appointments', (req, res) => {
        const {name2, email2}=req.body;
        const {meetinglink}='http,djhkjhdf';
        console.log(req.body);
        
      connection.query('SELECT * FROM appointments where uname=? and email=?',[name2,email2,meetinglink], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal Server Error" });

        }
        console.log(results);
        res.status(200).json({ message: "Requests Fetched Successfully", appointments: results });
      });
    });

    //fetch appointments for teacher
    app.post('/fetch-appointments-teacher', (req, res) => {
             
      connection.query('SELECT * FROM appointments', (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal Server Error" });

        }
        console.log(results);
        res.status(200).json({ message: "Requests Fetched Successfully", appointments: results });
      });
    });
    
    // Delete Appointment
    app.post('/delete-appointment', (req, res) => {
        console.log(req.body);
        const { id } = req.body;
        if (!id) {
          return res.status(400).json({ message: "Enter a Valid ID" });
        }
      
        connection.query('UPDATE appointments SET status = ? WHERE id = ?', ['rejected', id], (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
          }
          if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Appointment not found" });
          }
      
          connection.query('SELECT * FROM appointments WHERE id = ?', [id], (err, results) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ message: "Internal Server Error" });
            }
            res.status(200).json({ message: "Rejected ", updatedAppointment: results[0] });
          });
        });
      });
    
    // Accept Appointment
    app.post('/accept-appointment', (req, res) => {
      console.log(req.body);
      const { id } = req.body;
      if (!id) {
        return res.status(400).json({ message: "Please Enter a Valid Appointment" });
      }
    
      connection.query('UPDATE appointments SET status = ? WHERE id = ?', ['accepted', id], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal Server Error" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Appointment not found" });
        }
    
        connection.query('SELECT * FROM appointments WHERE id = ?', [id], (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
          }
          res.status(200).json({ message: "Appointment Accepted Successfully...", updatedAppointment: results[0] });
        });
      });
    });
 

     app.post('/valid',(req,res)=>{
        const id= req.body.id;
        const username=req.body.username;
        const password = req.body.password;
        connection.query("SELECT * FROM table1 where id=? and username=? and password=? " , [id,username, password] , (error , results, fields)=>{
            if(error){
                console.error('Eror',error);
                res.status(500).send('error occur during fetching');
                return;
            }
            if(results.length>0){
                res.send({'status':true});
            }
            else{
                res.send({'status':false});
            }
        });
    
    
        
        
    });


    //to send link
    app.post('/send-link', (req, res) => {
      const {link,emaill}=req.body;
      console.log(req.body);
      console.log(emaill);
      
      connection.query("Update appointments set meetinglink=? where status='accepted' and email=?",[link,emaill], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Internal Server Error" });

        }
        console.log(results);
        res.status(200).json({ message: "Link sent successfully", appointments: results });
      });
    });
    


    app.post('/selectvalid',(req,res)=>{
        const id = req.body.id;
        const username = req.body.username;
        const password = req.body.password
        const sql = 'SELECT * FROM table1 ';
        connection.query(sql,[id,username,password],(error,result,fields)=>{
            if(error){
                console.error('Error inserting data into student table:',error);
                return;
            }
            // res.send(result);
            res.json(result);
    
             console.log('Student Details added successfully');
             
         });
    });

    app.post('/presentlearn',(req,res)=>{
        const {email2,name2}=req.body;
        console.log(req.body);
        console.log(email2);
        console.log(name2);
        connection.query("SELECT * FROM appointments where email=? and uname=? and status='accepted'"
             , req.body , (error , results, fields)=>{
            if(error){
                console.error('Eror',error);
                res.status(500).send('error occur during fetching');
                return;
            }
            console.log(results);
           res.json(results);
           console.log("fetched");
        });
    });

    app.post('/imgfetch',(req,res)=>{
        const image= req.body.image;
        const chapter = req.body.chapter;
        connection.query("SELECT * FROM materialfetch" , [image , chapter] , (error , results, fields)=>{
            if(error){
                console.error('Eror',error);
                res.status(500).send('error occur during fetching');
                return;
            }
           res.json(results);
           console.log("fetched");
        });
    });
    
    //review
    app.post('/reviews', (req, res) => {
      const { userName,reviewText} = req.body;
      const sql = "INSERT INTO reviews1 (userName, reviewText) VALUES (?, ?)";
      connection.query(sql, [userName, reviewText], (err, result) => {
            if (err) {
                console.error("Error inserting review:", err);
                res.status(500).send("Error submitting review");
              } else {
            console.log("Review inserted successfully");
            res.status(200).send("Review submitted successfully");
              }
         });
  });
  
app.listen(port,()=>{
    console.log(`Server is running on locahost : ${port}`);
});