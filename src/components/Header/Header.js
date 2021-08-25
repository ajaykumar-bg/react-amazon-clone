import React from 'react';

import { Search as SearchIcon } from '@material-ui/icons';

import './Header.css';

function Header() {
	return (
		<div className='header'>
			<img
				alt='amazon_logo'
				className='header__logo'
				src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
			/>
			<div className='header__search'>
				<input className='header__searchInput' type='text' />
				<SearchIcon />
			</div>
			<div className='header__nav'>
				<div className='header__option'>
					<span className='header__option_lineOne'>Hello Guest</span>
					<span className='header__option_lineTwo'>Sign In</span>
				</div>
				<div className='header__option'>
					<span className='header__option_lineOne'>Returns</span>
					<span className='header__option_lineTwo'>& Orders</span>
				</div>
				<div className='header__option'>
					<span className='header__option_lineOne'>Your</span>
					<span className='header__option_lineTwo'>Prime</span>
				</div>
			</div>
		</div>
	);
}

export default Header;
