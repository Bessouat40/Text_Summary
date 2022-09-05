from fastapi import FastAPI, Form
from summary import summary
from fastapi.middleware.cors import CORSMiddleware
import os
#os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

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
    summarize_text = summary('french', text)
    while len(summarize_text) > len(text) / 4 :
        summarize_text = summary('french', summarize_text)
    return str(summarize_text)