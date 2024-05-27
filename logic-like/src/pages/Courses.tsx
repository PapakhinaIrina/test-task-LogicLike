import { useEffect, useState } from "react";
import { CourseCards } from "../shared/course/courseCards";
import { MenuList } from "../shared/menuList/menuList";
import { Course } from "../shared/api/models/Cards";
import { URL } from "../shared/api/services/Url";

const allCourses = "Все темы";

export const Courses = () => {
  const [courseCards, setCourseCards] = useState<Course[]>([]);
  const [filtredCards, setFiltredCards] = useState<Course[]>([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        return setFiltredCards(res), setCourseCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const tags = courseCards.map((card) => card.tags).flat();
  const uniqueTags = [allCourses, ...new Set(tags)];

  const filerByTag = (tag: string) => {
    if (tag === allCourses) {
      setFiltredCards(courseCards);
    } else {
      setFiltredCards(courseCards);
      setFiltredCards((filtredCards) =>
        filtredCards.filter((card) => card.tags.includes(tag))
      );
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        padding: "24px",
        margin: "0 auto",
      }}
    >
      <div>
        <MenuList uniqueTags={uniqueTags} onClick={filerByTag} />
      </div>

      <div>
        <CourseCards courseCards={filtredCards} />
      </div>
    </div>
  );
};
