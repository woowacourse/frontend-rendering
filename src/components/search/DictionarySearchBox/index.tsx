'use client';
import { useState } from 'react';
import SearchBox from '../SearchBox';

const DictionarySearchBox = () => {
	const [searchValue, setSearchValue] = useState('');
	return <SearchBox value={searchValue} />;
};

export default DictionarySearchBox;
