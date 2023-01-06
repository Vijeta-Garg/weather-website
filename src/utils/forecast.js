const request = require('request')

const forecast= (longitude, latitude, callback)=>{
     
    const url = 'http://api.weatherstack.com/current?access_key=095e8d833c0e587e4e573153db17e426&query='+ latitude + "," + longitude + '&units=f'

    request({url, json: true}, (error, {body})=> {
        if (error) {
                   callback('unable to connect to weather service : ( ', undefined)
                } else if (body.error){ 
                    callback('unable to find location : P ', undefined)
                }
                else 
                {callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + reponse.body.current.temperature +' degrees out. It feels like ' + response.body.current.feelsLike + ' degrees out.')} 
            
    })
}

module.exports= forecast