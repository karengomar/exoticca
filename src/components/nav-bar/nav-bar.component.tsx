import {
  Box,
  Collapse,
  Grid,
  IconButton,
  IconButtonProps,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NavBarMenu() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        backgroundColor: "#2a2a2a",
        left: 0,
        top: 0,
        bottom: 10,
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        zIndex: 3,
        boxShadow: 1,
      }}
    >
      <Grid sx={{ marginTop: 5 }}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div>Hola</div>
        </Collapse>
      </Grid>
    </Box>
  );
}
