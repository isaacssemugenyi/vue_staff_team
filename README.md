 * app.use('/public/uploads', express.static(path.join(__dirname, 'public/uploads')));
 * This should work for serving the images back from public/uploads
 * For some reason the error-handling on line 57 in staff routes is skipped
 * Routes
 * GET: '/' Show cards of staff members
 * GET'/' List of staff members (should hit the same route of cards, here make a table with a view button to show individual member '/staff')
 * GET: '/register' Save the registration form (use vue to create and server this page with form)
 * POST: '/register' Save staff member data from form
 * GET: '/:id' Server single staff
