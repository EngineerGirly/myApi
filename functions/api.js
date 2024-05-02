const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors')
const app = express();
const router = express.Router();  

const records = {
    'smith': {
        'age': 29,
        'birthName': 'smithy the man',
        'birthLocation': 'London, England'
    },

    'lily': {
        'age': 28,
        'birthName': 'lily the man',
        'birthLocation': 'Chicago, Illinois'
    },

    'sam': {
        'age': 29,
        'birthName': 'sam the man',
        'birthLocation': 'Dylan'
    },

}

//Get all students
router.get('/', (req,res) => {
    res.send('Server is running..');
});

//Create new record 
router.post('/add', (req,res) => {
    res.send('New record added.')
});

//Delete existing record
router.delete('/', (req,res) => {
    res.send('Deleted existing record');
});

//Updating existing record
router.put('/', (req,res) => {
    res.send('Updating existing record');
});

//Showing demo records
router.get('/demo', (req,res) => {
    res.json(records);
});

router.get('/:studentName', (request, response) => {
    const studentName = request.params.studentName.toLowerCase()
    if (records[studentName]) {
        response.json(records[studentName])
    }
    else {
        response.json(records['sam'])
    }
})

app.use('/.netlify/functions/api', router);
app.use(cors);
module.exports.handler = serverless(app);