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
