import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Collapse,
  Button,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CustomLocationIcon from "../../assets/img/location_on.png";

const ExpandMoreButton = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
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

  const renderDots = () => {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "8px" }}
      >
        {images.map((_, index) => (
          <div
            key={index}
            style={{
              height: "6px",
              width: "6px",
              borderRadius: "50%",
              margin: "0 2px",
              backgroundColor:
                currentImageIndex === index
                  ? theme.palette.primary.azul
                  : "white",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <Card
      style={{
        backgroundColor: theme.palette.primary.grisClaro,
        borderRadius: "16px",
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", //corregir esto, me carga un shadown por defecto
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            margin: "16px",
            position: "relative",
          }}
        >
          {currentImageIndex > 0 && (
            <IconButton
              onClick={handlePrevImage}
              style={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                zIndex: 1,
                color: "white",
                width: "7.41px",
                height: "12px",
                padding: "20px",
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}

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
              color: "white",
              width: "7.41px",
              height: "12px",
              padding: "20px",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
        {renderDots()}
      </div>

      <CardContent>
        <Typography
          color={theme.palette.primary.negro}
          style={{
            fontFamily: "'Lato' ",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "25px",
            marginBottom: "4px",
          }}
        >
          {title}
        </Typography>

        {expanded && (
          <Typography
            color={theme.palette.primary.azul}
            style={{
              fontFamily: "'Lato' ",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "18px",
              marginBottom: "4px",
            }}
          >
            {subtitle}
          </Typography>
        )}

        <Typography
          color={theme.palette.primary.negro}
          style={{
            fontFamily: "'Lato' ",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "18px",
          }}
        >
          {category}
        </Typography>

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
        >
          <img
            src={CustomLocationIcon}
            alt="Location Icon"
            style={{ width: "20px", marginRight: "8px" }}
          />
          <Typography
            color={theme.palette.primary.negro}
            style={{
              fontFamily: "'Lato'",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            {location}
          </Typography>
        </div>
      </CardContent>

      {!expanded && (
        <CardActions
          disableSpacing
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ExpandMoreButton
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            style={{
              backgroundColor: theme.palette.primary.grisClaro,
              color: theme.palette.primary.azul,
            }}
          >
            <ExpandMoreIcon style={{ 
              fontSize: "50px"
               }} />
          </ExpandMoreButton>
        </CardActions>
      )}

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "24px",
          }}
        >
          <Button
            size="small"
            href="mailto:tu-email@ejemplo.com"
            style={{
              backgroundColor: theme.palette.primary.azul,
              color: "white",
              borderRadius: "100px",
            }}
          >
            Contactar
          </Button>
        </div>
        <CardActions
          disableSpacing
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ExpandMoreButton
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show less"
            style={{
              backgroundColor: theme.palette.primary.grisClaro,
              color: theme.palette.primary.azul,
            }}
          >
<ExpandMoreIcon style={{ 
              fontSize: "50px"
               }} />          </ExpandMoreButton>
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default CustomCard;
