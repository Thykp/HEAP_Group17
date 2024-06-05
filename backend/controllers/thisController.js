const thisRoot = (req, res) => {
    res.send("This is the root!")
};

const thisHello = (req, res) => {
    res.send("This is Hello!");
};

const thisByeBye = (req, res) => {
    res.send("This is Bye Bye!");
};

module.exports = {
    thisHello, 
    thisByeBye, 
    thisRoot
}