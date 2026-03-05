import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: "1",
    name: "Introduction to Computer Science",
    code: "CS101",
    department: "CS",
    description:
      "A fundamental course covering the basics of programming and computer systems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Data Structures and Algorithms",
    code: "CS201",
    department: "CS",
    description:
      "Study of efficient data storage and algorithmic problem-solving techniques.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Web Development",
    code: "IT301",
    department: "IT",
    description:
      "Building modern web applications using HTML, CSS, and JavaScript frameworks.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Linear Algebra",
    code: "MATH201",
    department: "Math",
    description:
      "Mathematical study of vectors, matrices, and linear transformations.",
    createdAt: new Date().toISOString(),
  },
  {
    id: "5",
    name: "Database Systems",
    code: "CS302",
    department: "CS",
    description:
      "Introduction to relational databases, SQL, and database design principles.",
    createdAt: new Date().toISOString(),
  },
];

export const MOCK_DEPARTMENTS = [
  { id: "1", name: "Computer Science", code: "CS" },
  { id: "2", name: "Information Technology", code: "IT" },
  { id: "3", name: "Mathematics", code: "Math" },
];
