const express=require('express');
const connection=require('../connection');
const router=express.Router();
var auth=require('../services/authentication');

var checkRole=require('../services/checkrole');

//to add the new department
router.post('/add',auth.authenticateToken,checkRole.checkRole,(req,res,next)=>
{
    const dept=req.body;
    var query="insert into department (dep_name)values(?)";
    connection.query(query,[dept.dep_name],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"department is added succesfully"});

        }else{
            return res.status(500).json(err);
        }
    })
})

router.get('/get',auth.authenticateToken,(req,res,next)=>
{
    var query="select * from department order by dep_name";
    connection.query(query,(err,results)=>{
    if(!err)
    {
        return res.status(200).json(results);
    }else{
        return res.status(500).json(err);
    }
    })
    
})

router.patch('/update',auth.authenticateToken,checkRole.checkRole,(req,res,next)=>
{
    let dept=req.body;
    var query="update department set name=? where id=?";
    connection.query(query,[dept.dep_name,dept.id],(err,results)=>
    {
        if(!err)
        {
            if(results.affected==0)
            {
                return res.status(404).json({message:"NO DEPARTMENT EXIST WITH THIS ID "});
            }else{
                return req.status(200).json({message:"updated successfully"});
            }

        }else{
            return res.status(500).json(err);
        }
    })
})

module.exports=router;