const  express = require("express");
const router = express.Router();
const  {createUser, getAllUsers, deleteUserByID} = require("../controller/users");

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').delete(deleteUserByID)