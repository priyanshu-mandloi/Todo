const express =  require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);
router.post('/create-list',homeController.createList);
router.post("/delete-list",homeController.deleteList);

module.exports = router;