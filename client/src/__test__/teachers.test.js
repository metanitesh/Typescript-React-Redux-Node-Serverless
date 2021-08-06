import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router";
import CourseList from "../components/course-list";

beforeEach(async function () {
  fetch.resetMocks()
  // fetch.dontMock()
})

test("CourseList should display the list of teachers and course correctly", async () => {
  fetch.mockResponseOnce(
    JSON.stringify([
      {
      "id": 31,
      "teacher": "Sohail",
      "title": "ParaGliding"
      },
      {
      "id": 29,
      "teacher": "Go",
      "title": "Nitesh"
      }
    ])
  );
  const courses = render(
    <StaticRouter>
      <CourseList />
    </StaticRouter>)


  const teacherInfo = await courses.findByTestId('teachers-data');
  expect(teacherInfo.textContent).toContain("Nitesh Thought by Go");

});
