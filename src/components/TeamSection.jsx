export default function TeamSection() {
  const newArr = [];

  for (let i = 1; i < 5; i++) {
    newArr.push(i);
  }

  console.log('newArr ===', newArr);

  return (
    <section className='py-16 border-b'>
      <div className='container px-12 mx-auto'>
        <h2 className='text-4xl pb-4 font-bold text-blue-500 text-center'>Our Team</h2>
        <p className='font-light text-lg text-center lg:max-w-96 max-w-[60%] mx-auto '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora
          reiciendis.
        </p>

        <ul className='pt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-6 '>
          {/* When i hover on li element i want to add 'translate-x' rule to ul el inside, how to do that in  */}
          {newArr.map((sk) => (
            <li key={sk} className='border-slate-700 border-2 group'>
              <div className='relative overflow-hidden'>
                <img className='w-full' src='/img/p1.webp' alt='guy' />
                <ul className='bg-blue-500 -translate-x-full text-white absolute top-0 left-0 h-full group-hover:translate-x-0 transition-transform'>
                  <li className='p-4 hover:bg-blue-400'>
                    <a href='#'>
                      <span className='lnr text-4xl lnr-apartment'></span>
                    </a>
                  </li>
                  <li className='p-4 hover:bg-blue-400'>
                    <a href='#'>
                      <span className='lnr text-4xl lnr-dice'></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className='py-4 px-6'>
                <h3 className='text-2xl font-bold'>Name</h3>
                <p className='italic'>Pareigos</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
