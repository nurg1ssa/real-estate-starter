import React, { useState, useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)
  const prices = [
    {value: 'Price range (any)'},
    {value: '100000 - 150000'},
    {value: '150000 - 200000'},
    {value: '200000 - 250000'},
    {value: '300000 - 350000'},
    {value: '350000 - 400000'},
  ]

  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-light'>{price}</div>
          <div className='text-[13px]'>Choose Price Range</div>
        </div>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary' />
          )
        }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setPrice(price.value)}
              as='li' key={index}
              className='cursor-pointer px-6 py-3 hover:bg-gray-100 hover:text-violet-700 transition'>
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};


export default PriceRangeDropdown;
