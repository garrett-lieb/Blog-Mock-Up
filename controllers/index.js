const router = require('express').Router();
const htmlroutes = require('./htmlroutes');
const apiroutes = require('./api');
router.use('/', htmlroutes);
router.use('/api', apiroutes);






router.use((req, res) => {
  res.send('<h1>Hello World</h1>');
});



module.exports = router;