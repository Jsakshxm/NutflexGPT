import  { GoogleGenerativeAI } from "@google/generative-ai"


const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API);



const model = genAI.getGenerativeModel({ model: "GPT"});

export default genAI

