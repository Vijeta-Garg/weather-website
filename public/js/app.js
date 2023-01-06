console.log('Client side js is loaded') 



const weatherForm= document.querySelector('form')
const search = document.querySelector('input')
const messageOne= document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault() 

    const location = search.value
///how does this show up only when you submit?? 
    messageOne.textContent='loading...'
    messageTwo.textContent='' 

    fetch('**url'+location+'url').then((response)=>{
    response.json().then((data)=> {
        if (error){
            messageOne.textContent=data.error
        } else{
            messageOne.textContent=data.location
            messageOne.messageTwo=data.forecast
        }
    }) 
})
})

///then---> promises 