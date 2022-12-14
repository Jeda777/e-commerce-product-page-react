import { useState } from 'react'
import { IconMenu, IconClose, Logo, Avatar, IconCart, ImageProductsThumbnails, IconDelete } from '../assets/index'
import { Item } from '../vite-env'

type Props = {
  cartItems: Item[]
  setCartItems: (val: Item[]) => void
}

const Navbar: React.FC<Props> = ({ cartItems, setCartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <header className='w-full max-w-[1100px] p-6 flex justify-between relative border-b border-very-dark-blue'>
      <div className='flex items-center gap-4 lg:gap-14'>
        <nav
          className={` ${menuOpen ? 'left-0' : '-left-[120vw]'} bg-black w-screen bg-opacity-75 absolute h-screen z-20 top-0 
                flex transition-all lg:hidden`}
        >
          <ul className='p-6 pt-24 pr-32 bg-white font-bold flex flex-col gap-8'>
            <li>
              <a href='#'>Collections</a>
            </li>
            <li>
              <a href='#'>Men</a>
            </li>
            <li>
              <a href='#'>Women</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
        <img
          src={menuOpen ? IconClose : IconMenu}
          onClick={() => setMenuOpen((prev) => !prev)}
          alt='menu'
          className='cursor-pointer z-30 h-[15px] w-4 bg-contain lg:hidden'
        />
        <img src={Logo} alt='Logo' />
        <nav className='hidden lg:flex text-dark-grayish-blue gap-8'>
          <a className='desktop-nav-link' href='#'>
            Collections
          </a>
          <a className='desktop-nav-link' href='#'>
            Men
          </a>
          <a className='desktop-nav-link' href='#'>
            Women
          </a>
          <a className='desktop-nav-link' href='#'>
            About
          </a>
          <a className='desktop-nav-link' href='#'>
            Contact
          </a>
        </nav>
      </div>

      <div className='flex gap-5 items-center'>
        <div>
          <div className='relative'>
            <img src={IconCart} onClick={() => setCartOpen((prev) => !prev)} alt='cart' className='cursor-pointer' />
            <p
              className={`${cartItems.length !== 0 ? '' : 'hidden'} text-white bg-primary px-2 rounded-md absolute
                        top-[-7px] right-[-7px] text-xs`}
            >
              {cartItems.length}
            </p>
          </div>
          <div
            className={`bg-white absolute w-[95%] right-[2.5%] ${cartOpen ? 'top-20' : 'top-[-5000%]'}  rounded-xl
                    transition-all max-w-[360px] shadow-xl z-10`}
          >
            <div className='p-6 border-b border-grayish-blue'>
              <p className='font-bold'>Cart</p>
            </div>
            <div className='p-6 flex flex-col gap-6'>
              <ul className='flex flex-col gap-4'>
                <li className={cartItems.length === 0 ? '' : 'hidden'}>
                  <p className='text-center'>Your cart is empty.</p>
                </li>
                {cartItems.map((item, index) => (
                  <li key={index} className='flex items-center gap-2'>
                    <img className='w-[50px] h-[50px] rounded-lg' src={ImageProductsThumbnails[0]} alt='shoes' />
                    <div className='text-sm w-full'>
                      <p className='text-dark-grayish-blue'>{item.name}</p>
                      <div className='flex gap-4 items-center'>
                        <p className='text-dark-grayish-blue'>
                          ${item.price} x {item.count}
                        </p>
                        <p className='font-bold'>${item.price * item.count}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setCartItems([...cartItems.slice(0, index), ...cartItems.slice(index + 1, cartItems.length)])
                      }}
                    >
                      <img src={IconDelete} alt='delete' />
                    </button>
                  </li>
                ))}
              </ul>
              <button
                className='w-full text-center bg-primary py-5 rounded-xl text-white
                            hover:opacity-50 transition-all'
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <img
          src={Avatar}
          alt='Avatar'
          className='w-6 h-6 lg:w-12 lg:h-12 rounded-full cursor-pointer hover:outline-2 hover:outline-primary
                hover:outline transition-all'
        />
      </div>
    </header>
  )
}

export default Navbar
