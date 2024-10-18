import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col mx-auto justify-evenly align-middle w-full h-screen'>
      <h1 className='text-center text-3xl'>Bienvenido a mi aplicación Next.js y page router</h1>
      <ul className='mx-auto '>
        <li className='mb-4'>
          <Link href="/enrutamiento-basado-en-archivos">Enrutamiento basado en archivos (Pages Router)</Link>
        </li>
        <li className='mb-4'>
          <Link href="/app-router">APP Router</Link>
        </li>
        <li className='mb-4'>
          <Link href="/section3">Section 3</Link>
        </li>
        <li className='mb-4'>
          <Link href="/usuarios">Usuarios / Rutas dinámicas</Link>
        </li>
        
      </ul>
    </div>
  );
}