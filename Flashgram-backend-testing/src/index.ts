import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

async function pdfloader(){
  const nike10kPdfPath = "";
  const loader = new PDFLoader("./src/pdf/MAITproject.pdf")
  const docs = await loader.load()
  console.log("docs: ",docs)


}
pdfloader()
