import './App.css';
import ChangeIcon from './components/icons/ChangeIcon';
import UnitConvert from './components/unit-convert/UnitConvert';

const App = () => (
	<>
		<header className='header'>
			<nav className='wrapper header__nav '>
				<ChangeIcon className='header__icon' />
				<h1 className='header__title'>unit converter</h1>
			</nav>
		</header>
		<main className='main wrapper'>
			<UnitConvert />
		</main>

		<footer className='footer'>
			<ul className='wrapper footer__terms'>
				<li>Terms of service</li>
				<li>Privacy policy</li>
			</ul>
		</footer>
	</>
);
export default App;
