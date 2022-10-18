import './Women.css';

import { ListOfWomen } from '../../utils/constants.js';

import Title from '../../components/Title/Title.js';
import Woman from '../../components/Woman/Woman.js';

function Women({ setSelectedWoman }) {
  return (
    <section className='women'>
      <Title>
        Women
      </Title>

      <ul className='women__grid'>
        {ListOfWomen.map((item, index) => {
          return (
            <li key={index}>
              <Woman key={index} setSelectedWoman={setSelectedWoman} woman={item}></Woman>
            </li>
          )
        }
        )}
      </ul>
    </section >
  );
}

export default Women;
