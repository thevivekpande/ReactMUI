import React from "react";
import { Avatar, Stack, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Avatar
          src="https://randomuser.me/api/portraits/women/79.jpg"
          alt="John Doe"
        />
        <Avatar
          src="https://randomuser.me/api/portraits/men/79.jpg"
          alt="John Doe"
        />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <AvatarGroup>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="John Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <AvatarGroup>
          <Avatar
            variant="rounded"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="John Doe"
            sx={{ bgcolor: "success.light", width: 50, height: 50 }}
          />
          <Avatar
            variant="rounded"
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="John Doe"
            sx={{ bgcolor: "success.light", width: 50, height: 50 }}
          />
        </AvatarGroup>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="John Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/79.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>
    </Stack>
  );
};
