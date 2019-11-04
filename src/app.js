//modules
const path=require('path')
const express =require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app=express()
const port=process.env.PORT||3000

//define paths for express config
const publicdirectory=path.join(__dirname,'../public')
const viewpath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')

//setup handelbars engine and view location
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

app.use(express.static(publicdirectory))

app.get('',(req,res)=>{
res.render('index',{
title:'WEATHER PREDICTION',
name:'kumar'
})
})

app.get('/about',(req,res)=>{
res.render('about',{
title:'ABOUT PAGE',
name:'kumar'
})
})

app.get('/help',(req,res)=>{
res.render('help',{
title:'FOR MORE INFO',
name:'ayush'
})
})

app.get('/all',(req,res)=>{
res.render('all',{
title:'allll',
name:'prits'
})
})

app.get('/login',(req,res)=>{
res.render('login',{
title:'FOR MORE INFO',
name:'ayush'
})
})


app.get('/weather',(req,res)=>{
if(!req.query.address){
return res.send({
error:'provide the address'
})
}

geocode(req.query.address,(error,{latitude,longtitude,location}={})=>{ //default obj,destructuring
if(error){
    return res.send({error})
}
forecast(latitude,longtitude,(error,forecastData)=>{
if(error){
    return res.send({error})
}
res.send({
    forecast:forecastData,
    location,
    address:req.query.address
})
})
})
})

app.get('/products',(req,res)=>{
if(!req.query.key){
return res.send({
error:'please provide the correct address'
})
}

console.log(req.query.key)
res.send({
products:[]
})
})

app.get('/help/*',(req,res)=>{
res.render('4O4',{
title:'page not found',
name:'ayush',
errorMessage:'404'
})
})

app.get('*',(req,res)=>{
res.render('4O4',{
title:'go back',
name:'ayush',
errorMessage:'page not found'
})
})

app.listen(port,()=>{
console.log('port number 3000')
})