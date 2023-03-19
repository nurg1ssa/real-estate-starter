import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HouseContext } from '../components/HouseContext';
import { BiBed, BiBath, BiArea } from 'react-icons/bi'


const PropertyDetails = () => {
  const { houses } = useContext(HouseContext)
  const { id } = useParams()
  return (
    <div>
      {houses.filter(house => house.id == id).map((house) => {
        return (
          <div className='container mx-auto min-h-[800px] mb-14'>
            <div className='flex flex-col'> {/* house name,address and price*/}
              <div>
                <h1 className='font-bold text-xl'>{house.name}</h1>
              </div>
              <div className='flex flex-col lg:flex-row justify-between'>
                <div className='text-gray-400'>
                  <h2>{house.address}</h2>
                </div>
                <div className='flex gap-2 text-sm items-center'>
                  <div className='bg-green-500 rounded-full text-white px-2'>
                    <p>{house.type}</p>
                  </div>
                  <div className='bg-violet-500 rounded-full text-white px-2'>
                    <p>{house.country}</p>
                  </div>
                </div>
                <div className='text-violet-500 text-2xl font-semibold'>
                  <h1>$ {house.price}</h1>
                </div>
              </div>
            </div>
            <div className='my-3 flex flex-col lg:flex-row gap-8'>
              <div className='max-w-[768px] lg:max-w-[600px] xl:max-w-[768px]'>{/* house picture and description */}
                <div>
                  <img src={house.imageLg} />
                </div>
                <div className='flex gap-5 my-5'>
                  <div className='flex items-center text-violet-500 gap-1'>
                    <div className='text-[20px]'><BiBed /></div>
                    <div>{house.bedrooms}</div>
                  </div>
                  <div className='flex items-center text-violet-500 gap-1'>
                    <div className='text-[20px]'><BiBath /></div>
                    <div>{house.bathrooms}</div>
                  </div>
                  <div className='flex items-center text-violet-500 gap-1'>
                    <div className='text-[20px]'><BiArea /></div>
                    <div>{house.surface}</div>
                  </div>
                </div>
                <div>
                  {house.description}
                </div>
              </div>
              <div>
                <div className='border-solid border border-gray-300 rounded-md'>
                  <div className='flex flex-rol p-5 gap-4'> {/* agent pic and name */}
                    <div>
                      <div className='rounded-full p-1 border-solid border border-gray-300'>
                        <img src={house.agent.image} className='w-16 h-16' />
                      </div>
                    </div>
                    <div className='my-auto'>
                      <div>
                        <h2 className='font-bold'>{house.agent.name}</h2>
                      </div>
                      <div>
                        <p className='text-violet-500  text-xs'>View Listings</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div> {/* form */}
                      <form className='px-5'>
                        <input type='text' placeholder='Name'
                          className='border border-gray-300 focus:border-violet-500 w-full outline-none
                        px-4 h-14 text-sm my-2 text-gray-600' />
                        <input type="email" placeholder='Email'
                          className='border border-gray-300 focus:border-violet-500 w-full outline-none
                        px-4 h-14 text-sm my-2 text-gray-600' />
                        <input type="tel" placeholder='Phone number'
                          className='border border-gray-300 focus:border-violet-500 w-full outline-none
                        px-4 h-14 text-sm my-2 text-gray-600' />
                        <textarea placeholder='Message'
                          defaultValue='Hello, i am interested in your apartment :)'
                          className='border border-gray-300 focus:border-violet-500 w-full outline-none
                        p-4 h-36 resize-none text-sm my-2 text-gray-600' />
                        <div className='mb-8 flex flex-col lg:flex-row gap-2'>
                          <button className='p-4 bg-violet-700 rounded-md border border-black
                          hover:bg-violet-800 text-white w-full text-sm font-semibold'>
                            Send Message
                          </button>
                          <button className='p-4 rounded-md border border-violet-700 text-sm 
                          text-black font-semibold hover:text-violet-700 w-full '>
                            Call
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default PropertyDetails;
