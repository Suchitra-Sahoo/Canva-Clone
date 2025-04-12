import { sideBarMenu } from '@/services/Options';
import React, { useState } from 'react';
import SidebarSettings from './SidebarSettings';

function SideBar() {
  const [selectedOption, setSelectedOption] = useState(null); // Default to null instead of empty string

  return (
    <div className="flex">
      <div className="space-y-4 w-[120px] border-r shadow-sm h-screen pt-2">
        {sideBarMenu.map((menu, index) => {
          const Icon = menu.icon; // Get the icon component
          const isSelected = selectedOption?.name === menu.name;

          return (
            <div
              key={index}
              className={`flex flex-col items-center space-y-1 cursor-pointer p-2 rounded-md transition-colors duration-200 
                ${isSelected ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-800'}`}
              onClick={() => setSelectedOption(menu)} // Set the whole menu object
            >
              <Icon className={`w-6 h-6 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
              <h2 className="text-sm font-medium">{menu.name}</h2>
            </div>
          );
        })}
      </div>

      {/* Render additional settings or content for selected option */}
      <SidebarSettings selectedOption={selectedOption} />
    </div>
  );
}

export default SideBar;
