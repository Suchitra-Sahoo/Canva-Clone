import React from "react";
import { shapesSettingList } from "../Options";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import FontStyles from "./FontStyles";

function ShapesSettings() {
  return (
    <div className="flex gap-6">
      {shapesSettingList.map((shape, index) => (
        <div
          key={index}
          className="hover:scale-105 transition-all cursor-pointer"
        >
          <Popover asChild>
         
            <PopoverTrigger>   <shape.icon /></PopoverTrigger>
            <PopoverContent>
              {shape.component}
            </PopoverContent>
          </Popover>
        </div>
      ))}
    </div>
  );
}

export default ShapesSettings;
