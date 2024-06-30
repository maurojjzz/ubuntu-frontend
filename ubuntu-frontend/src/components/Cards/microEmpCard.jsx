import { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Collapse,
  Button,
  useTheme, // Importa useTheme para acceder al tema
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ExpandMoreButton = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  // alignItems:"center",
  
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CustomCard = ({
  images,
  title,
  subtitle,
  category,
  location,
  details,
  moreInf,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const theme = useTheme(); // Accede al tema

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Card
      style={{
        backgroundColor: theme.palette.primary.grisClaro,
        borderColor: theme.palette.primary.azul,
        border: "3px solid",
        borderRadius: "16px",
      }}
    >
      <div
        style={{
          position: "relative",
          // borderColor: theme.palette.primary.naranja,
          // border: "2px solid",
        }}
      >
        <div
          style={{
            margin: "16px",
            position: "relative",
          }}
        >
          <IconButton
            onClick={handlePrevImage}
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <CardMedia
            component="img"
            height="144"
            width="304"
            image={images[currentImageIndex]}
            alt="Image"
            style={{
              borderRadius: "16px",
            }}
          />

          <IconButton
            onClick={handleNextImage}
            style={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>

      {/* <CardHeader title={title} subheader={subtitle} /> */}

      <CardContent>
        <Typography variant="body1" color={theme.palette.primary.negro} >
          {title}
        </Typography>
        <Typography variant="body2" color={theme.palette.primary.azul}>
          {subtitle}
        </Typography>

        <Typography variant="body2" color={theme.palette.primary.negro}>
          {category}
        </Typography>
        <Typography variant="body2" color={theme.palette.primary.negro}>
          <LocationOnIcon fontSize="small" /> {location}
        </Typography>
      </CardContent>

      <CardActions disableSpacing style={{ display: 'flex', justifyContent: 'center' }}>
        <ExpandMoreButton
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          style={{
            backgroundColor: theme.palette.primary.grisClaro,
            color: theme.palette.primary.azul,
            fontSize: "14px",
          }}
        >
          <ExpandMoreIcon />
        </ExpandMoreButton>
      </CardActions>


      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{details}</Typography>
        </CardContent>
      </Collapse>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{moreInf}</Typography>
        </CardContent>
      </Collapse>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
  <div style={{ display: 'flex', justifyContent: 'center', paddingBottom:"24px"}}>
    <Button
      size="small"
      href=""
      style={{
        backgroundColor: theme.palette.primary.azul,
        color: "white",
        borderRadius: "100px"        
      }}
    >
      Contactar
    </Button>
  </div>
</Collapse>

    </Card>
  );
};

export default CustomCard;
