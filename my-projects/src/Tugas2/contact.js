 import React, {Component} from "react"



 class contact extends Component{
  render(){
        return(
        	<div>
  <header>
    <title>contact</title>
  </header>
  <div style={{ padding: 10, border: "1px solid #ccc" }}>
    <h1 style={{ textAlign: "center" }}>Hubungi Kami</h1>
    <strong>Kantor :</strong>
    di jalan belum jadi
    <br />
    <strong>Nomor Telepon :</strong>
    08XX-XXXX-XXXX
    <br />
    <strong>Email :</strong>
    email@contoh.com
    <h1 style={{ textAlign: "center" }}>Kirimkan Pesan</h1>
    <div>
      <div style={{ display: "block", marginBottom: "1em" }}>
        <div
          style={{
            display: "inline-block",
            width: 150,
            fontWeight: "bold",
            fontSize: 16
          }}
        >
          Nama
        </div>
        <input style={{ display: "inline-block" }} type="text" name="name" />
      </div>
      <div style={{ display: "block", marginBottom: "1em" }}>
        <div
          style={{
            display: "inline-block",
            width: 150,
            fontWeight: "bold",
            fontSize: 16
          }}
        >
          Email
        </div>
        <input style={{ display: "inline-block" }} type="text" name="name" />
      </div>
      <div style={{ display: "block", marginBottom: "1em" }}>
        <div
          style={{
            display: "inline-block",
            width: 150,
            fontWeight: "bold",
            fontSize: 16
          }}
        >
          Jenis Kelamin
        </div>
        <div style={{ display: "inline-block" }}>
          <input type="radio" id="male" name="gender" defaultValue="male" />
          <label htmlFor="male">Laki-laki</label>
          <br />
          <input type="radio" id="female" name="gender" defaultValue="female" />
          <label htmlFor="female">Perempuan</label>
          <br />
        </div>
      </div>
      <div style={{ display: "block", marginBottom: "1em" }}>
        <div
          style={{
            display: "inline-block",
            width: 150,
            fontWeight: "bold",
            fontSize: 16
          }}
        >
          Pesan Anda
        </div>
        <textarea cols={50} rows={5} defaultValue={""} />
      </div>
      <button>
        <a href="contact.js" style={{ textDecoration: "none", color: "black" }}>
          Kirim
        </a>
      </button>
    </div>
  </div>
  <br />
  <br />
  <a href="contact.js">
    <button>kembali ke contact</button>
  </a>
</div>



        	);
    }
}

export default contact