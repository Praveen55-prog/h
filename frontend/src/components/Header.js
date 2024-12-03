

export default function Header(){
    return(
        <header>
            <nav className="navbar row "> 
            <div className="navbar-brand">
                <img src="/images/prasanth.jpg" alt="prasanth" width="150px" height="100px" />
            </div>
            <div className="col-12 col-md-4 text-white d-flex justify-content-center align-items-center ">
                <h1>Prasanth</h1>
            </div>
            <div className="col-12 col-md-3 text-white">
                <address>Lalgudi</address>
                <h6>Mob.No. 8072175827</h6>
                <p className="fa fa-home text-white"> Home</p>
                </div>
                
        </nav>
        </header>
        
    )
}