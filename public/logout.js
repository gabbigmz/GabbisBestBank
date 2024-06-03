function Logout(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');    
  
    return (
    <center><Card
        txtcolor="white"
        bgcolor="dark"
        header="Logout"
        body={<> Please click here to logout <br></br><br></br>
        <button type="submit" className="btn btn-light" onClick={handle} >Logout</button></>}
      /></center>
    ) 

    function handle() {

        document.getElementById('currentuser').innerHTML = "Welcome ";
    }

  }
  