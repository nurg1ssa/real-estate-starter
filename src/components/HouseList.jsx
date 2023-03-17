import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House'
import { Link } from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'
const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }
  if (houses.length === 0){
    return (
      <div className='mx-auto flex justify-center text-2xl font-bold text-gray-600'>Sorry, nothing found;(</div>
    )
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>);
};

export default HouseList;
