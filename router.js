const express = require("express");
const router = express.Router();


//Hard coded users list
let credential = [
  {
    username: "abiasebastian",
    password: "password",
    name: "Abi A Sebastian",
    batch: "BCR59",
  },
  {
    username: "vvprasad",
    password: "password",
    name: "Vishnu Prasad V V",
    batch: "BCR59",
  },
];


router.get("/", (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    //Render profile if a session is set
    res.status(200).render("profile", { user: req.session.user,title:'Profile' })
  } else {
    //Render login page if no session is set
    res.render("index");
  }
});



//Log out
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

//User Authentication
router.post("/login", (req, res,next) => {
  function findUsername(userObject) {
   return req.body.username === userObject.username; 
  }
  //Returns user object if username provided matches a user object in the array
   //Returns undefined if no element is found
  const isAUser = credential.find(findUsername);
   

  if (isAUser) {
    //Check password if a matching username is found
    if (req.body.password === isAUser.password) {
      req.session.user={
        name:isAUser.name,
        batch:isAUser.batch,
        username:isAUser.username
      }
      res.redirect('/')
    } else {
      res.send("Wrong Password");
    }
  }
  else {
    res.send("Invalid username")
  } 
});




module.exports = router;
