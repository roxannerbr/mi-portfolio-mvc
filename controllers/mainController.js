module.exports = {
    home : (req,res) => {
        return res.render('home')
    },
    about : (req,res) => {
        return res.render('about')
    }
}