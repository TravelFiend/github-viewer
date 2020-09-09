import React from 'react';
import styles from './Repos.css';
import { useSelector } from 'react-redux';
import { getTheRepos } from '../../selectors/reposSelectors';

const Repos = () => {
  const repos = useSelector(getTheRepos);
  console.log(repos);
  

  const repoNameElements = repos.map(repo => (
    <li key={repo.name}>
      <p>{repo.name}</p>;
    </li>
  ));

  return (
    <>
      <h3>Repos</h3>
      <ul className={styles.Repos}>
        {repoNameElements}
      </ul>
    </>
  );
};

export default Repos;
