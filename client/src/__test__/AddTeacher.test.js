import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import AddTeacher from "../components/AddNewTeacher";


test("User should be able to enter teacher and course name", async () => {
  const teacher = render(
      <AddTeacher />
    )

    const teacherInput = await teacher.findByTestId('teacher-name');

    userEvent.type(teacherInput, 'Nitesh Sharma')
    expect(teacherInput).toHaveValue('Nitesh Sharma')
});
