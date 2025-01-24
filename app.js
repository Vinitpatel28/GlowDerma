const express = require('express');
const { engine } = require('express-handlebars');  // Updated import
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up Handlebars view engine for version 6.x or higher
app.engine('handlebars',engine())
app.set('view engine', 'handlebars');

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Static files (like CSS, images) if needed
app.use(express.static('public'));

// Define routes (refer to the routes you implemented)
require('./routes')(app);

app.get('/doctors', (req, res) => {
    res.render('doctors', {
      title: 'Our Expert Doctors',
      content: 'Our clinic is proud to have a team of highly experienced doctors specializing in dermatology and skincare treatments. Our doctors are experts in a wide range of treatments aimed at achieving the healthiest skin for our patients.'
    },{layout:false});
  });

  app.get('/test',(req,res)=>{
    res.render('services',{layout:false});
  });
app.get('/services', (req, res) => {
    const category = req.query.category || 'General Services';
    res.render('services', {
      category: category
    });
  });
  
// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
