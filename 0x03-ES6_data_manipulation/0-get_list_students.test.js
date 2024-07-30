import getListStudents from './0-get_list_students';

describe('getListStudents', () => {
  it('should return an array of student objects', () => {
    const students = getListStudents();
    expect(students).toEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 2, firstName: 'James', location: 'Columbia' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ]);
  });
});

