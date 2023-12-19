const { v4: uuidv4 } = require('uuid');

let users = [];

// Read Users
const getUsers = (req,res) => {
 res.send(users)
}
// --------------------------------------------

const getUser = (req,res) => {
const { id } = req.params;
const user = users.find((user) => user.id === id)
res.send(user)
}

// --------------------------------------------
// Create user
const createUser = (req,res) => {
users.push({...req.body,id:uuidv4()})
res.send(users);
}
// -------------------------------------------
// delete user
const deleteUser = (req,res) => {
const { id } = req.params;
users = users.filter((user) => user.id !==id)
res.status(202).send(users);
}
// -------------------------------------------
// update user
const updateUser = (req,res) => {

const { id } = req.params;
const {username,email,password} = req.body
const user = users.find((item) => item.id === id);
if (username) user.username = username
if (email) user.email = email
if (password) user.password = password

res.send(users);

}




module.exports = {getUsers, getUser,createUser,deleteUser,updateUser}
