const express = require('express');

const router = express.Router();

<<<<<<< Updated upstream
module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (request, response) => {
    const speakers = await speakersService.getList();
=======
module.exports = () => {
  const { speakersService } = params;

  router.get('/', async (request, response) => {
    const speakers = speakersService.getList();
>>>>>>> Stashed changes
    return response.json(speakers);
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
