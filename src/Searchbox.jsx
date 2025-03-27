import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [name, setName] = useState("");
  let [error, setError] = useState(false);
  let KEY = "YOUR_API_KEY";

  let makecall = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${KEY}&units=metric`
      );
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      let result = {
        name: jsonresponse.name,
        feels_like: jsonresponse.main.feels_like,
        humidity: jsonresponse.main.humidity,
        temprature: jsonresponse.main.temp,
        min_temprature: jsonresponse.main.temp_min,
        max_temprature: jsonresponse.main.temp_max,
        description: jsonresponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  function handlechange(event) {
    setName(event.target.value);
  }

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      setError(false);
      setName("");
      let info = await makecall();
      updateInfo(info);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <>
      <form onSubmit={handlesubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={name}
          onChange={handlechange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No places found!</p>}
      </form>
    </>
  );
}
