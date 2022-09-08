from fastapi import FastAPI, Form, File, UploadFile
from summary import summary
from fastapi.middleware.cors import CORSMiddleware
import os
from io import BytesIO

app = FastAPI()


origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/text_to_summarize")
async def summarize_text(text: str=Form() ) -> str:
    print(text)
    summarize_text = summary('french', str(text))
    return str(summarize_text)

@app.post("/file_to_summarize")
async def summarize_text(file: UploadFile) -> str:
    if file.filename.endswith('.txt') :
        text = file.file.read().decode("utf-8", "strict") 
        summarize_text = summary('french', str(text))
        return str(summarize_text)
    elif file.filename.endswith('.odt') :
        text = BytesIO(file.file.read()).read()
        text = text.decode("utf-8")
        print(100*'-')
        print(text)
        summarize_text = summary('french', str(text))
        return str(summarize_text)