/*
It is unusual to ask OOPs question in the frontend interviews but Intuit is exception. It is known to ask atleast one OOPs question to the software engineers irrespective frontend or backend.

This is the question that was asked for SDE2 frontend role in Intuit.

Problem – Create Student and Teacher classes with some shared and some unique properties.

Required functionalities:
getTotalStrength()
getStudentInfo()
getTeacherSubjects()
And a few more operations.

To simplify the problem and provide a better understanding, please create a School class with Students and Teachers that should have additional properties as you can see in the example.

Example
Input:
const school = new School("Learnersbucket High School");

// Create students
const student1 = new Student("Harry Potter", 16, "S001", "harry@learnersbucket.com", "10th", "R001");
const student2 = new Student("Hermione Granger", 17, "S002", "hermione@learnersbucket.com", "11th", "R002");
const student3 = new Student("Ron Weasely", 15, "S003", "ron@learnersbucket.com", "9th", "R003");

// Create teachers
const teacher1 = new Teacher("Mr. Rubeus Hagrid", 35, "T001", "rubeus@learnersbucket.com", "Mathematics", 10, 50000);
const teacher2 = new Teacher("Mr. Albus Dumbledore", 28, "T002", "albus@learnersbucket.com", "English", 5, 45000);

// Add students
student1.enrollInSubject("Mathematics");
student1.enrollInSubject("Physics");
student1.addMark("Mathematics", 85);
student1.addMark("Mathematics", 92);
student1.addMark("Physics", 78);
student1.updateAttendance(95);

student2.enrollInSubject("English");
student2.enrollInSubject("History");
student2.addMark("English", 88);
student2.addMark("History", 82);
student2.updateAttendance(87);

// Add teachers
teacher1.assignSubject("Mathematics");
teacher1.assignSubject("Physics");
teacher1.assignStudent("S001");
teacher1.assignStudent("S003");

teacher2.assignSubject("English");
teacher2.assignSubject("Literature");
teacher2.assignStudent("S002");

// Enroll into school
school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);
school.addTeacher(teacher1);
school.addTeacher(teacher2);

// Test the functionalities
console.log("--- TOTAL STRENGTH ---");
console.log(school.getTotalStrength());

console.log("--- STUDENT INFO ---");
console.log(student1.getStudentInfo());

console.log("--- TEACHER SUBJECTS ---");
console.log(teacher1.getTeacherSubjects());

console.log("--- ADDITIONAL OPERATIONS ---");
console.log("School Stats:", school.getSchoolStats());
console.log("Teacher Info:", teacher2.getTeacherInfo());
console.log("Teacher Workload:", teacher1.getWorkload());
console.log("Students in 10th grade:", school.getStudentsByGrade("10th").map(s => s.name));

Output:
"--- TOTAL STRENGTH ---"
// [object Object]
{
  "totalStudents": 3,
  "totalTeachers": 2,
  "totalStrength": 5,
  "inactiveMembers": 0
}

"--- STUDENT INFO ---"
// [object Object]
{
  "name": "Harry Potter",
  "age": 16,
  "id": "S001",
  "email": "harry@learnersbucket.com",
  "isActive": true,
  "grade": "10th",
  "rollNumber": "R001",
  "subjects": [
    "Mathematics",
    "Physics"
  ],
  "averageMarks": 85,
  "attendance": 95,
  "performance": "Good"
}

"--- TEACHER SUBJECTS ---"
// [object Object]
{
  "teacherId": "T001",
  "teacherName": "Mr. Rubeus Hagrid",
  "department": "Mathematics",
  "subjects": [
    "Mathematics",
    "Physics"
  ],
  "totalSubjects": 2,
  "experience": 10
}

"--- ADDITIONAL OPERATIONS ---"
"School Stats:" // [object Object]
{
  "schoolName": "Learnersbucket High School",
  "totalStudents": 3,
  "totalTeachers": 2,
  "totalStrength": 5,
  "inactiveMembers": 0,
  "averageStudentAge": 16,
  "averageTeacherExperience": 7.5,
  "studentTeacherRatio": 1.5
}

"Teacher Info:" // [object Object]
{
  "name": "Mr. Albus Dumbledore",
  "age": 28,
  "id": "T002",
  "email": "albus@learnersbucket.com",
  "isActive": true,
  "department": "English",
  "experience": 5,
  "salary": 45000,
  "subjects": [
    "English",
    "Literature"
  ],
  "studentsCount": 1,
  "workload": {
    "subjects": 2,
    "students": 1,
    "totalWorkload": 2
  }
}

"Teacher Workload:" // [object Object]
{
  "subjects": 2,
  "students": 2,
  "totalWorkload": 4
}

"Students in 10th grade:" // [object Array] (1)
["Harry Potter"]

Related Links - https://leetcode.com/discuss/post/6770567/intuit-senior-frontend-engineer-by-anony-x1a5/
*/

class SchoolMember {
  constructor(name, age, id, email) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.email = email;
    this.isActive = true;
  }

  getBasicInfo() {
    return {
      name: this.name,
      age: this.age,
      id: this.id,
      email: this.email,
      isActive: this.isActive,
    };
  }

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  toggleStatus() {
    this.isActive = !this.isActive;
  }
}

class Student extends SchoolMember {
  constructor(name, age, id, email, grade, rollNumber) {
    super(name, age, id, email);
    this.grade = grade;
    this.rollNumber = rollNumber;
    this.subjects = [];
    this.marks = {};
    this.attendence = 0;
    this.type = "student";
  }

  enrollInSubject(subject) {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject);
      this.marks[subject] = [];
    }
  }

  addMark(subject, mark) {
    if (this.subjects.includes(subject)) {
      this.marks[subject].push(mark);
    } else {
      throw new Error(`Student is not enrolled in ${subject}`);
    }
  }

  getStudentInfo() {
    const averageMarks = this.calculateAverageMarks();
    return {
      ...this.getBasicInfo(),
      grade: this.grade,
      rollNumber: this.rollNumber,
      subjects: this.subjects,
      averageMarks: averageMarks,
      attendance: this.attendance,
      performance: this.getPerformanceLevel(averageMarks),
    };
  }

  calculateAverageMarks() {
    const allMarks = Object.values(this.marks).flat();
    if (allMarks.length === 0) return 0;
    return allMarks.reduce((sum, mark) => sum + mark, 0) / allMarks.length;
  }

  getPerformanceLevel(average) {
    if (average >= 90) return "Excellent";
    if (average >= 80) return "Good";
    if (average >= 70) return "Average";
    if (average >= 60) return "Below Average";
    return "Poor";
  }

  updateAttendance(percentage) {
    this.attendance = Math.max(0, Math.min(100, percentage));
  }
}

class Teacher extends SchoolMember {
  constructor(name, age, id, email, department, experience, salary) {
    super(name, age, id, email);
    this.department = department;
    this.experience = experience;
    this.salary = salary;
    this.subjects = [];
    this.students = [];
    this.type = "teacher";
  }

  assignSubject(subject) {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject);
    }
  }

  removeSubject(subject) {
    this.subjects = this.subjects.filter((subject) => subject !== subject);
  }

  getTeacherSubjects() {
    return {
      teacherId: this.id,
      teacherName: this.name,
      department: this.department,
      subjects: this.subjects,
      totalSubjects: this.subjects.length,
      experience: this.experience,
    };
  }

  assignStudent(studentId) {
    if (!this.students.includes(studentId)) {
      this.students.push(studentId);
    }
  }

  getWorkload() {
    return {
      subjects: this.subjects.length,
      students: this.students.length,
      totalWorkload: this.subjects.length * this.students.length,
    };
  }

  updateSalary(newSalary) {
    this.salary = newSalary;
  }

  getTeacherInfo() {
    return {
      ...this.getBasicInfo(),
      department: this.department,
      experience: this.experience,
      salary: this.salary,
      subjects: this.subjects,
      studentsCount: this.students.length,
      workload: this.getWorkload(),
    };
  }
}

class School {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.teachers = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  addTeacher(teacher) {
    this.teachers.push(teacher);
  }

  getTotalStrength() {
    const activeStudents = this.students.filter((s) => s.isActive).length;
    const activeTeachers = this.teachers.filter((t) => t.isActive).length;

    return {
      totalStudents: activeStudents,
      totalTeachers: activeTeachers,
      totalStrength: activeStudents + activeTeachers,
      inactiveMembers:
        this.students.filter((s) => !s.isActive).length +
        this.teachers.filter((t) => !t.isActive).length,
    };
  };

  getStudentsByGrade(grade) {
    return this.students.filter((student) => student.grade === grade);
  };

  getTeachersByDepartment(department) {
    return this.teachers.filter((teacher) => teacher.department === department);
  };

  getSchoolStats() {
    const strength = this.getTotalStrength();
    const avgStudentAge =
      this.students.reduce((sum, s) => sum + s.age, 0) / this.students.length ||
      0;
    const avgTeacherExp =
      this.teachers.reduce((sum, t) => sum + t.experience, 0) /
        this.teachers.length || 0;

    return {
      schoolName: this.name,
      ...strength,
      averageStudentAge: Math.round(avgStudentAge * 100) / 100,
      averageTeacherExperience: Math.round(avgTeacherExp * 100) / 100,
      studentTeacherRatio:
        Math.round((strength.totalStudents / strength.totalTeachers) * 100) /
        100,
    };
  }
}


const school = new School("Learnersbucket High School");

// Create students
const student1 = new Student("Harry Potter", 16, "S001", "harry@learnersbucket.com", "10th", "R001");
const student2 = new Student("Hermione Granger", 17, "S002", "hermione@learnersbucket.com", "11th", "R002");
const student3 = new Student("Ron Weasely", 15, "S003", "ron@learnersbucket.com", "9th", "R003");

// Create teachers
const teacher1 = new Teacher("Mr. Rubeus Hagrid", 35, "T001", "rubeus@learnersbucket.com", "Mathematics", 10, 50000);
const teacher2 = new Teacher("Mr. Albus Dumbledore", 28, "T002", "albus@learnersbucket.com", "English", 5, 45000);

// Add students
student1.enrollInSubject("Mathematics");
student1.enrollInSubject("Physics");
student1.addMark("Mathematics", 85);
student1.addMark("Mathematics", 92);
student1.addMark("Physics", 78);
student1.updateAttendance(95);

student2.enrollInSubject("English");
student2.enrollInSubject("History");
student2.addMark("English", 88);
student2.addMark("History", 82);
student2.updateAttendance(87);

// Add teachers
teacher1.assignSubject("Mathematics");
teacher1.assignSubject("Physics");
teacher1.assignStudent("S001");
teacher1.assignStudent("S003");

teacher2.assignSubject("English");
teacher2.assignSubject("Literature");
teacher2.assignStudent("S002");

// Enroll into school
school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);
school.addTeacher(teacher1);
school.addTeacher(teacher2);

// Test the functionalities
console.log("--- TOTAL STRENGTH ---");
console.log(school.getTotalStrength());

console.log("--- STUDENT INFO ---");
console.log(student1.getStudentInfo());

console.log("--- TEACHER SUBJECTS ---");
console.log(teacher1.getTeacherSubjects());

console.log("--- ADDITIONAL OPERATIONS ---");
console.log("School Stats:", school.getSchoolStats());
console.log("Teacher Info:", teacher2.getTeacherInfo());
console.log("Teacher Workload:", teacher1.getWorkload());
console.log("Students in 10th grade:", school.getStudentsByGrade("10th").map(s => s.name));