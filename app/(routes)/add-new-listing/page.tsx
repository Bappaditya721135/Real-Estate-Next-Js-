"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const page = () => {
  const [search, setSearch] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressList, setAddressList] = useState([]);
  const getAddress = async (search: string) => {
    try {
      const res = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${search}`,
      );
      if (res && res?.status === 200) {
        setAddressList(res?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectedAddressHandler = (address: any) => {
    if (address !== null) {
      setSelectedAddress(address);
    }
  };

  console.log("selectedAddress", selectedAddress);
  useEffect(() => {
    if (search?.length > 2) {
      console.log("use effect ran in side the block");
      getAddress(search);
    }
  }, [search]);

  return (
    <div className="flex min-h-[80vh] w-[100%] items-center justify-center">
      <div>
        <h2 className="m-[1rem] text-center text-[2rem]">Add New Listing</h2>
        <div className="flex w-[500px] flex-col items-center justify-center gap-[1rem] rounded border-2 border-solid p-[2rem] text-[1.2rem]">
          <div className="flex h-[50px] w-[100%] gap-[5px]">
            <div className="flex h-[100%] w-[50px] items-center justify-center rounded bg-primary text-white">
              <MapPin className="p-[2px]" />
            </div>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="enter place name"
              className="w-[100%] border-[1px] border-primary px-[1rem] outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="relative top-[-10px] w-[90%] rounded">
            {addressList?.length > 0 && (
              <ul className="scrollbar-hide absolute left-0 top-0 max-h-[400px] w-[100%] overflow-scroll overflow-y-scroll border-[1px] border-primary bg-white">
                {addressList?.map((address: any, i) => {
                  return (
                    <li
                      key={i}
                      className="cursor-pointer px-[1rem] py-[0.5rem] hover:bg-primary hover:text-white"
                      onClick={selectedAddressHandler}
                    >
                      <MapPin className="mr-[1rem] inline" />
                      {address?.display_name || "N/A"}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <Button className="mt-[2rem] w-[100%] bg-primary">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
