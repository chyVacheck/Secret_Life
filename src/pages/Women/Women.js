import './Women.css';

import { ListOfWomen } from '../../utils/constants.js';

import Title from '../../components/Title/Title.js';
import Woman from '../../components/Woman/Woman.js';

function Women() {
  return (
    <section className='women'>
      <Title>
        Women
      </Title>

      <ul className='women__grid'>
        {ListOfWomen.map((item, index) => {
          return (
            <li key={index}>
              <Woman woman={item}></Woman>
            </li>
          )
        }
        )}
      </ul>
    </section >
  );
}

export default Women;
