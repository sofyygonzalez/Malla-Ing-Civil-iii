const malla = [
  {
    semestre: "Cuarto Semestre",
    ramos: [
      { nombre: "Economía", requisitos: [] },
      { nombre: "Cálculo Avanzado y Aplicaciones", requisitos: [] },
      { nombre: "Electromagnetismo", requisitos: [] },
      { nombre: "Termodinámica", requisitos: [] },
      { nombre: "Módulo Interdisciplinario", requisitos: [] }
    ]
  },
  {
    semestre: "Quinto Semestre",
    ramos: [
      { nombre: "Optimización", requisitos: ["Cálculo Avanzado y Aplicaciones"] },
      { nombre: "Probabilidades y Estadística", requisitos: [] },
      { nombre: "Mecánica Estructural", requisitos: [] },
      { nombre: "Análisis de Sistemas de Transporte", requisitos: ["Cálculo Avanzado y Aplicaciones", "Economía"] },
      { nombre: "Mecánica de Fluidos", requisitos: ["Cálculo Avanzado y Aplicaciones", "Termodinámica"] }
    ]
  },
  {
    semestre: "Sexto Semestre",
    ramos: [
      { nombre: "Ingeniería Hidráulica", requisitos: ["Mecánica de Fluidos"] },
      { nombre: "Ingeniería Ambiental", requisitos: ["Mecánica de Fluidos"] },
      { nombre: "Ingeniería Estructural", requisitos: ["Mecánica Estructural"] },
      { nombre: "Cálculo Numérico", requisitos: ["Cálculo Avanzado y Aplicaciones"] },
      { nombre: "Topografía", requisitos: ["Cálculo Avanzado y Aplicaciones"] }
    ]
  },
  {
    semestre: "Séptimo Semestre",
    ramos: [
      { nombre: "Evaluación de Proyectos", requisitos: ["Economía", "Probabilidades y Estadística"] },
      { nombre: "Ingeniería Geotécnica", requisitos: ["Mecánica Estructural", "Mecánica de Fluidos"] },
      { nombre: "Dinámica de Estructuras", requisitos: ["Ingeniería Estructural", "Cálculo Numérico"] },
      { nombre: "Ingeniería de Materiales", requisitos: ["Mecánica Estructural", "Probabilidades y Estadística"] },
      { nombre: "Electivo", requisitos: [] },
      { nombre: "Práctica 1", requisitos: ["Mecánica de Fluidos", "Mecánica Estructural", "Análisis de Sistemas de Transporte"] }
    ]
  },
  {
    semestre: "Octavo Semestre",
    ramos: [
      { nombre: "Construcción", requisitos: ["Evaluación de Proyectos", "Topografía"] },
      { nombre: "Planificación y Gestión de Proyectos", requisitos: ["Evaluación de Proyectos"] },
      { nombre: "Diseño Sísmico", requisitos: ["Ingeniería Geotécnica", "Dinámica de Estructuras"] },
      { nombre: "Diseño Hormigón Armado", requisitos: ["Ingeniería Estructural", "Ingeniería de Materiales"] },
      { nombre: "Formación Integral", requisitos: [] }
    ]
  },
  {
    semestre: "Noveno Semestre",
    ramos: [
      { nombre: "Diseño Geotécnico", requisitos: ["Ingeniería Geotécnica"] },
      { nombre: "Diseño Estructuras de Acero", requisitos: ["Ingeniería Estructural", "Ingeniería de Materiales"] },
      { nombre: "Proyecto de Hormigón Armado", requisitos: ["Diseño Sísmico", "Diseño Hormigón Armado"] },
      { nombre: "Proyectos de Construcción", requisitos: ["Ingeniería de Materiales", "Construcción"] },
      { nombre: "Electivo Especialidad", requisitos: [] },
      { nombre: "Práctica 2", requisitos: ["Práctica 1", "Ingeniería Hidráulica"] }
    ]
  },
  {
    semestre: "Décimo Semestre",
    ramos: [
      { nombre: "Mecánica de Suelos Avanzada", requisitos: ["Diseño Geotécnico"] },
      { nombre: "Proyecto de Estructuras de Acero", requisitos: ["Diseño Sísmico", "Diseño Estructuras de Acero"] },
      { nombre: "Ingeniería Estructural Avanzada", requisitos: ["Proyecto de Hormigón Armado"] },
      { nombre: "Electivo Especialidad", requisitos: [] },
      { nombre: "Electivo Especialidad", requisitos: [] },
      { nombre: "Trabajo de Habilitación Profesional I", requisitos: [] }
    ]
  },
  {
    semestre: "Onceavo Semestre",
    ramos: [
      { nombre: "Formación Integral Especialidad", requisitos: [] },
      { nombre: "Práctica 3", requisitos: ["Práctica 2"] },
      { nombre: "Actividad de Habilitación Profesional II", requisitos: ["Trabajo de Habilitación Profesional I"] }
    ]
  }
];
