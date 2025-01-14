//random shit


import express from "express"
import multer from "multer";
import { pdfloader,llmAnswer } from "./middlewares";
const upload = multer({ dest: "./src/pdf" });
const app = express()
app.use(express.json())

let parsedpdf: string | null = null
app.post("/upload", upload.single('file'), async (req,res) => {
  try{
     parsedpdf = await pdfloader(req.file?.path)
     console.log("parsed pdf: ",parsedpdf)
    if(parsedpdf){
      res.status(200).json({
        msg:"file parsing done",
        parsedpdf:parsedpdf
      })
    }else{
      res.status(405).json({
        msg:"Parsing failed"
      })
    }
  }catch(e){
    res.status(500).json({
      error:e,
      msg:"No file uploaded"
    })
  }

});


app.get("/urFlashcards",async(req,res)=>{
  try{
    const rawanswer= await llmAnswer(parsedpdf) // is a json
    // Example usage:
    // const apiResponse = rawanswer; // The raw Gemini API response
    const formattedFlashcards = JSON.parse(rawanswer)
    console.log("formattedFlashcard",formattedFlashcards)
    if(formattedFlashcards){
      res.status(200).json({
        rawanswer:rawanswer,
        formattedFlashcards:formattedFlashcards
      })
    }else{
      res.status(405).json({
        msg:"Could not generated flashcards, parsing failed"
      })
    }
  }catch(e){
    res.status(500).json({
      error:e,
      msg:"No flashcard available"
    })
  }
})

app.listen(3000)
