import React from 'react';

export default function AddTeacher() {
  return (
    <form>
      
      <label>Name: 
        <input type="text" placeholder="TeacherName"/>
      </label>
      
      <label>Course Title: 
        <input type="text" placeholder="TeacherName"/>
      </label>

      <button>Add Teacher</button>
    </form>
  );
}
