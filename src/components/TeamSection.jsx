export default function TeamSection() {
  return (
    <section className='py-16 border-b'>
      <div className='container px-12 mx-auto'>
        <h2 className='text-4xl pb-4 font-bold text-blue-500 text-center'>Our Team</h2>
        <p className='font-light text-lg text-center lg:max-w-96 max-w-[60%] mx-auto '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora
          reiciendis.
        </p>

        <ul className='pt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-6 '>
          <li className='border-slate-700 border-2'>
            <div className='relative overflow-hidden '>
              <img src='/img/p1.webp' alt='guy' />
              <ul className='bg-blue-500  -translate-x-full text-white absolute top-0 left-0 h-full'>
                <li className='p-4'>icon1</li>
                <li className='p-4'>icon2</li>
              </ul>
            </div>
            <div>
              <h3>Name</h3>
              <p>Pareigos</p>
            </div>
          </li>
          <li className=' border-slate-700 border-2'>
            <div className='relative'>
              <img src='/img/p1.webp' alt='guy' />
              <ul>
                <li>icon1</li>
                <li>icon2</li>
              </ul>
            </div>
            <div>
              <h3>Name</h3>
              <p>Pareigos</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
