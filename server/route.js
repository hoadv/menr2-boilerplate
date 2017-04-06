module.exports = function (app, path) {
  // frontend routes =========================================================
  // route to handle all angular requests
  // Always return the main index.html, so react-router render the route in the client
    app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });
};