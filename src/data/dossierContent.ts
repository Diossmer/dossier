import type { DossierData } from '../types/dossier'

export const dossierData: DossierData = {
  team: [
    {
      name: 'Diossmer Villamizar',
      role: 'Scrum Master / Lead Developer',
      phrase: 'Orquestación del ciclo Scrum y desarrollo backend Node.js + TypeScript',
      color: '#3b82f6',
    },
    {
      name: 'Omar Rivas',
      role: 'Backend Developer',
      phrase: 'API REST, integración MongoDB y APIs de mensajería instantánea',
      color: '#10b981',
    },
    {
      name: 'Rosa Palacios',
      role: 'QA Engineer / Frontend',
      phrase: 'Pruebas funcionales, UI/UX nativa en Kotlin + Material Design',
      color: '#8b5cf6',
    },
  ],
  slides: [
    {
      id: 1,
      template: 'hero',
      title: 'S.A.V.A.M.',
      data: {
        subtitle: 'Sistema de Análisis de Verificación de API Móviles',
        tagline: 'Proyecto Sociotecnológico — UNETI',
        group: 'Grupo 3 — Chimera',
        date: 'Febrero 2026',
      },
    },
    {
      id: 2,
      template: 'valores',
      title: 'Filosofía Corporativa',
      data: {
        mision: 'Automatizar la verificación de líneas telefónicas recicladas en Movilnet, consultando en tiempo real su vinculación con WhatsApp Business y Telegram, para garantizar una asignación libre de identidades digitales previas.',
        vision: 'Ser la plataforma de código abierto referente en Latinoamérica para la gestión de activos numéricos en telecomunicaciones.',
        valores: [
          { icon: 'shield', label: 'Soberanía Tecnológica', desc: 'Código abierto con herramientas nacionales' },
          { icon: 'lock', label: 'Seguridad', desc: 'JWT, cifrado extremo-a-extremo, control de roles' },
          { icon: 'zap', label: 'Eficiencia', desc: 'Automatización de procesos manuales, respuesta < 3s' },
        ],
      },
    },
    {
      id: 3,
      template: 'team',
      title: 'El Equipo',
      data: {},
    },
    {
      id: 4,
      template: 'split',
      title: 'El Problema',
      data: {
        text: [
          'El 15% de los nuevos suscriptores de Movilnet reciben líneas que aún conservan perfiles activos en WhatsApp Business y Telegram.',
          'Esta "herencia digital" genera una colisión de identidades: el nuevo usuario accede involuntariamente a datos del dueño anterior, o no puede registrar sus propias cuentas.',
          'El proceso actual es manual y empírico: el Agente Autorizado debe verificar cada número navegando entre aplicaciones en su propio teléfono.',
          'Esto deriva en re-trabajo en los centros de servicio, vulneración de privacidad, y pérdida de suscriptores hacia otras operadoras.',
        ],
        problemFlow: [
          'El número telefónico es vinculado a Whatssap/Telegram',
          'El usuario no logra registrar su cuenta en redes sociales como whatssap/telegram',
          'Molestias y reproceso en Centros de Servicio',
        ],
      },
    },
    {
      id: 5,
      template: 'timeline',
      title: 'La Solución — S.A.V.A.M.',
      data: {
        description: 'Arquitectura de software soberana para la auditoría automatizada de activos digitales',
        layers: [
          { name: 'App Android (Kotlin)', tech: 'UI nativa + Retrofit', color: '#10b981' },
          { name: 'Backend Node.js', tech: 'TypeScript + Express + JWT', color: '#3b82f6' },
          { name: 'Base de Datos', tech: 'MongoDB — Colecciones NoSQL', color: '#f59e0b' },
          { name: 'APIs Externas', tech: 'WhatsApp Business / Telegram', color: '#ef4444' },
        ],
        sequence: [
          'Agente → App (consulta número)',
          'App → Backend (petición HTTP con Retrofit)',
          'Backend → MongoDB (consulta status interno)',
          'Backend → WhatsApp API (verificación paralela)',
          'Backend → Telegram API (verificación paralela)',
          'Backend → App (respuesta JSON consolidada)',
          'App → Agente (resultado: limpia/vinculada)',
        ],
      },
    },
    {
      id: 6,
      template: 'metrics',
      title: 'Innovación e Impacto',
      data: {
        metrics: [
          { value: '90%', label: 'Reducción errores de integración', icon: 'trending-up' },
          { value: '< 3s', label: 'Tiempo de consulta por número', icon: 'clock' },
          { value: '3', label: 'Roles definidos (Admin/Moderador/Agente)', icon: 'users' },
          { value: '100%', label: 'Código abierto y soberano', icon: 'globe' },
        ],
        lecciones: [
          'Retrofit + TypeScript sincronizaron modelos al 100%',
          'Desacoplamiento por servicios web facilita actualizaciones sin reinstalar',
          'La tecnología debe ser humana: programamos para personas, no para servidores',
          'Scrum nos enseñó que cambiar la estrategia sin cambiar la visión esfortaleza',
        ],
        tecnologias: ['Node.js', 'TypeScript', 'MongoDB', 'Kotlin', 'JWT', 'GramJS', 'Playwright', 'Retrofit'],
      },
    },
  ],
}
