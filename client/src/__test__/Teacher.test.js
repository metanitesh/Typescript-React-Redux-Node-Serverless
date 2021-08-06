import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import { StaticRouter } from "react-router";
import Teacher from "../components/Teacher";

test("Teacher should display correct message", async () => {
  const teacher = render(
    <StaticRouter>
      <Teacher teacher={{
        id: 1,
        title: 'Javascript',
        teacher: 'Nitesh'
      }} />
    </StaticRouter>)


  const teacherInfo = await teacher.findByTestId('teacher-info');
  expect(teacherInfo.textContent).toContain("Javascript Thought by Nitesh");

});
