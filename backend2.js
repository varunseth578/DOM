const express = require("express");
const app = express();
app.get("/sum",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum =a+b;
    res.send(sum.toString());

});

app.get("/interest",(req,res) => {
    const principal =parseInt(req.query.principal);
    const rate=parseInt(req.query.rate);
    const time =parseInt(req.query.time);
    const interest = (principal*rate*time)/100;
    const total = principal + interest;
    res.send({
        total:total,
        interest:interest,
    })


});

app.listen(3000)
