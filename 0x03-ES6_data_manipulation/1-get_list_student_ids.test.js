import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

describe('getListStudentIds', () => {
  it('should return an empty array if the input is not an array', () => {
    expect(getListStudentIds('hello')).toEqual([]);
  });

  it('should return an array of ids if the input is an array of student objects', () => {
    const students = getListStudents();
    expect(getListStudentIds(students)).toEqual([1, 2, 5]);
  });
});
