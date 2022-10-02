import { useState } from 'react'
import Navbar from './components/Navbar'
import { ImageProducts, ImageProductsThumbnails, IconPrevious, IconNext, IconPreviousOrange, IconNextOrange, IconMinus, IconPlus, IconCartWhite, IconCloseWhite, IconCloseOrange } from './assets'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [imgIndex, setImgIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [countToAdd, setCountToAdd] = useState(1)

  const decreaseImgIndex = () => {
    if (imgIndex !== 0) {
      setImgIndex((prev) => prev - 1)
    } else {
      setImgIndex(3)
    }
  }
  const increaseImgIndex = () => {
    if (imgIndex !== 3) {
      setImgIndex((prev) => prev + 1)
    } else {
      setImgIndex(0)
    }
  }

  return (
    <div className='flex flex-col items-center overflow-hidden min-h-screen h-full'>
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />

      <main className='flex flex-col lg:flex-row max-w-[1050px] lg:mt-10 lg:p-6 lg:gap-24 items-center'>
        <div className='flex flex-col gap-4 lg:basis-1/2'>
          <div className='relative'>
            <button className='w-10 h-10 bg-white absolute flex justify-center items-center rounded-full translate-y-[-50%]
            top-[50%] left-2 lg:hidden' onClick={() => decreaseImgIndex()}>
              <img src={IconPrevious} alt="previous" /></button>
            <img className='lg:rounded-2xl lg:cursor-pointer' src={ImageProducts[imgIndex]}
              onClick={() => setLightboxOpen((prev) => !prev)} alt="Shoes" />
            <button className='w-10 h-10 bg-white absolute flex justify-center items-center rounded-full translate-y-[-50%]
            top-[50%] right-2 lg:hidden' onClick={() => increaseImgIndex()}>
              <img src={IconNext} alt="next" /></button>
          </div>
          <div className='hidden lg:grid grid-cols-4 gap-4'>
            {ImageProductsThumbnails.map((item, index) => (
              <img key={index} className={`rounded-lg cursor-pointer hover:opacity-50 transition-all ${imgIndex === index ?
                'opacity-50 outline outline-2 outline-primary' : ''}`} onClick={() => setImgIndex(index)} src={item} alt="shoes" />
            ))}
          </div>
        </div>
        <div className='p-6 flex flex-col gap-4 lg:p-0 lg:basis-1/2'>
          <h3 className='text-primary text-xs lg:text-sm'>Sneaker Company</h3>
          <h2 className='text-2xl font-bold lg:text-4xl'>Fall Limited Edition Sneakers</h2>
          <p className='text-dark-grayish-blue text-sm lg:text-base'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className='flex justify-between items-center lg:flex-col lg:items-start'>
            <div className='flex justify-between items-center gap-4 font-bold'>
              <p className='text-2xl'>$125.00</p>
              <p className='text-primary bg-secondary px-2 rounded-lg'>50%</p>
            </div>
            <p className='text-grayish-blue line-through'>$250.00</p>
          </div>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <div className='relative lg:basis-1/3'>
              <button className='absolute translate-y-[-50%] top-[50%] left-6 hover:opacity-50'
                onClick={() => countToAdd > 0 ? setCountToAdd((prev) => prev - 1) : null}>
                <img src={IconMinus} alt="minus" /></button>
              <input type="number" value={countToAdd} min={0} step={1} className='w-full text-center bg-light-grayish-blue p-6
              rounded-2xl font-bold' onChange={(e) => e.target.value !== '' ? setCountToAdd(e.target.value) : setCountToAdd(0)} />
              <button className='absolute translate-y-[-50%] top-[50%] right-6 hover:opacity-50'
                onClick={() => setCountToAdd((prev) => prev + 1)}>
                <img src={IconPlus} alt="plus" /></button>
            </div>
            <button className='flex gap-4 text-center bg-primary justify-center items-center text-white font-bold p-5
            rounded-2xl hover:opacity-50 lg:basis-2/3' onClick={() => countToAdd > 0 ?
                setCartItems([...cartItems, { name: 'Fall Limited Edition Sneakers', price: 125, count: countToAdd }]) : null}>
              <img src={IconCartWhite} alt="cart" /> Add to cart</button>
          </div>
        </div>

        <div className={`hidden ${lightboxOpen ? 'lg:flex' : ''} justify-center items-center w-full h-full bg-black bg-opacity-75
        absolute left-0 top-0`}>
          <div className='flex flex-col gap-8 items-center max-w-[800px] max-h-[80vh]'>
            <button className='self-end' onClick={() => setLightboxOpen(false)}><img src={IconCloseWhite}
              onMouseEnter={(e) => e.currentTarget.src = IconCloseOrange}
              onMouseLeave={(e) => e.currentTarget.src = IconCloseWhite}
              alt="close" /></button>
            <div className='relative'>
              <button className='w-12 h-12 bg-white absolute flex justify-center items-center rounded-full translate-y-[-50%]
              top-[50%] left-0 translate-x-[-50%]' onClick={() => decreaseImgIndex()}
                onMouseEnter={(e) => e.currentTarget.children[0].src = IconPreviousOrange}
                onMouseLeave={(e) => e.currentTarget.children[0].src = IconPrevious}>
                <img src={IconPrevious}
                  alt="previous" /></button>
              <img className='lg:rounded-2xl lg:cursor-pointer' src={ImageProducts[imgIndex]}
                onClick={() => setLightboxOpen((prev) => !prev)} alt="Shoes" />
              <button className='w-12 h-12 bg-white absolute flex justify-center items-center rounded-full translate-y-[-50%]
              top-[50%] right-0 translate-x-[50%]' onClick={() => increaseImgIndex()}
                onMouseEnter={(e) => e.currentTarget.children[0].src = IconNextOrange}
                onMouseLeave={(e) => e.currentTarget.children[0].src = IconNext}>
                <img src={IconNext} alt="next" /></button>
            </div>
            <div className='hidden lg:grid grid-cols-4 gap-8'>
              {ImageProductsThumbnails.map((item, index) => (
                <img key={index} className={`rounded-lg cursor-pointer hover:opacity-50 transition-all ${imgIndex === index ?
                  'opacity-50 outline outline-2 outline-primary' : ''}`} onClick={() => setImgIndex(index)} src={item} alt="shoes" />
              ))}
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default App