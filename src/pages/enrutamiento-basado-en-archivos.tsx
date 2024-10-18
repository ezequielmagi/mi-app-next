import Link from 'next/link';


export default function Seccion1() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Enrutamiento en Next.js</h1>

<div className="mb-8">
  <h2 className="text-2xl font-semibold mb-2">1. Enrutamiento basado en archivos (Pages Router)</h2>
  <p className="mb-4">Este es el modo que estamos utilizando en tu proyecto. Es el sistema de enrutamiento "clásico" de Next.js, donde cada archivo dentro de la carpeta <code className="bg-gray-100 px-1 rounded">pages</code> se convierte automáticamente en una ruta en tu aplicación.</p>

  <p className="mb-2">Por ejemplo:</p>
  <ul className="list-disc list-inside mb-4">
    <li className="mb-1"><code className=" px-1 rounded">pages/index.tsx</code>  -> <code>/</code> (la página de inicio)</li>
    <li className="mb-1"><code className=" px-1 rounded">pages/seccion1.tsx</code>  ->  <code>/seccion1</code></li>
    <li className="mb-1"><code className=" px-1 rounded">pages/acerca-de.tsx</code>  ->  <code>/acerca-de</code></li>
  </ul>

  <h3 className="text-lg font-medium mb-2">Ventajas:</h3>
  <ul className="list-disc list-inside mb-4">
    <li className="mb-1">Simple y fácil de entender: Es muy intuitivo, especialmente para principiantes.</li>
    <li className="mb-1">Convención sobre configuración: No necesitas configurar rutas manualmente, Next.js lo hace por ti.</li>
  </ul>

  <h3 className="text-lg font-medium mb-2">Desventajas:</h3>
  <ul className="list-disc list-inside mb-4">
    <li className="mb-1">Menos flexible: Puede ser limitante para aplicaciones con estructuras de rutas más complejas.</li>
    <li className="mb-1">No aprovecha al máximo las nuevas características de React: Como los componentes de servidor y el streaming.</li>
  </ul>
</div>



<h2 className="text-2xl font-semibold mb-2">En resumen:</h2>
<p className="mb-4">El Pages Router es ideal para proyectos pequeños y medianos, o para aquellos que buscan una forma sencilla de empezar con Next.js. El App Router es la mejor opción para proyectos más grandes y ambiciosos que requieren un mayor control y flexibilidad, y que quieren aprovechar las últimas características de React.</p>

<p>Como decidiste usar el sistema tradicional por ahora, estás trabajando con el Pages Router.  ¡Sigue adelante con tu proyecto!  Si en algún momento quieres explorar el App Router, puedo ayudarte con la transición. 😉</p>
        <Link href="/">Back to home</Link>
      </div>
    );
  }