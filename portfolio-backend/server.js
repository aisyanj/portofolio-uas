const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

// Simpan data dummy
const portfolio = [
  { id: 1, title: "Aplikasi Kasir", description: "POS berbasis web" },
  { id: 2, title: "Toko Sepatu", description: "CRUD produk sepatu" },
];

const messages = [];

// GET /api/portfolio
app.get('/api/portfolio', (req, res) => {
  res.json(portfolio);
});

// POST /api/contact
app.post('/api/contact', (req, res) => {
  const { nama, email, pesan } = req.body;
  if (!nama || !email || !pesan) {
    return res.status(400).json({ error: "Semua field wajib diisi." });
  }
  messages.push({ nama, email, pesan });
  res.status(201).json({ message: "Pesan berhasil dikirim." });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
