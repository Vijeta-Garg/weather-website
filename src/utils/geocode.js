const request = require('request')

const geocode= (adress, callback)=> {
    const url= 'http://api.mapbox/com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=VIJETA'
   
    request({url, json:true}, (error, {body})=> {
        if(error){[
           callback('Unable to connect to location service!', undefined)
   
        ]}else if (body.features.length===0){
           callback('Recheck your searching variables.', undefined)
        } else{
           callback(undefined, {
               latitude: body.features[0],
               longitude: body.features[1],
               location: body.features[0].place_name
           })
        }
    })
   }
   
  
   module.exports= geocode
   
   