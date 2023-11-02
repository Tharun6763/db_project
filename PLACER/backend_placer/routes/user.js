const express=require('express');
const connection=require('../connection');

const router=express.Router();
const jwt=require('jsonwebtoken');
// const nodemailer=require('nodemailer');
const mail=require('../sendMail');
require('dotenv').config();

var auth=require('../services/authentication');

var checkRole=require('../services/checkrole');

router.post('/signup',(req,res)=>{
    let user=req.body;
    query="select email,password,role,status from user where email=?"
    connection.query(query,[user.email],(err,results)=>{
        if(!err){
            if(results.length<=0)
            {
                query="insert into user(name,contactNumber,email,password,status,role)values(?,?,?,?,'false','user')"
                connection.query(query,[user.name,user.contactNumber,user.email,user.password],(err,results)=>{
                if(!err)
                {
                    return res.status(200).json({message:"succsfully registerd"});
                }else{
                    return res.status(500).json(err);
                }
            })
            }
            else{
                return res.status(200).json({message:"email already exists"});
            }
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.post('/login',(req,res)=>{
    let user=req.body;
    query="select email,password,status,role from user where email=?"
    connection.query(query,[user.email],(err,results)=>
    {
    if(!err)
    {
        if(results.length<=0 || results[0].password!=user.password)
        {
            return res.status(401).json({message:"worng email or password"})
        }
        else if(results[0].status=='false'){
            return res.status(401).json({message:"wait for the admin permission"})
        }
        else if(results[0].password==user.password)
        {
            //need to create a token if the password matches
            const response={email:results[0].email,role:results[0].role}
            const accessToken=jwt.sign(response,process.env.ACCESS_TOKEN,{expiresIn:'8h'})
            res.status(200).json({token:accessToken,role:results[0].role});
        }else{
            return res.status(500).json({message:"somthing went wrong retry agian later"})
        }
    }else{
        return res.status(500).json(err);
    }

    })
    
})

router.post('/forgotPassword',(req,res)=>{
    const user=req.body;
    query="select email,password from user where email=?";
    connection.query(query,[user.email],(err,results)=>
    {
        if(!err)
        {
            if(results.length<=0)
            {
                return res.status(200).json({message:"mail sent "})
            }else{
                mail(user.email,{gas_type:results[0].email,payment_method:results[0].password}).then(()=>
                {
                    console.log(user.email,"mail sent ");
                })
                .catch(err => {
                    console.log(err)
                })
            }

        }else{
            return res.status(500).json(err);
        }
    })

})
//if u use check role and the authentication then the admin can only get the data
//to get the all the users.wont return admin. used by faculty or administrator
router.get('/get',auth.authenticateToken,checkRole.checkRole,(req,res)=>
{
  var query="select id,name,email,password,status,role from user where role='user'";
  connection.query(query,(err,results)=>{
    if(!err)
    {
        return res.status(200).json(results);
    }else{
        return res.status(500).json(err);
    }
  })
})

//to update the user status by administrator
router.get('/hello',(req,res)=>
{
    res.send("<h1>home page</h1>")
})
router.patch('/update',auth.authenticateToken,checkRole.checkRole,(req,res)=>
{
    let user=req.body;//to which u want to change enter it in req
    var query="update user set status=? where id=?";
    connection.query(query,[user.status,user.id],(err,results)=>
    {
        if(!err)
        {
            if(results.affectedRows==0)
            {
                return res.status(404).json({message:"user id does not exist"});
            }
            return res.status(200).json({message:"updated sucessfully"});
        }else{
            return res.status(500).json(err);
        }
    })
})

router.get('/checkToken',auth.authenticateToken,checkRole.checkRole,(req,res)=>
{
    return res.status(200).json({message:"true"});
}
)

router.post('/changePassword',auth.authenticateToken,(req,res)=>{
const user=req.body;
const email=res.locals.email;
console.log(email);
var query="select *from user where email=? and password=?";
connection.query(query,[email,user.oldPassword],(err,results)=>{
    if(!err){
        if(results.length<=0)
        {
            return res.status(400).json({message:"pasword does not match"});
        }
        else if(user.oldPassword==results[0].password)
        {
            var query="update user set password=? where email=?";
            connection.query(query,[user.newPassword,email],(err,results)=>
            {
                if(!err)
                {
                    return res.status(200).json({message:"password updated successfully"});
                }else{
                    return res.status(500).json(err);
                }
            })
        }else{
            return res.status(400).json({message:"somthing went worng check later"});
        }
    }else{
        return res.status(500).json(err);
    }
})
})


module.exports=router;