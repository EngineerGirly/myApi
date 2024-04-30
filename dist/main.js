document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const studentName = document.querySelector('input').value
    try{
        const response = await fetch(`https://my-api-serverless.netlify.app/.netlify/functions/api/${studentName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthName
    }
    catch(error){
        console.log(error)
    }
}