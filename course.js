import { courses } from "./data.js";
console.log(courses);
const coursesDiv = document.querySelector(".div-courses");
coursesDiv.innerHTML = "";

courses.forEach((course, i) => {
  const contentMarkup = course.courseContent
    .map((cc, i) => `<li>${cc}</li>`)
    .toString()
    .replaceAll(",", "");
  const markup = `
    <div class="course">
    <div class="div-course-img">
      <div class="course-img-wrapper">
        <img
          class="course-img"
          src="${course.coursePoster}"
          alt=""
        />
      </div>
    </div>
    <div class="div-course-content">
      <div class="div-content-wrapper">
        <div class="div-course-title">
          <p class="course-title">${course.courseName}</p>
        </div>
        <div class="dev-description">
          <ul>
            ${contentMarkup}
          </ul>
        </div>
      </div>
    </div>
  </div>
    `;
  coursesDiv.insertAdjacentHTML("beforeend", markup);
});
