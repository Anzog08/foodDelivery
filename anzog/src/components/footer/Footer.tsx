"use client";
import Image from "next/image";
import * as React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Stack from "@mui/material/Stack";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box, Divider, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function DirectionStack() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        width: "1440px",
        height: "545px",
        position: "relative",
        backgroundImage: "url(/foo.png)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        my={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border={{ border: "2px solid red" }}
        gap={4}
        p={2}
        sx={{
          color: "white",
          fontFamily: "inherit",
          fontSize: "bold",
          fontStyle: "inherit",
          fontWeight: 500,
        }}
      >
        <Image alt="" src="/Pinecone Logo/Main.png" width={41} height={41} />
        Food Delivery
        <Box
          display="flex"
          alignItems="center"
          gap={8}
          sx={{ color: "white", textDecoration: "underline" }}
        >
          Нүүр
          <Box sx={{ color: "white", textDecoration: "underline" }}>
            Холбоо барих
          </Box>
          <Box sx={{ color: "white", textDecoration: "underline" }}>
            Хоолны цэс
          </Box>
          <Box sx={{ color: "white", textDecoration: "underline" }}>
            Үйлчилгээний нөхцөл
          </Box>
          <Box sx={{ color: "white", textDecoration: "underline" }}>
            Хүргэлтийн бүс
          </Box>
          <Box sx={{ color: "white", textDecoration: "underline" }}>
            Нууцлалын бодлого
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={5} sx={{ color: "white" }}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Box>
        <Divider style={{ backgroundColor: "white", width: "1200px" }} />
        <Typography gutterBottom>
          <CopyrightIcon /> 2024 Pinecone Foods LLC
        </Typography>
        <Typography gutterBottom>
          Зохиогчийн эрх хуулиар хамгаалагдсан.
        </Typography>
      </Box>
    </Stack>
  );
}
