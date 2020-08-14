import nav from '../dataset/navbar.json';

function Navbar(){
	return (
	<nav>
		<div>
            <ul>
                {nav.map((nav, index) =>
                <li key={index}>
                <li><a class="nav_menu" href={nav.link}>{nav.text}</a></li>
                </li>
                )}
            </ul>
		</div>
	</nav>
	);
}

export default Navbar;