import React, { useState, useContext } from 'react';
import { RiHome7Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiHome7Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-light'>{property}</div>
          <div className='text-[13px]'>Select your place</div>
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
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              as='li' key={index}
              className='cursor-pointer px-6 py-3 hover:bg-gray-100 hover:text-violet-700 transition'>
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};


export default PropertyDropdown;
