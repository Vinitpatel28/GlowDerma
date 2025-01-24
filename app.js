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

const doctors_data = {
    title: 'Our Expert Doctors',
    content: 'Our clinic is proud to have a team of highly experienced doctors specializing in dermatology and skincare treatments. Our doctors are experts in a wide range of treatments aimed at achieving the healthiest skin for our patients.'
  }

app.get('/doctors', (req, res) => {
    res.render('doctors', {layout:false, data:doctors_data});
  });

  app.get('/services', (req, res) => {
    const category = req.query.category || 'General Services';
    res.render('services', {
      layout: false,
      category
    });
  });

  app.post('/book-appointment', (req, res) => {
    const appointment = req.body;
    res.render('appointment', {
      layout:false,
      appointment: appointment
    }
  );
  });

  app.get('/offerings', (req, res) => {
    const offerings = [
      { name: 'Anti-Aging Treatment', price: 5000, duration: '60 mins', description: 'Advanced treatment to reduce fine lines and wrinkles', available: true },
      { name: 'Acne Treatment', price: 3000, duration: '45 mins', description: 'Specialized treatment for acne-prone skin', available: true },
      { name: 'Chemical Peel', price: 4000, duration: '30 mins', description: 'Skin resurfacing treatment for even tone', available: false }
    ];
    
    res.render('offerings', { 
      offerings ,
      layout:false}
    );
  });
  const testimonials = [
    { name: 'John Doe', rating: 5, comment: 'Excellent service!', date: '2024-01-20' },
    { name: 'Jane Smith', rating: 4, comment: 'Very professional staff', date: '2024-01-18' }
  ];
  
  app.get('/testimonials', (req, res) => {
    res.render('testimonials', { 
      testimonials ,
      layout:false}
    );
  });
  
  
// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
