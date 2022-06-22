const express = require('express');
const User = require('../model/user');

const getListUser = async(req, res) => {
    const user = await User.find();
    return res.json({user: user});
}

module.exports = {
    getListUser,
};