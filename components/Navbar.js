import Link from 'next/link'

const Navbar = () => (
    <nav class="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span class="icon-bar"></span>                        
            </button>
            <Link href="/"><a className="navbar-brand">Niddoran</a></Link>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link href="/"><a><span class="glyphicon glyphicon-home"></span> Home</a></Link></li>
                    <li><Link href="/about"><a><span class="glyphicon glyphicon-asterisk"></span> About</a></Link></li>
                    <li><Link href="/contact"><a><span class="glyphicon glyphicon-earphone"></span> Contact Us</a></Link></li>
                    
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar