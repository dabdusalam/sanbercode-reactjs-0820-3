 import React, {Component} from "react"



 class login extends Component{
  render(){
        return(
          
<div>
  <title>LOGIN</title>
  <center>
    <h1>LOGIN</h1>
    <br />
    <br />
    <table cellSpacing={4} border={1} bgcolor="blue">
      <tbody>
        <tr>
          <td>
            <table width="100%" cellPadding={8} border={0} bgcolor="cyan">
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>:</td>
                  <td>
                    <input type="text" name="vnama" defaultValue />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>:</td>
                  <td>
                    <input type="text" name="vnama" defaultValue />
                  </td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>
                    <input type="submit" defaultValue="kirim" />
                    <input type="Reset" defaultValue="Batal" />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </center>
</div>;


          );
      }
    }

export default login;
