(function() {
  const container = document.getElementById('malla-container');

  // Recuperar cursos completados desde localStorage
  let completed = new Set(JSON.parse(localStorage.getItem('completedCourses') || '[]'));

  // Mapear divs y datos
  const courseDivMap = new Map();  // nombre -> div
  const courseDataMap = new Map(); // nombre -> { requisitos }

  function buildMalla() {
    malla.forEach(sem => {
      const semDiv = document.createElement('div');
      semDiv.className = 'semestre';

      const header = document.createElement('h2');
      header.textContent = sem.semestre;
      semDiv.appendChild(header);

      sem.ramos.forEach(r => {
        const div = document.createElement('div');
        div.className = 'ramo';
        div.textContent = r.nombre;

        semDiv.appendChild(div);

        courseDivMap.set(r.nombre, div);
        courseDataMap.set(r.nombre, r);

        // Click handler
        div.addEventListener('click', () => toggleCourse(r.nombre));
      });

      container.appendChild(semDiv);
    });
  }

  function isUnlocked(courseName) {
    const { requisitos } = courseDataMap.get(courseName);
    return requisitos.every(req => completed.has(req));
  }

  function updateUI() {
    courseDivMap.forEach((div, name) => {
      div.classList.remove('blocked', 'unlocked', 'completed');

      if (completed.has(name)) {
        div.classList.add('completed');
      } else if (isUnlocked(name)) {
        div.classList.add('unlocked');
      } else {
        div.classList.add('blocked');
      }
    });
  }

  function toggleCourse(name) {
    if (!isUnlocked(name) && !completed.has(name)) return; // Still blocked

    if (completed.has(name)) {
      completed.delete(name);
    } else {
      completed.add(name);
    }

    // Persistir
    localStorage.setItem('completedCourses', JSON.stringify([...completed]));

    // Actualizar todas las dependencias
    updateUI();
  }

  buildMalla();
  updateUI();
})();
