import  { GoogleGenerativeAI } from "@google/generative-ai"


const genAI = new GoogleGenerativeAI("AIzaSyA0XTXBf71REfLenvwwdZY0A5ei8IKd5HM");



const model = genAI.getGenerativeModel({ model: "GPT"});

export default genAI

