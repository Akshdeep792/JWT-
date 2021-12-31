

const loggin = async (req,res) => {
    res.send('You are logged in....!');
}


const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(201).json({msg : `Hello Akshdeep Singh`, secret : `Your Lucky number is ${luckyNumber}`})
}

module.exports = {
    loggin,
    dashboard
}