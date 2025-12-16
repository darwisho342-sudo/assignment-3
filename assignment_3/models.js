export class Student {
  constructor(id, name, courses = []) {
    // Define immutable id (read-only, non-configurable)
    Object.defineProperty(this, "id", {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true,
    });

    this.name = name;
    this.courses = Array.isArray(courses) ? [...courses] : [];
  }

  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  getAverage() {
    if (this.courses.length === 0) return 0;

    const sum = this.courses.reduce((acc, c) => acc + c.grade, 0);
    return sum / this.courses.length;
  }
}
