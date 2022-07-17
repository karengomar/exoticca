import React, { useState } from "react";
import {
  Box,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../../../src/index.css";

interface CardImages {
  desktop: string;
  tablet: string;
  mobile: string;
}

type cardImagesTypes = "desktop" | "tablet" | "mobile";

export interface CardItemProps {
  id: number;
  title: string;
  destination: string;
  images: Array<CardImages>;
  days: number;
  fromPriceBeautify: string;
  oldPriceBeautify: string;
}

export default function CardItem({
  id,
  title,
  destination,
  images,
  days,
  fromPriceBeautify,
  oldPriceBeautify,
}: CardItemProps) {
  const [screen, setScreen] = useState<cardImagesTypes>("desktop");
  const HEIGHTS = {
    5: 4.2,
    6: 3.9,
  };

  return (
    <>
      <Card
        key={id}
        sx={{
          maxWidth: 345,
          marginRight: 5,
          marginTop: 10,
        }}
      >
        <CardActionArea>
          <Box>
            <CardMedia
              component="img"
              height="100%"
              image={images[0][screen]}
              alt={title}
              sx={{ position: "relative" }}
            />
            <Grid container spacing={2}>
              <Grid
                item
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  width: "100%",
                  bottom: 120,
                  left: 0,
                }}
                xs={12}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    color: "white",
                    fontSize: "24px",
                    fontWeight: "bold",
                    fontFamily: "Red Hat Text",
                    lineHeight: 1.17,
                  }}
                >
                  {destination}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 500,
                    fontFamily: "Red Hat Text",
                  }}
                >
                  {days} Days
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <CardContent
            sx={{
              padding: "16px",
              marginTop: "10px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    fontSize: "1rem",
                    fontWeight: 400,
                    fontFamily: "Red Hat Text",
                    minHeight: "44px",
                    lineHeight: 1.3,
                  }}
                >
                  {title}
                </Typography>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <Typography variant="body2" sx={{ color: "black" }}>
                    From
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "black",
                      textDecoration: "line-through",
                      fontFamily: "Red Hat Text",
                      fontWeight: 700,
                      lineHeight: 1.17,
                      marginLeft: "4px",
                    }}
                  >
                    {oldPriceBeautify}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "black",
                      fontSize: "1.5rem",
                      fontFamily: "Red Hat Text",
                      fontWeight: "bold",
                      lineHeight: 1.17,
                      marginLeft: "4px",
                    }}
                  >
                    {fromPriceBeautify}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
