import Link from 'next/link';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  reseña: string;
}

export default function Users() {
  const usuarios: Usuario[] = require('../../public/users.json');

  return (
    <div className='flex flex-col mx-auto justify-evenly align-middle w-full h-screen text-center'>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <Link href={`/${usuario.id}`} passHref> {usuario.nombre} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}