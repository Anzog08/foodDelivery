import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Divider, Typography } from "@mui/material";


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
        <Typography variant="h4" gutterBottom>
        Бүртгүүлэх
      </Typography>
      <div>
        <TextField
          
          id="outlined-name-input"
          label="Нэр"
          defaultValue="Нэрээ оруулна уу"
        />
        <TextField
          
          id="outlined-email-input"
          label="И-мэйл"
          defaultValue="И-мэйл хаягаа оруулна уу"
        />
        <TextField
          id="outlined-address-input"
          label="Хаяг"
          defaultValue="Та хаягаа оруулна уу"
        />
        <TextField
          id="outlined-password-input"
          label="Нууц үгээ оруулна уу"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-re-password-input"
          label="Нууц үгээ давтан оруулна уу"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </Box>
  );
}
