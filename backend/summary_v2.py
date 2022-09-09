from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import sentencepiece

def summarize2(text):

    tokenizer = AutoTokenizer.from_pretrained("csebuetnlp/mT5_multilingual_XLSum")

    model = AutoModelForSeq2SeqLM.from_pretrained("csebuetnlp/mT5_multilingual_XLSum")

    tokens_input = tokenizer.encode("summarize: "+text, return_tensors='pt', max_length=512, truncation=True)
    summary_ids = model.generate(tokens_input, min_length=80, max_length=120)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    print(summary)