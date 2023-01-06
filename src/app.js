const path = require('path') 
const express = require('express') //how were we using hbs before requiring it? Isn't it a NPM???? 
const hbs = require('hbs')
const geocode= require('./utils/geocode')
const forecast= require('./utils/forecast') 


const app = express()

//define paths for express config 
const pubdir = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set up hbs engine and views location 
app.set('view engine', 'hbs') 
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//set up static dir to serv 
app.use(express.static(pubdir))


app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Vijeta Garg' 
    }) 
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Me ',
        name: 'Vijeta Garg' 
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Need Help?',
        name: 'Vijeta Garg'
    })
})


app.get('/weather', (req, res)=>{
    // if (!req.query.adress){
    //     return res.send({
    //         error: 'You must provide search term'
    //     })
    // }
    // geocode(req.query.adress, (error, {latitude, longitude, location}={})=>{
    //     if(error){
    //         return res.send({error})
    //     }})

    //     forecast(latitude, longitude, (forecastData)=> {
    //         if (error){
    //             res.send({error}) 
    //         }

    //     })
   
    res.send({
        location: req.query.adress, 
        forecast: forecastData, 
        adress: req.query.adress 
                })
})

app.get('/help/*', (req, res)=>{
    res.render('404page', {
        title:'404', 
        error: 'Help article not found.'
    })
})

app.get('*', (req,res)=>{
    res.render('404page', {
        title: '404', 
        error: 'Page not found.'
    })
})

app.listen(3000, ()=> {
    console.log('server is up on port 3000')
})


///can also use https module for this...w3 schools 

//how do {{}} render objects make hbs DyNAmIc????