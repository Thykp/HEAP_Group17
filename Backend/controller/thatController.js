const thatRoot = (req, res) => {
    res.send("That is the root!")
};

const thatHello = (req, res) => {
    res.send("That is Hello!");
};

const thatByeBye = (req, res) => {
    res.send("That is Bye Bye!");
};

module.exports = {
    thatHello, 
    thatByeBye, 
    thatRoot
}
