const router = require('express').Router();

const htmlRouter = require('./html');
const apiRouter = require('./api');

router.use('/html', htmlRouter);
router.use('/api', apiRouter);

module.exports = router;
