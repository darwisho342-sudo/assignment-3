export function fetchStudents(callback) {
  const rawData = [
    { id: 1, name: "Ali", courses: [{ courseId: 101, grade: 90 }, { courseId: 102, grade: 85 }] },
    { id: 2, name: "fatih", courses: [{ courseId: 101, grade: 70 }, { courseId: 102, grade: 95 }] },
    { id: 3, name: "omar", courses: [{ courseId: 101, grade: 60 }, { courseId: 102, grade: 55 }] }
  ];

  setTimeout(() => {
    callback(rawData);
  }, 2000);
}
