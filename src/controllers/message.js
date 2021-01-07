getMessage = async (req, res) => {
    const {message} = req.body;

    console.log('aca')
    console.log('message', message)
    global.io.emit('message', message);
    res.status(200).send({message: 'ok'});
}

module.exports = {
    getMessage
}
