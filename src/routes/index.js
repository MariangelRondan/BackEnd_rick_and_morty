const getCharById = require("../controller/getCharById");
const login = require("../controller/login");
const postFav = require("../controller/postFav");
const deleteFav = require("../controller/deleteFav");
const express = require("express");
const postUser = require("../controller/postUser");
const getAllFavorites = require("../controller/getAllFavorites");

const router = express.Router();

router.get("/character/:id", getCharById);

router.get("/login", login);

// router.post("/login", postUser);

router.post("/fav", postFav);

router.get("/fav/:user", getAllFavorites);

router.delete("/fav/:id", deleteFav);
router.post("/register", postUser);

module.exports = router;
