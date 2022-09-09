# Run Text Summarization App

* First copy `https://github.com/Bessouat40/Text_summarization.git` 
* Then `docker-compose build && docker-compose up -d`

# Stop Text Summarization App

* `docker-compose down`

# App functionnalities

With this app, you can :

* Copy/paste text in the input section and summarize it with the `Summarize` button
* Upload `.txt` file and summarize it with the `Summarize file` Button
* Download text summary as `.docx` file

# Summarization algorithm

Summurization algorithm is based on the `nltk library` for version 1.
Version 2 will use a transformers summary algorithm (based on Hugging face researches : `https://huggingface.co/`).