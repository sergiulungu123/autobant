import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {

  return (
    <div className='flex space-x-2'>
      <select
        className='p-2 border border-red-900 focus:ring-2 focus:outline-none focus:ring-red-700 rounded-md cursor-pointer'
      >
        <option value='en'>English</option>
        <option value='es'>Español</option>
      </select>
    </div>
  );
}