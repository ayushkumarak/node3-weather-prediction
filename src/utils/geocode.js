const request=require('request')

const geocode=(address,callback)=>{
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1IjoiYXl1c2g5ODczMSIsImEiOiJjanNydjk2M3YxOWt2NDlvMGc4ajZmcjBzIn0.ufq6X3ZqCbkf-oVjz8vt5A'
request({url,json:true},(error,{body})=>{ //destructuring and object shorthand property
if(error){
callback('network error',undefined)
}else if(body.features.length===0){
callback('invalid',undefined)
}else{
callback(undefined,{
latitude:body.features[0].center[1],
longtitude:body.features[0].center[0],
location:body.features[0].place_name
})
}
})
}
module.exports=geocode