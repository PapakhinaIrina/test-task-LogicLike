import { FC } from "react";
import { CourseCard } from "../../features/menu/lib/courseCard";
import { Course } from "../api/models/Cards";

interface ICourseCardsProps {
  courseCards: Course[];
}

export const CourseCards: FC<ICourseCardsProps> = ({ courseCards }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
      }}
    >
      {courseCards.length &&
        courseCards.map((card, index) => {
          return (
            <CourseCard
              key={index}
              id={card.id}
              url={card.image}
              name={card.name}
              description={card.id}
              backgroundColor={card.bgColor}
            />
          );
        })}
    </div>
  );
};
