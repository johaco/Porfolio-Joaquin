import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';

const Portfolio = () => {
   const [letterClass, setLetterClass] = useState('text-animate')
      const form = useRef();
  
      useEffect(() => {
  
          let timeoutId = setTimeout(() => {
              setLetterClass('text-animate-hover')
          }, 4000)
  
          return () => {
              clearTimeout(timeoutId)
          }
      }, [])
  return (
    <>
      <div className='container portfolio-page'>
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['Portfolio'.split('')]}
            idx={15} />
        </h1>
      </div>
      <div>{renderPortfolio()}</div>
      <Loader type="pacman" />
    </>
  )
}
export default Portfolio;

