// save(bookmark), share, like
// TASK -> comp harkirat videos, and discover more backend structures 




import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import express from "express"
import multer from "multer";
import { Request,Response } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
const upload = multer({ dest: "./src/pdf" });
const app = express()
app.use(express.json())


app.post("/upload", upload.single('file'), async (req,res) => {
  try{
    console.log("above parsed pdf")
    const rawanswer= await llmAnswer(req.file?.path) // is a json
    console.log("Below parsed pdf")
    console.log("flashcards: ",rawanswer)
    // Example usage:
    const apiResponse = rawanswer; // The raw Gemini API response
    const formattedFlashcards = JSON.parse(apiResponse)
    console.log("formattedFlashcard",formattedFlashcards)
    if(formattedFlashcards){
      res.status(200).json({
        rawanswer:rawanswer,
        formattedFlashcards:formattedFlashcards
      })
    }else{
      res.status(405).json({
        msg:"No file uploaded/api failed"
      })
    }
  }catch(e){
    res.status(500).json({
      error:e
    })
  }

});
async function pdfloader(pdf:any){
  const pdftoparse = pdf
  const loader = new PDFLoader(pdftoparse)
  const docs = await loader.load()
  console.log("docs: ",docs[0])
  return docs[0].pageContent
}

async function llmAnswer(pdf:any){
  const genAI = new GoogleGenerativeAI("AIzaSyBxwi9eyjBKvqsasZAnCRgLSjpVCDtCFe4"); //api key given here
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",systemInstruction: "You are a flashcard generator, I will give you a bunch of text, then you have to make flashcards out of it with question answer pairs, the flashcard may include a hint for answer and also return the whole data in a json, where it is like this -> flashcards:[{Question:{},Answer:{}},.....] and don't use any unecessary keywords like /n and ```json, bcz it will hinder the json.parse()" }); // system instructions
  const prompt = await pdfloader(pdf);
  const result = await model.generateContent(prompt);
  return result.response.text();
}


// Clean the gemini answer into a proper structure like flashcards:[{Question:"", Answer:""},{Question:"", Answer:""},...]
// function parseGeminiResponse(response: string): { flashcards: { question: string; answer: string }[] } {
//   const flashcards: { question: string; answer: string }[] = [];
//   console.log("Raw response:", response);
//   // Regex to match question-answer pairs
//   // const regex = /\*\*Question:\*\*\s*(.*?)\s*\*+\s*\*\*Answer:\*\*\s*(.*?)(?=\n\n|\*+\s*\*\*Question|\z)/gs;

//   // let match;
//   // while ((match = regex.exec(response)) !== null) {
//   //   const question = match[1].trim();
//   //   const answer = match[2].trim();
//   //   flashcards.push({ question, answer });
//   // }
//   console.log("flashcard inside the function: ",flashcards)
//   return { flashcards };
// }
// console.log(JSON.stringify(formattedFlashcards, null, 2));

app.listen(3000)
