# Cek Nilai

**Cek Nilai** adalah sebuah project hobby yang dibuat untuk memudahkan siswa melihat nilai mereka berdasarkan NIS. Aplikasi ini dibangun dengan menggunakan **SvelteKit** untuk frontend dan **Supabase** sebagai backend serta penyedia database.

## Fitur

- **Pencarian Nilai Berdasarkan NIS:** Siswa dapat dengan mudah memasukkan NIS untuk mendapatkan informasi nilai.
- **Realtime Update:** Data nilai di-update secara real-time melalui Supabase.
- **Antarmuka Responsif:** Dibangun dengan SvelteKit untuk pengalaman pengguna yang cepat dan responsif.

## Teknologi yang Digunakan

- [SvelteKit](https://kit.svelte.dev/) – Framework modern untuk membangun aplikasi web.
- [Supabase](https://supabase.com/) – Platform backend dengan fitur database, autentikasi, dan API.
- [Bun](https://bun.sh/) – Runtime JavaScript yang cepat dan modern.

## Cara Memulai

### Prasyarat

- Bun (pastikan Bun sudah terinstal)

### Instalasi

1. **Clone Repository**

   ```bash
   git clone https://github.com/raybrilliant/cek-nilai.git
   ```

2. **Masuk ke Direktori Project**

   ```bash
   cd cek-nilai
   ```

3. **Instal Dependencies**

   Gunakan Bun untuk menginstal dependencies:
   ```bash
   bun install
   ```

4. **Konfigurasi Supabase**

   Buat file `.env` berdasarkan contoh di file `.env.example` dan masukkan kredensial Supabase Anda.
   ```bash
   PUBLIC_SUPABASE_URL = url supabase kamu 
   PUBLIC_SUPABASE_KEY = api key supabase kamu
   ```

5. **Jalankan Server Development**

   Jalankan development server dengan Bun:
   ```bash
   bun dev
   ```

6. **Buka Browser**

   Buka [http://localhost:5173](http://localhost:5173) untuk melihat aplikasi.

## Lisensi

Project ini bersifat open-source dan tersedia di bawah [MIT License](LICENSE).
