export type Language = 'es' | 'en';

export interface ProjectStat {
  label: string;
  value: string; // Ej: "[COMPLETAR MÉTRICA: -40% tiempo]"
  percentage: number; // Valor de 10 a 100 para la barra visual de la Pokédex
}

export interface ProjectEntry {
  id: string; // #001, #002, #003...
  name: string;
  categoryType: string; // "Tipo" estilo Pokédex = Stack principal
  problem: string;
  solution: string;
  stack: string[];
  resultText: string;
  stats: ProjectStat[];
  repoUrl: string;
  demoUrl?: string;
}

export interface TechSlot {
  slotNumber: string;
  name: string;
  typeBadge: string;
  levelLabel: string;
  usageContext: string;
}

export interface BackpackCategory {
  categoryName: string;
  items: string[];
}

export interface GymExperience {
  badgeId: string;
  role: string;
  organization: string;
  period: string;
  type: 'experience' | 'education';
  statusLabel: string;
  highlights: string[];
}

/* ==========================================================================
   1. EDITA AQUÍ TUS ENLACES DE CONTACTO Y CV
   Instrucciones: Sustituye '[EMAIL]', '[GITHUB]' y '[LINKEDIN]' por tus datos:
   - email: 'tu-correo@dominio.com' (sin mailto:, el código lo añade solo)
   - github: 'https://github.com/tu-usuario'
   - linkedin: 'https://www.linkedin.com/in/tu-perfil/'
   - cvUrl: Coloca tu PDF en la carpeta /public con el nombre cv-pablo-herrera.pdf
   ========================================================================== */
export const CONTACT_LINKS = {
  email: 'pablohd140605@gmail.com',
  github: 'https://github.com/Zauk99',
  linkedin: 'https://www.linkedin.com/in/pablo-herrera-dominguez/',
  cvUrl: '/cv-pablo-herrera.pdf'
};

/* ==========================================================================
   2. EDITA AQUÍ TUS PROYECTOS DESTACADOS (3 A 5 ENTRADAS DE POKÉDEX)
   Instrucciones: Sustituye los textos [COMPLETAR: ...] en 'es' y en 'en'.
   Para añadir un 4º o 5º proyecto, copia un bloque { id: '#003', ... } y
   pégalo debajo cambiando el id a '#004' o '#005'.
   ========================================================================== */
export const PROJECTS_DATA: Record<Language, ProjectEntry[]> = {
  es: [
    {
      id: '#001',
      name: 'El Diario de Kanto (Portal Web & BFF)',
      categoryType: 'JAVA / SPRING BOOT / THYMELEAF / JS',
      problem:
        'Unificar en una sola plataforma web la actualidad del ecosistema Pokémon (videojuegos y competitivo TCG) junto con herramientas interactivas de consulta y entretenimiento sin depender de frameworks pesados en el cliente.',
      solution:
        'Implementación de una arquitectura Backend for Frontend (BFF) con Java, Spring Boot y Maven, renderizando vistas dinámicas con Thymeleaf e integrando en el cliente una Pokédex interactiva y dos minijuegos programados en Vanilla JavaScript, HTML5 y CSS3.',
      stack: ['Java', 'Spring Boot', 'Thymeleaf', 'JavaScript', 'HTML5', 'CSS3', 'Maven'],
      resultText:
        'Portal integral con Pokédex interactiva y 2 minijuegos integrados',
      stats: [
        { label: 'MÓDULOS INTERACTIVOS', value: 'Noticias + Pokédex + 2 Minijuegos', percentage: 92 },
        { label: 'ARQUITECTURA BFF', value: '[COMPLETAR MÉTRICA]', percentage: 88 }
      ],
      repoUrl: 'https://github.com/Zauk99/ELdK',
      demoUrl: ''
    },
    {
      id: '#002',
      name: 'El Diario de Kanto (Back-End & API REST)',
      categoryType: 'JAVA 17+ / SPRING SECURITY / POSTGRESQL / DOCKER',
      problem:
        'Proveer un núcleo de datos centralizado, seguro y desacoplado del cliente web para gestionar usuarios, roles, noticias y registros de la Pokédex garantizando integridad relacional y un despliegue reproducible.',
      solution:
        'Diseño y desarrollo de una API REST con Java 17+ y Spring Boot, protegiendo los endpoints mediante Spring Security (autenticación y gestión de roles), capa de persistencia con Spring Data JPA / Hibernate sobre PostgreSQL y contenerización del entorno con Docker y Docker Compose.',
      stack: [
        'Java 17+',
        'Spring Boot',
        'Spring Security',
        'Spring Data JPA / Hibernate',
        'PostgreSQL',
        'Docker',
        'Docker Compose'
      ],
      resultText:
        'API REST desacoplada con control de roles y base de datos contenerizada',
      stats: [
        { label: 'SEGURIDAD Y PERSISTENCIA', value: 'Spring Security + JPA / PostgreSQL', percentage: 94 },
        { label: 'ENTORNO REPRODUCIBLE', value: 'Docker & Docker Compose', percentage: 95 }
      ],
      repoUrl: 'https://github.com/Zauk99/ELdK_Api',
      demoUrl: ''
    },
    {
      id: '#003',
      name: 'iPod Classic Emulator (Offline Music PWA)',
      categoryType: 'PWA / INDEXEDDB / SERVICE WORKER / JS',
      problem:
        'Reproducir bibliotecas de música local en dispositivos móviles sin anuncios, sin consumo de datos y sin los costes ni restricciones de distribución de las tiendas de aplicaciones nativas.',
      solution:
        'Desarrollo de una Progressive Web App (PWA) instalable que recrea la interfaz y la icónica Click Wheel del iPod Classic usando CSS Grid/Variables y Vanilla JS, con persistencia de archivos de audio en cliente mediante IndexedDB y ejecución sin conexión vía Service Worker.',
      stack: ['JavaScript', 'IndexedDB', 'Service Worker', 'HTML5', 'CSS3'],
      resultText:
        'Reproductor 100% Offline e instalable alojado en GitHub Pages',
      stats: [
        { label: 'AUTONOMÍA OFFLINE (SW + IDB)', value: '100% Sin Conexión', percentage: 100 },
        { label: 'FIDELIDAD INTERFAZ CLICK WHEEL', value: '[COMPLETAR MÉTRICA]', percentage: 94 }
      ],
      repoUrl: 'https://github.com/Zauk99/iOS15_iPod',
      demoUrl: 'https://zauk99.github.io/iOS15_iPod/'
    }
  ],
  en: [
    {
      id: '#001',
      name: 'El Diario de Kanto (Web Portal & BFF)',
      categoryType: 'JAVA / SPRING BOOT / THYMELEAF / JS',
      problem:
        'Unify Pokémon video game and competitive TCG news into a single web platform alongside interactive lookup tools and minigames without relying on heavy client-side frameworks.',
      solution:
        'Built a Backend for Frontend (BFF) architecture using Java, Spring Boot, and Maven, rendering server-side dynamic views with Thymeleaf and integrating an interactive Pokédex plus two custom minigames in Vanilla JavaScript, HTML5, and CSS3.',
      stack: ['Java', 'Spring Boot', 'Thymeleaf', 'JavaScript', 'HTML5', 'CSS3', 'Maven'],
      resultText:
        'Full portal featuring an interactive Pokédex and 2 built-in minigames · [COMPLETE METRIC: e.g. views or indexed entries]',
      stats: [
        { label: 'INTERACTIVE MODULES', value: 'News + Pokédex + 2 Minigames', percentage: 92 },
        { label: 'BFF ARCHITECTURE', value: '[COMPLETE METRIC]', percentage: 88 }
      ],
      repoUrl: 'https://github.com/Zauk99/ELdK',
      demoUrl: ''
    },
    {
      id: '#002',
      name: 'El Diario de Kanto (Back-End & REST API)',
      categoryType: 'JAVA 17+ / SPRING SECURITY / POSTGRESQL / DOCKER',
      problem:
        'Provide a centralized, secure, and decoupled data core for the web portal to manage users, roles, news articles, and Pokédex records while ensuring relational integrity and reproducible deployment.',
      solution:
        'Designed and built a RESTful API using Java 17+ and Spring Boot, securing endpoints via Spring Security (authentication and role-based access control), managing persistence with Spring Data JPA / Hibernate over PostgreSQL, and orchestrating containers with Docker and Docker Compose.',
      stack: [
        'Java 17+',
        'Spring Boot',
        'Spring Security',
        'Spring Data JPA / Hibernate',
        'PostgreSQL',
        'Docker',
        'Docker Compose'
      ],
      resultText:
        'Decoupled REST API with role-based security and containerized database · [COMPLETE METRIC: e.g. total endpoints or JPA entities]',
      stats: [
        { label: 'SECURITY & PERSISTENCE', value: 'Spring Security + JPA / PostgreSQL', percentage: 94 },
        { label: 'REPRODUCIBLE ENVIRONMENT', value: 'Docker & Docker Compose', percentage: 95 }
      ],
      repoUrl: 'https://github.com/Zauk99/ELdK_Api',
      demoUrl: ''
    },
    {
      id: '#003',
      name: 'iPod Classic Emulator (Offline Music PWA)',
      categoryType: 'PWA / INDEXEDDB / SERVICE WORKER / JS',
      problem:
        'Play downloaded local music libraries on mobile devices ad-free, without mobile data consumption, and bypassing native app store fees and distribution restrictions.',
      solution:
        'Engineered an installable Progressive Web App (PWA) recreating the classic iPod interface and tactile Click Wheel with CSS Grid/Variables and Vanilla JS, persisting audio files locally in IndexedDB and enabling full offline playback via Service Workers.',
      stack: ['JavaScript', 'IndexedDB', 'Service Worker', 'HTML5', 'CSS3'],
      resultText:
        '100% Offline installable web player hosted on GitHub Pages · [COMPLETE METRIC: e.g. storage or startup speed]',
      stats: [
        { label: 'OFFLINE AUTONOMY (SW + IDB)', value: '100% Offline Ready', percentage: 100 },
        { label: 'CLICK WHEEL UI FIDELITY', value: '[COMPLETE METRIC]', percentage: 94 }
      ],
      repoUrl: 'https://github.com/Zauk99/iOS15_iPod',
      demoUrl: 'https://zauk99.github.io/iOS15_iPod/'
    }
  ]
};

/* ==========================================================================
   3. TEXTOS BILINGÜES E INFORMACIÓN OFICIAL VERIFICADA (ES / EN)
   ========================================================================== */
export const PORTFOLIO_COPY = {
  es: {
    header: {
      systemName: 'POKÉDEX FIELD OS // REGISTRO #2026',
      statusAvailable: 'DISPONIBLE: ESPAÑA & INTERNACIONAL',
      fastModeOff: '⚡ Modo Rápido (10s)',
      fastModeOn: '🎮 Volver a Modo Pokédex',
      audioOff: '🔇 8-BIT OFF',
      audioOn: '🔊 8-BIT ON',
      themeLight: '☀️ Claro',
      themeDark: '🌙 Oscuro'
    },
    trainer: {
      cardLabel: 'TARJETA DE ENTRENADOR // ID #2026',
      name: 'Pablo Herrera Domínguez',
      role: 'Desarrollador Full Stack & Automatización de Procesos',
      valueProposition:
        'Desarrollo aplicaciones web y herramientas internas que automatizan procesos operativos, refuerzan el control de accesos y eliminan tareas manuales en empresas.',
      differentiatorTitle: 'Mi Diferenciador (DAW + DAM)',
      differentiatorText:
        'Doble perfil técnico en Aplicaciones Web (DAW) y Multiplataforma (DAM) con experiencia real en empresa transformando reglas de negocio (control horario, seguridad en bajas/vacaciones y gestión de flotas) en software funcional.',
      availabilityTitle: 'Objetivo y Modalidad',
      availabilitySpain: 'España: Presencial · Híbrido · Teletrabajo',
      availabilityAbroad: 'Extranjero: Teletrabajo · Híbrido / Presencial según oferta',
      downloadCv: '📄 Descargar CV (PDF)',
      contactTitle: 'Conexión Directa',
      pendingConfigHint: 'Pendiente de editar en src/app/data/portfolio.data.ts'
    },
    nav: {
      projects: '01. POKÉDEX (PROYECTOS)',
      party: '02. EQUIPO (STACK)',
      league: '03. LIGA (EXPERIENCIA)',
      save: '04. GUARDAR (CONTACTO)'
    },
    hero: {
      encounterTag: '¡UN DESARROLLADOR ORIENTADO A IMPACTO APARECIÓ!',
      headline: 'Software que resuelve cuellos de botella reales en operativa, seguridad y gestión.',
      dialogueText:
        'Para reclutadores y clientes: combino una base sólida de backend y bases de datos (Java, Python, PostgreSQL, Docker) con desarrollo web y automatización directa de negocio (JavaScript, Google Apps Script).',
      ctaPrimary: 'Explorar Proyectos (#001-#003)',
      ctaSecondary: 'Ir a Contacto / Guardar Partida'
    },
    projectsSection: {
      title: 'REGISTROS DE POKÉDEX // CASOS DE ESTUDIO',
      subtitle: 'Cada entrada documenta el problema real, la solución técnica implementada, el stack y su impacto medible.',
      problemLabel: 'PROBLEMA DETECTADO',
      solutionLabel: 'SOLUCIÓN ARQUITECTÓNICA',
      resultLabel: 'RESULTADO MEDIBLE',
      repoBtn: 'Ver Código / Repo',
      demoBtn: 'Ver Demo'
    },
    stackSection: {
      title: 'EQUIPO TITULAR // 6 TECNOLOGÍAS PRINCIPALES',
      subtitle: 'Mis 6 herramientas clave de combate diario y qué problema resuelvo con cada una.',
      backpackTitle: 'MOCHILA TÉCNICA // HERRAMIENTAS COMPLEMENTARIAS',
      party: [
        {
          slotNumber: 'SLOT 01',
          name: 'Java',
          typeBadge: 'BACKEND / CORE',
          levelLabel: 'TITULAR',
          usageContext: 'Desarrollo de lógica de negocio robusta, programación orientada a objetos y servicios backend escalables.'
        },
        {
          slotNumber: 'SLOT 02',
          name: 'JavaScript',
          typeBadge: 'WEB / FULL STACK',
          levelLabel: 'TITULAR',
          usageContext: 'Construcción de interfaces dinámicas, manipulación del DOM, consumo de APIs e interactividad cliente-servidor.'
        },
        {
          slotNumber: 'SLOT 03',
          name: 'Google Apps Script',
          typeBadge: 'AUTOMATIZACIÓN',
          levelLabel: 'EN PRODUCCIÓN',
          usageContext: 'Automatización empresarial real: control de jornada, paneles de seguridad con autorización por código y gestión de flotas.'
        },
        {
          slotNumber: 'SLOT 04',
          name: 'Docker',
          typeBadge: 'CONTENEDORES',
          levelLabel: 'TITULAR',
          usageContext: 'Estandarización de entornos de desarrollo y despliegue reproducible de bases de datos y servicios.'
        },
        {
          slotNumber: 'SLOT 05',
          name: 'PostgreSQL',
          typeBadge: 'BASE DE DATOS SQL',
          levelLabel: 'TITULAR',
          usageContext: 'Modelado relacional, integridad de datos y consultas optimizadas para aplicaciones de gestión.'
        },
        {
          slotNumber: 'SLOT 06',
          name: 'Python',
          typeBadge: 'BACKEND / SCRIPTING',
          levelLabel: 'TITULAR',
          usageContext: 'Automatización de tareas, creación de scripts técnicos, procesamiento de datos y servicios ágiles.'
        }
      ] as TechSlot[],
      backpack: [
        {
          categoryName: 'Ecosistema Web & Frontend',
          items: ['TypeScript', 'Angular', 'HTML5 Semántico', 'SCSS / CSS Custom Properties', 'Responsive Mobile-First']
        },
        {
          categoryName: 'Sistemas, Calidad & Flujo de Trabajo',
          items: ['Git & GitHub', 'Administración de Sistemas Internos', 'Soporte Técnico', 'Vitest', 'Prettier']
        }
      ] as BackpackCategory[]
    },
    leagueSection: {
      title: 'CAMINO A LA LIGA // EXPERIENCIA Y FORMACIÓN',
      subtitle: 'Hitos reales verificados en entorno empresarial y formación oficial en desarrollo.',
      items: [
        {
          badgeId: 'GIMNASIO EMPRESARIAL #01',
          role: 'Desarrollador & Soporte de Sistemas (Prácticas)',
          organization: 'Texla Renovables',
          period: 'Febrero 2026 - Mayo 2026',
          type: 'experience',
          statusLabel: 'COMPLETADO',
          highlights: [
            'Administración general y soporte técnico de los sistemas y herramientas internas.',
            'Desarrollo de nuevas funcionalidades e interfaces web mediante Google Apps Script para optimizar la gestión de la empresa.',
            'Implementación de un sistema de control de jornada en la aplicación de fichajes, automatizando el cierre de sesión al cumplir el límite de horas.',
            'Creación de un panel web de seguridad para restringir accesos durante bajas o vacaciones, programando un sistema de autorización por código para supervisores.',
            'Mejora de la aplicación de gestión de flota de vehículos, desarrollando un módulo para la edición y registro detallado de kilometraje, usuarios y tareas.'
          ]
        },
        {
          badgeId: 'MEDALLA ACADÉMICA #02',
          role: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
          organization: 'Instituto Velázquez / Formación Profesional Oficial',
          period: '2026 - Actual',
          type: 'education',
          statusLabel: 'EN CURSO',
          highlights: [
            'Especialización en arquitecturas multiplataforma, acceso a datos, concurrencia e integración de sistemas.'
          ]
        },
        {
          badgeId: 'MEDALLA ACADÉMICA #01',
          role: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
          organization: 'Colegio Altair / Formación Profesional Oficial',
          period: '2024 - 2026',
          type: 'education',
          statusLabel: 'GRADUADO',
          highlights: [
            'Formación integral en desarrollo web cliente/servidor, despliegue de aplicaciones web, diseño de interfaces y bases de datos relacionales.'
          ]
        }
      ] as GymExperience[]
    },
    footerSection: {
      title: 'CENTRO POKÉMON // GUARDAR PARTIDA Y CONTACTO',
      subtitle:
        '¿Buscas incorporar a un desarrollador resolutivo a tu equipo (España o Internacional) o necesitas automatizar un proceso en tu negocio?',
      saveBtn: '💾 Guardar Partida (Copiar datos de contacto)',
      savedConfirmation: '¡PARTIDA GUARDADA! Estado del perfil verificado correctamente.'
    }
  },
  en: {
    header: {
      systemName: 'POKÉDEX FIELD OS // LOG #2026',
      statusAvailable: 'AVAILABLE: SPAIN & INTERNATIONAL',
      fastModeOff: '⚡ Fast Mode (10s Recruiter View)',
      fastModeOn: '🎮 Back to Pokédex Mode',
      audioOff: '🔇 8-BIT OFF',
      audioOn: '🔊 8-BIT ON',
      themeLight: '☀️ Light',
      themeDark: '🌙 Dark'
    },
    trainer: {
      cardLabel: 'TRAINER CARD // ID #2026',
      name: 'Pablo Herrera Domínguez',
      role: 'Full Stack Developer & Process Automation',
      valueProposition:
        'I build web applications and internal business tools that automate workflows, enforce security access controls, and eliminate manual tasks.',
      differentiatorTitle: 'My Differentiator (DAW + DAM)',
      differentiatorText:
        'Dual Higher Degree profile in Web (DAW) and Multiplatform (DAM) Development with real company experience turning operational rules (shift tracking, leave security locks, and fleet tracking) into production software.',
      availabilityTitle: 'Target & Work Mode',
      availabilitySpain: 'Spain: On-site · Hybrid · Remote',
      availabilityAbroad: 'International: Remote · Hybrid / On-site depending on offer',
      downloadCv: '📄 Download CV (PDF)',
      contactTitle: 'Direct Connection',
      pendingConfigHint: 'Pending setup in src/app/data/portfolio.data.ts'
    },
    nav: {
      projects: '01. POKÉDEX (PROJECTS)',
      party: '02. PARTY (STACK)',
      league: '03. LEAGUE (EXPERIENCE)',
      save: '04. SAVE GAME (CONTACT)'
    },
    hero: {
      encounterTag: 'AN IMPACT-DRIVEN DEVELOPER APPEARED!',
      headline: 'Software that solves real bottlenecks in operations, security, and internal management.',
      dialogueText:
        'For recruiters and clients: I combine a solid backend and database foundation (Java, Python, PostgreSQL, Docker) with web development and business workflow automation (JavaScript, Google Apps Script).',
      ctaPrimary: 'Explore Projects (#001-#003)',
      ctaSecondary: 'Go to Contact / Save Game'
    },
    projectsSection: {
      title: 'POKÉDEX ENTRIES // CASE STUDIES',
      subtitle: 'Each entry documents the real problem, architectural solution, tech stack, and measurable impact.',
      problemLabel: 'IDENTIFIED PROBLEM',
      solutionLabel: 'ARCHITECTURAL SOLUTION',
      resultLabel: 'MEASURABLE OUTCOME',
      repoBtn: 'View Code / Repo',
      demoBtn: 'Live Demo'
    },
    stackSection: {
      title: 'ACTIVE PARTY // 6 CORE TECHNOLOGIES',
      subtitle: 'My 6 primary daily technologies and the real problems I solve with each one.',
      backpackTitle: 'TECH BACKPACK // COMPLEMENTARY TOOLS',
      party: [
        {
          slotNumber: 'SLOT 01',
          name: 'Java',
          typeBadge: 'BACKEND / CORE',
          levelLabel: 'CORE PARTY',
          usageContext: 'Robust business logic, object-oriented architecture, and scalable backend services.'
        },
        {
          slotNumber: 'SLOT 02',
          name: 'JavaScript',
          typeBadge: 'WEB / FULL STACK',
          levelLabel: 'CORE PARTY',
          usageContext: 'Dynamic user interfaces, DOM manipulation, API integrations, and client-server interactivity.'
        },
        {
          slotNumber: 'SLOT 03',
          name: 'Google Apps Script',
          typeBadge: 'AUTOMATION',
          levelLabel: 'IN PRODUCTION',
          usageContext: 'Enterprise workflow automation: automatic shift logouts, supervisor security code panels, and fleet modules.'
        },
        {
          slotNumber: 'SLOT 04',
          name: 'Docker',
          typeBadge: 'CONTAINERS',
          levelLabel: 'CORE PARTY',
          usageContext: 'Standardized development environments and reproducible database and service deployments.'
        },
        {
          slotNumber: 'SLOT 05',
          name: 'PostgreSQL',
          typeBadge: 'RELATIONAL DB',
          levelLabel: 'CORE PARTY',
          usageContext: 'Relational data modeling, strict data integrity, and optimized SQL queries.'
        },
        {
          slotNumber: 'SLOT 06',
          name: 'Python',
          typeBadge: 'BACKEND / SCRIPTING',
          levelLabel: 'CORE PARTY',
          usageContext: 'Task automation, technical scripting, data processing, and lightweight backend services.'
        }
      ] as TechSlot[],
      backpack: [
        {
          categoryName: 'Web & Frontend Ecosystem',
          items: ['TypeScript', 'Angular', 'Semantic HTML5', 'SCSS / CSS Custom Properties', 'Mobile-First Responsive']
        },
        {
          categoryName: 'Systems, QA & Workflow',
          items: ['Git & GitHub', 'Internal Systems Administration', 'Technical Support', 'Vitest', 'Prettier']
        }
      ] as BackpackCategory[]
    },
    leagueSection: {
      title: 'ROAD TO THE LEAGUE // EXPERIENCE & EDUCATION',
      subtitle: 'Verified milestones in enterprise environments and official software engineering degrees.',
      items: [
        {
          badgeId: 'ENTERPRISE GYM #01',
          role: 'Software Developer & Systems Support (Internship)',
          organization: 'Texla Renovables',
          period: 'February 2026 - May 2026',
          type: 'experience',
          statusLabel: 'COMPLETED',
          highlights: [
            'General administration and technical support for internal systems and company tools.',
            'Developed new web features and interfaces using Google Apps Script to optimize company management.',
            'Implemented a work-hour control system in the time-tracking app, automating session logout upon reaching the hour limit.',
            'Built a security web panel to restrict access during sick leaves or vacations, programming a supervisor code authorization system.',
            'Improved the vehicle fleet management application by developing a module for detailed editing and logging of mileage, users, and tasks.'
          ]
        },
        {
          badgeId: 'ACADEMIC BADGE #02',
          role: 'Higher Degree in Multiplatform Application Development (DAM)',
          organization: 'Instituto Velázquez / Official Vocational Training',
          period: '2026 - Present',
          type: 'education',
          statusLabel: 'IN PROGRESS',
          highlights: [
            'Specialization in multiplatform software architectures, data access layers, concurrency, and enterprise systems.'
          ]
        },
        {
          badgeId: 'ACADEMIC BADGE #01',
          role: 'Higher Degree in Web Application Development (DAW)',
          organization: 'Colegio Altair / Official Vocational Training',
          period: '2024 - 2026',
          type: 'education',
          statusLabel: 'GRADUATED',
          highlights: [
            'Comprehensive training in client/server web development, web application deployment, interface design, and relational databases.'
          ]
        }
      ] as GymExperience[]
    },
    footerSection: {
      title: 'POKÉMON CENTER // SAVE GAME & CONTACT',
      subtitle:
        'Looking to hire a proactive developer for your team (Spain or International) or need to automate a business workflow?',
      saveBtn: '💾 Save Game (Copy contact summary)',
      savedConfirmation: 'GAME SAVED! Trainer profile status verified.'
    }
  }
};