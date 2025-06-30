import { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/contact", form)
      .then(res => {
        setStatus("Pesan berhasil dikirim!");
        setForm({ nama: "", email: "", pesan: "" });
      })
      .catch(err => {
        setStatus("Gagal mengirim pesan.");
        console.error(err);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Hubungi Saya</h2>
      {status && <div className="alert alert-info">{status}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            type="text"
            className="form-control"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Pesan</label>
          <textarea
            className="form-control"
            rows="4"
            name="pesan"
            value={form.pesan}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Kirim</button>
      </form>
    </div>
  );
}

export default Contact;
