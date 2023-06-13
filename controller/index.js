const index = (req,res) => {
    res.render("index");
};

const login = (req,res) => {
    res.render("login");
};

module.exports = {login,index};