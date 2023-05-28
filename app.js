const path = require('path');
const Expense = require('./models/expenseDeatils');
const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const expenseRoutes = require('./routes/expense');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(expenseRoutes);

sequelize.sync().then(result=>{
    // console.log(result);
    app.listen(4000);
    
}).catch(err=>{
    console.log(err);
})

