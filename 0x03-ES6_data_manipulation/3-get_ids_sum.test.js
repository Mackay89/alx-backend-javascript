import getListStudents from './0-get_list_students.js';
import getStudentIdsSum from './3-get_ids_sum.js';

describe('getStudentIdsSum', () => {
  it('should return the sum of all student ids', () => {
    const students = getListStudents();
    const expectedSum = 8; // 1 + 2 + 5
    expect(getStudentIdsSum(students)).toBe(expectedSum);
  });

  it('should return 0 if the student list is empty', () => {
    const students = [];
    const expectedSum = 0;
    expect(getStudentIdsSum(students)).toBe(expectedSum);
  });
});
