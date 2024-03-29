const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./src/routes/taskRoutes');
const connection = require('./src/db/connection') 

const app = express();

// connection
connection()


// Middleware
app.use(express.static('src/public'));
app.set('view engine', 'ejs');
app.set('views','./src/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use('/tasks', taskRoutes);

app.get("/",(req,res)=>{
    res.send("hello")
})
// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));