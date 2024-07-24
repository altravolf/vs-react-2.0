const bcrypt = require("bcrypt");

const Student = require("../models/student-model");

const registerPost = async (req, res) => {
    try {
        let { username, phoneNo, password } = req.body;

        let hashedPassword = await bcrypt.hash(password, 10);
        let newStudent = new Student({
            username,
            phoneNo,
            password: hashedPassword
        });
        await newStudent.save();

        res.status(200).send({ msg: "Registered Successfully" });
        console.log(newStudent);


    } catch (err) {
        res.status(400).send({ msg: err });
    }
}

module.exports = { registerPost }