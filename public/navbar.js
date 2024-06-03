const { userInfo } = require("os");

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">BestBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" title="Click here to create an account" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="If you already have an account, click here to start!" href="#/login/">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Add money into your account" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="Withdraw money fast and easy." href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" title="This is where we keep our records. Thank you for choosing us!" href="#/alldata/">Users</a>
          </li>     
          <li className="nav-item">
            <a className="nav-link" title="Goodbye!" href="#/logout/">Logout</a>
          </li>     
        </ul>
      </div>
      <div style={{marginRight: '15px', display:'inline', color: 'white'}} id="currentuser">Welcome </div>
    </nav>
    </>
  );
}