export default function TeamSection() {
  return (
    <section className='py-16 border-b'>
      <div className='container mx-auto'>
        <h2 className='text-4xl pb-4 font-bold text-blue-500 text-center'>Our Team</h2>
        <p className='font-light text-lg text-center max-w-96 mx-auto '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora
          reiciendis.
        </p>

        <ul>
          <li>
            <div className='relative'>
              <img src='' alt='guy' />
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
