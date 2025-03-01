from google_play_scraper import reviews, Sort
import pandas as pd

#Scraping Disney+ Hotstar di Play Store
app_id = "in.startv.hotstar.dplus" #Gunakan ID aplikasi Dinsey+ Hotstar di Google Play Store

#399 review terbaru dari Google Play Store
print("Mengambil 399 review dari Google Play Store")
google_reviews, _ = reviews(
    app_id,
    lang="id", #Bahasa Indonesia
    country="id", #Indonesia
    count=399, #Jumlah review yang diambil
    sort=Sort.NEWEST #Urutkan berdasarkan yang terbaru
)

#Konversi DataFrame dengan format yang benar
play_store_df = pd.DataFrame(google_reviews)[['content', 'score', 'at']]
play_store_df_columns = ['review', 'rating', 'date']

#Simpan ke CSV
play_store_df.to_csv('play_store_disney_hotstar.csv', index=False)
print("Scraping selesai! Data berhasil disimpan sebagai play_store_disney_hotstar.csv")

#Tampilkan 5 baris pertama
play_store_df.head()

import nltk
import string
import re
from deep_translator import GoogleTranslator
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('punkt_tab')

df = pd.read_csv('play_store_disney_hotstar.csv')

translator = GoogleTranslator(source='auto', target='en')
lemmatizer = WordNetLemmatizer()
stop_words = set(stopwords.words('english'))

def clean_text(text):
    if pd.isna(text):
        return ""
    
    text = text.lower()

    text = re.sub(r'\d+', '', text)
    text = text.translate(str.maketrans('', '', string.punctuation))

    words = word_tokenize(text)

    words = [lemmatizer.lemmatize(word) for word in words if word not in stop_words]

    return " ".join(words)

def translate_and_clean(text):
    try:
        translated_text = translator.translate(text)
        return clean_text(translated_text)
    except:
        return clean_text(text)
    
df['translated_review'] = df['content'].astype(str).apply(translate_and_clean)

df.to_csv('cleaned_disney_hotstar_reviews.csv', index=False)

print("Preprocessing selesai! Data tersimpan sebagai 'cleaned_disney_hotstar_reviews.csv")