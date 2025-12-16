export function calculateClassAverage(students, courseId) {
  
  const grades = students
    .map(s => s.courses.find(c => c.courseId === courseId))
    .filter(Boolean)
    .map(c => c.grade);

  if (grades.length === 0) return 0;

  const total = grades.reduce((acc, g) => acc + g, 0);
  return total / grades.length;
}

export function findTopStudent(students) {
  return students.reduce((best, current) => {
    return current.getAverage() > best.getAverage() ? current : best;
  });
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}
