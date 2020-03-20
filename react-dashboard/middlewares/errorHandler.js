const handleError = (err, _req, res, _next) => {
  const message = err.message || 'There was an unexpected error';
  const status = err.status || err.code || 500;
  console.error(`ERROR :: Message: ${message} :: Code: ${status}${err.stack ? ` :: Stack: ${err.stack}` : ''}`);
  res.status(status).json({
    message,
    status,
    stack: err.stack, 
  });
}

module.exports = handleError;