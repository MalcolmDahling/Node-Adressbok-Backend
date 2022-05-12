var express = require('express');
var router = express.Router();

const cors = require('cors');

router.use(cors());

let fs = require('fs');


router.post('/', function(req, res, next) {
  
    fs.readFile('addressbook.json', (err, data) => {

        if(err){
            console.log(err);
        }

        let addressbook = JSON.parse(data);

        addressbook.push(req.body);

        fs.writeFile("addressbook.json", JSON.stringify(addressbook, null, 4), (err) => {
            if(err){
                console.log(err);
            }
        });

    });
});


router.get('/', function(req, res){

    fs.readFile('addressbook.json', (err, data) => {

        if(err){
            console.log(err);
        }
        
        res.send(JSON.parse(data));
    });

});


module.exports = router;

