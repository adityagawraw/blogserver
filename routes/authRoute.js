const  express = require("express");
const router = express.Router();
const  {createUser, getAllUsers, deleteUserByID, getOneUser} = require("../controller/users");

router.route('/').get(getOneUser).post(createUser);

router.route('/:id').delete(deleteUserByID);

module.exports = router;