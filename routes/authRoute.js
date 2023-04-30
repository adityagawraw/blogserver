const  express = require("express");
const router = express.Router();
const  {createUser, getAllUsers, deleteUserByID, getOneUser} = require("../controller/users");

router.route('/').post(createUser);
router.route('/login').post(getOneUser)
router.route('/:id').delete(deleteUserByID);

module.exports = router;