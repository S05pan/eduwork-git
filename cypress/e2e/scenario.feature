 Feature: Mencari Data

    As a valid user
    I want to search a valid data

    Skenario 1: Mencari data dengan kata kunci yang valid
        Given saya berada di halaman utama website
        When saya memasukkan kata kunci "bank" ke dalam kolom pencarian And saya mengklik tombol "Search"
        Then saya harus melihat daftar hasil pencarian yang relevan And hasil pencarian harus mencakup informasi tentang "bank"

    Skenario 2: Mencari data dengan kata kunci yang tidak valid
        Given saya berada di halaman utama website
        When saya memasukkan kata kunci "xyz123" ke dalam kolom pencarian And saya mengklik tombol "Search"
        Then saya harus melihat pesan yang menyatakan "No results found" And tidak ada hasil yang ditampilkan

    Skenario 3: Mencari tanpa memasukkan kata kunci
        Given saya berada di halaman utama website
        When saya meninggalkan kolom pencarian kosong And saya mengklik tombol "Search"
        Then saya harus melihat pesan yang menyatakan "Please enter a search term" And tidak ada hasil yang ditampilkan

    Skenario 4: Mencari data dengan kata kunci yang panjang
        Given saya berada di halaman utama website
        When saya memasukkan kata kunci "credit card fraud prevention tips" ke dalam kolom pencarian And saya mengklik tombol "Search"
        Then saya harus melihat daftar hasil pencarian yang relevan And hasil pencarian harus mencakup informasi yang berkaitan dengan "credit card fraud prevention"Skenario 2: Mencari data dengan kata kunci yang tidak valid
