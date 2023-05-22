"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let param = req.query.q;
    let Pets = pet_1.Pet.getFromName(param);
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)(''),
        Pets,
        param
    });
};
exports.search = search;
