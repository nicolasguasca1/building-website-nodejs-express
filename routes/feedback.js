const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { feedbackService } = params;

<<<<<<< Updated upstream
  router.get('/', (request, response) => {
=======
  router.get('/', async (request, response) => {
>>>>>>> Stashed changes
    const feedback = await feedbackService.getList();
    return response.json(feedback);
  });

  router.post('/', (request, response) => {
<<<<<<< Updated upstream
    return response.send(`Feedback form posted`);
=======
    return response.send('Feedback form posted');
>>>>>>> Stashed changes
  });

  return router;
};
