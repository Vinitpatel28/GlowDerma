module.exports = function(app) {
    // Doctors Page
    app.get('/doctors', (req, res) => {
      res.render('doctors', {
        title: 'Our Expert Doctors',
        content: 'Our clinic is proud to have a team of highly experienced doctors specializing in dermatology and skincare treatments.'
      });
    });
  
    // Services Page
    app.get('/services', (req, res) => {
      const category = req.query.category || 'General Services';
      res.render('services', { category });
    });
  
    // Appointments Page (POST request handling)
    app.post('/book-appointment', (req, res) => {
      const appointment = req.body;
      res.render('appointment', { appointment });
    });
  
    // Offerings Page
    app.get('/offerings', (req, res) => {
      const offerings = [
        { name: 'Anti-Aging Treatment', price: 5000, duration: '60 mins', description: 'Advanced treatment to reduce fine lines and wrinkles', available: true },
        { name: 'Acne Treatment', price: 3000, duration: '45 mins', description: 'Specialized treatment for acne-prone skin', available: true },
        { name: 'Chemical Peel', price: 4000, duration: '30 mins', description: 'Skin resurfacing treatment for even tone', available: false }
      ];
      res.render('offerings', { offerings });
    });
  
    // Testimonials Page
    app.get('/testimonials', (req, res) => {
      const testimonials = [
        { name: 'John Doe', rating: 5, comment: 'Excellent service!', date: '2024-01-20' },
        { name: 'Jane Smith', rating: 4, comment: 'Very professional staff', date: '2024-01-18' }
      ];
      res.render('testimonials', { testimonials });
    });
  };
  