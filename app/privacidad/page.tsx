import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AvisoPrivacidad() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Aviso de Privacidad</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Protección de datos personales para TEDxTecnológico de Monterrey
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert animate-slide-in-left">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Responsable del Tratamiento</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                El equipo organizador de TEDxTecnológico de Monterrey, en colaboración con el Tecnológico de Monterrey
                Campus Saltillo, es responsable del tratamiento de sus datos personales.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Datos Personales Recabados</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Recabamos los siguientes tipos de datos personales:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                • <strong>Datos de identificación:</strong> Nombre completo, edad, género
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                • <strong>Datos de contacto:</strong> Correo electrónico, número telefónico
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                • <strong>Datos académicos/profesionales:</strong> Institución, ocupación, área de interés
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                • <strong>Datos de preferencias:</strong> Intereses en temas específicos, necesidades especiales
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Finalidades del Tratamiento</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Sus datos personales serán utilizados para:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                • Gestionar su registro y participación en el evento
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                • Enviar comunicaciones relacionadas con el evento
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">• Generar estadísticas y reportes del evento</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                • Mejorar la experiencia del evento y eventos futuros
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">• Cumplir con obligaciones legales y de seguridad</p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Transferencias de Datos</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Sus datos personales no serán transferidos a terceros, excepto cuando sea necesario para la operación
                del evento (proveedores de servicios, plataformas tecnológicas) o cuando sea requerido por autoridades
                competentes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Derechos ARCO</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Usted tiene derecho a:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                • <strong>Acceder</strong> a sus datos personales que poseemos
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                • <strong>Rectificar</strong> datos incorrectos o incompletos
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                • <strong>Cancelar</strong> el tratamiento de sus datos
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                • <strong>Oponerse</strong> al tratamiento para fines específicos
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Medidas de Seguridad</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Implementamos medidas de seguridad físicas, técnicas y administrativas para proteger sus datos
                personales contra acceso no autorizado, uso indebido, alteración o destrucción.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Conservación de Datos</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Sus datos personales serán conservados únicamente durante el tiempo necesario para cumplir con las
                finalidades descritas y las obligaciones legales aplicables.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia del usuario
                y obtener información estadística sobre el uso del sitio.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Modificaciones al Aviso</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Este aviso de privacidad puede ser modificado. Las actualizaciones serán publicadas en nuestro sitio web
                y, cuando sea aplicable, se le notificará por correo electrónico.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contacto</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Para ejercer sus derechos ARCO o realizar consultas sobre este aviso de privacidad, puede contactarnos a
                través de nuestros canales oficiales de comunicación.
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">Última actualización: 2025</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
