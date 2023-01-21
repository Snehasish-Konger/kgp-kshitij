const express= require ("express");
const mongoose = require ("mongoose");
const router =express.Router();

mongoose.connect('mongodb://localhost/addevent', { userNewUrlparser:true});

const evntSchema =new mongoose.Schema({
    name : String,
    place: String,
    prize: String,
    description: String,
    maxTeamMember: Number
});

const Event =mongoose.model('Event', eventSchema);

router.post('/addevent', (req,res)=>{
    const event =new Event(req.body);
    event.save((err)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(event);
        }
    });
});

router.get('/addevent', (req,res)=>{
    Event.find({},(err,events)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(events);
        }
    });
});

router.get('/addevent/:id', (req,res)=>{
    Event.findById(req.params.id,(err,event)=>{
        if(err){
            res.status(500).send(err);
        }
        else if(event){
            res.status(200).send(event);
        }
        else{
            res.status(404).send();
        }
    });
});
module.exports =router;