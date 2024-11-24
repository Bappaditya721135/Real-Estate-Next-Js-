"use client";
import React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

const page = () => {
  const getAddress = async () => {
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=kultikri`,
      );
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>page</h2>
      <Button onClick={getAddress}>get address</Button>
    </div>
  );
};

export default page;
