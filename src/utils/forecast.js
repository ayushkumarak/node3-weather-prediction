const request=require('request')  //npm library
const forecast=(latitude,longtitude,callback)=>{
const url='https://api.darksky.net/forecast/9c3846ee12fa2b6a02ab3c1c348ca0b6/' + latitude + ',' + longtitude
request({url:url,json:true},(error,{body})=>{  //destructuring and object shorthand
if(error){
callback('network error',undefined)
}else if(body.error){
callback('invalid',undefined)
}else{
callback(undefined,body.daily.data[0].summary +' it is currentlyy' + body.currently.temperature + 'degrees out.there is a ' +
                   body.currently.precipProbability + '% chance of rain')
}
})
}
module.exports=forecast