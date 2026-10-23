import app from './app.js';

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Mentor Connect server running on port ${PORT}`);
});

export default server;
