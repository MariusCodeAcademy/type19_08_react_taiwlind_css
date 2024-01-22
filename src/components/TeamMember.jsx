import LnIcon from './UI/LnIcon';

export default function TeamMember() {
  return (
    <li className='border-slate-700 border-2 group'>
      <div className='relative overflow-hidden'>
        <img className='w-full' src='/img/p1.webp' alt='guy' />
        <ul className='bg-blue-500 -translate-x-full text-white absolute top-0 left-0 h-full group-hover:translate-x-0 transition-transform'>
          <li className='p-4 hover:bg-blue-400'>
            <a href='#'>
              <LnIcon>lnr-apartment</LnIcon>
            </a>
          </li>
          <li className='p-4 hover:bg-blue-400'>
            <a href='#'>
              <LnIcon>lnr-dice</LnIcon>
            </a>
          </li>
        </ul>
      </div>
      <div className='py-4 px-6'>
        <h3 className='text-2xl font-bold'>Name</h3>
        <p className='italic'>Pareigos</p>
      </div>
    </li>
  );
}
