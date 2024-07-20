const registerPost = async (req, res) => {
    try {
        res.status(200).send("I am resgistering. Coming from router and i am post request.")
    } catch (err) {
        res.status(400).send({ msg: err });
    }
}

module.exports = { registerPost }