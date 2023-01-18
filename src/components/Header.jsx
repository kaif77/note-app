import { MdLightMode, MdDarkMode } from 'react-icons/md';

const Header = ({ handleToggleDarkMode, darkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				{darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
			</button>
		</div>
	);
};

export default Header;