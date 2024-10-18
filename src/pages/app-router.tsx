import Link from 'next/link';


export default function Seccion2() {
    return (
      <div>
        <div className="mb-8">
  <h2 className="text-2xl font-semibold mb-2">2. App Router</h2>
  <p className="mb-4">Es el nuevo sistema de enrutamiento introducido en Next.js 13. Se basa en la nueva convención de carpetas <code className="bg-gray-100 px-1 rounded">app</code> y ofrece características más avanzadas:</p>

  <ul className="list-disc list-inside mb-4">
    <li className="mb-1">Layouts: Permite crear layouts anidados para diferentes secciones de tu aplicación.</li>
    <li className="mb-1">Componentes de servidor: Mejoran el rendimiento y el SEO.</li>
    <li className="mb-1">Streaming:  Permite mostrar el contenido de forma progresiva.</li>
    <li className="mb-1">Server Actions: Facilitan la interacción con el servidor.</li>
  </ul>

  <h3 className="text-lg font-medium mb-2">Ventajas:</h3>
  <ul className="list-disc list-inside mb-4">
    <li className="mb-1">Más potente y flexible: Permite crear aplicaciones más complejas y dinámicas.</li>
    <li className="mb-1">Mejor rendimiento: Gracias a los componentes de servidor y el streaming.</li>
    <li className="mb-1">Preparado para el futuro:  Es la dirección que está tomando Next.js.</li>
  </ul>

  <h3 className="text-lg font-medium mb-2">Desventajas:</h3>
  <ul className="list-disc list-inside mb-4">
    <li className="mb-1">Más complejo: Requiere un mayor aprendizaje al principio.</li>
    <li className="mb-1">Menos recursos disponibles:  Al ser más nuevo, hay menos documentación y ejemplos en comparación con el Pages Router.</li>
  </ul>
</div>
        <Link href="/">Back to home</Link>
      </div>
    );
  }