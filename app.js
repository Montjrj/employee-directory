import express from 'express'
import employees from '#db/employees';

const app = express(); 

app.route("/").get((req,res) => {
    res.send("Hello Employees!")
})

app.route("/employees").get((req,res) => {
    return res.send(employees); 
})

app.route("/employees/:id").get((req,res) => {
    let {id} = req.params; 
    id = Number(id)
    let index = employees[id]
    if(!index){
        return res.status(404).send("There are no employees with that id"); 
    }
    res.send(index);

app.route("/employees/random").get((req,res) => {
    
})

})

export default app; 
