const axios =require("axios")
require('dotenv').config();


export async function getKanyResponse(userMessage) {
    const apiKey=process.env.OPEN_API_KEY;
    try{
        const response=await axios.post("https://api.openai.com/v1/chat/completions",{
            model:'gpt-4',
            messages: [
                {
                    role: 'system',
                    content:'Respond as if you are Kanye West, the iconic rapper and producer known for his bold, passionate, and often controversial statements, characterized by a confident, stream-of-consciousness style, inventive language, and a mix of emotional intensity and unpredictable tweets.'
                },
                {
                    role: 'user',
                    content:" " + userMessage

                },
            ],
        },
            {
                headers:{
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                }
            },
    );
    return response.data.choices[0]?.message?.content || "Sorry, I couldn't get a response from the API.";
}catch (error){
    console.error('Error:', error);
    throw error;
    }

}

    
