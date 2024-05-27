import { Card, CardContent, CardMedia } from "@mui/material";
import { FC } from "react";

type CourseCardProps = {
  id: string;
  url: string;
  name: string;
  description: string;
  backgroundColor: string;
};

export const CourseCard: FC<CourseCardProps> = ({
  id,
  url,
  name,
  description,
  backgroundColor,
}) => {
  return (
    <div>
      <Card
        sx={{
          width: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "18px",
          backgroundColor: backgroundColor,
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "250px",
          }}
          image={url}
          alt={description}
          id={id}
        />
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingLeft: "60px",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "white",
          }}
        >
          {name}
        </CardContent>
      </Card>
    </div>
  );
};
