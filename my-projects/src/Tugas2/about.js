 import React, {Component} from "react"



 class about extends Component{
  render(){
        return(

        	<div>
  <header>
    <title>about</title>
  </header>
  <div style={{ padding: 10, border: "1px solid #ccc" }}>
    <h1 style={{ textAlign: "center" }}>
      Data Peserta Sanbercode Bootcamp Reactjs
    </h1>
    <ol>
      <li>
        <strong style={{ width: 100 }}>Nama:</strong> Dito Abdusalam Rafi
      </li>
      <li>
        <strong style={{ width: 100 }}>Email:</strong> dabdusalamrafi@gmail.com
      </li>
      <li>
        <strong style={{ width: 100 }}>Sistem Operasi yang digunakan:</strong>{" "}
        Windows
      </li>
      <li>
        <strong style={{ width: 100 }}>Akun Gitlab:</strong> dabdusalamrafi
      </li>
      <li>
        <strong style={{ width: 100 }}>Akun Telegram:</strong> Dito Abdusalam R
      </li>
    </ol>
  </div>
  <br />
  <br />
  <a href="index.html">
    <button>kembali ke index</button>
  </a>
</div>

        	)
    }
}

export default about;