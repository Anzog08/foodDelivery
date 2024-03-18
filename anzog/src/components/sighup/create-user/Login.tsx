import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

<Stack spacing={2} direction="row">
  <Button variant="text">Text</Button>
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
</Stack>;

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        width: "448px",
        height: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" gutterBottom>
        Нэвтрэх
      </Typography>
      <div>
        <TextField
          id="outlined-email-input"
          label="И-мэйл"
          defaultValue="И-мэйл хаягаа оруулна уу"
        />
        <TextField
          id="outlined-password-input"
          label="Нууц үг"
          type="password"
          autoComplete="current-password"
        />
        <Typography variant="h6" gutterBottom>
          Нууц үг сэргээх
        </Typography>
        <Button variant="contained">Нэвтрэх</Button>
        <Typography variant="h6" gutterBottom>
          эсвэл
        </Typography>
        <Button variant="contained">Бүртгүүлэх</Button>
      </div>
    </Box>
  );
}
