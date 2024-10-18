import { useRouter } from 'next/router';
import Link from 'next/link';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  reseña: string;
}

export default function Usuario() {
  const router = useRouter();
  const { id } = router.query;

  const usuarios: Usuario[] = require('../../public/users.json');
  const usuario = usuarios.find((u) => u.id === Number(id));

  return (
    <div>
      {usuario ? (
        <>
          <h1>Perfil del Usuario</h1>
          <p>ID: {usuario.id}</p>
          <p>Nombre: {usuario.nombre}</p>
          <p>Email: {usuario.email}</p>
          <p>Reseña: {usuario.reseña}</p>
        </>
      ) : (
        <div>Usuario no encontrado</div>
      )}

    <Link href="/usuarios">Volver a usuarios</Link> <br />  
    <Link href="/">Back to home</Link>
    </div>
  );
}