

const { use } = require('express/lib/application');
const async = require('hbs/lib/async');
const userModel = require('./model');
exports.login = async (username) => {
    const user = await userModel.findOne
        ({ username: username }, 'id email password');
    return user;
};

exports.register = async (username, password) => {
    const user = new userModel({username, password});
    return await user.save();
}

var data = [
    { id: 1, username: "admin@gmail.com", password: "123", name: "Dat" },
];