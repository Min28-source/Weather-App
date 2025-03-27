import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function InfoBox({ info }) {
  const thunder_img =
    "https://images.unsplash.com/photo-1583459094467-e0db130c0dea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rain_img =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const sunny_img =
    "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const snowy_image =
    "https://plus.unsplash.com/premium_photo-1671490807744-132acfe1eab4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const default_img =
    "https://images.unsplash.com/photo-1529126894674-8dd7cb884766?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              info.temprature > 25 && info.humidity < 50
                ? sunny_img
                : info.temprature >= 15 &&
                  info.temprature <= 30 &&
                  info.humidity > 60
                ? rain_img
                : info.temprature > 18 &&
                  info.temprature < 35 &&
                  info.humidity >= 70 &&
                  info.humidity <= 80
                ? thunder_img
                : info.temprature >= -10 && info.temprature <= 15
                ? snowy_image
                : default_img
            }
            alt="weather in your area is displayed below"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.name}
              <br />
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Humidity : {info.humidity}%
              <br />
              Temprature : {info.temprature}&deg;C
              <br />
              Minimum temprature : {info.min_temprature}&deg;C
              <br />
              Maximum temprature : {info.max_temprature}&deg;C
              <br />
              <p>
                Weather can be described as <i>{info.description}</i> Feels like{" "}
                {info.feels_like}&deg;C
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
