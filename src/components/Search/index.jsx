import React, { useContext } from 'react';
import styles from './Search.module.scss';
import { AppContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);
  return (
    <div className={styles.root}>
      <img className={styles.icon} src="/img/search.svg" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          onClick={() => setSearchValue('')}
          className={styles.clearBtn}
          src="/img/clear-btn.svg"
        />
      )}
    </div>
  );
};

export default Search;
