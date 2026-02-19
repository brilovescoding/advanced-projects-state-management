'use client'; 

import { useState } from "react";
import { Input, Card, CardBody } from "@heroui/react";

// Mock data - defined outside the component so it doesn't get recreated on every render.
const ALL_PROJECTS = [
  { id: 1, title: "AI Image Generator" },
  { id: 2, title: "Blockchain Voting System" },
  { id: 3, title: "Machine Learning Traffic Predictor" },
  { id: 4, title: "NextJS E-Commerce Store" },
  { id: 5, title: "Python Web Scraper" },
];

export default function HeroSearch() {
  // TODO 1: Create a state variable called 'searchTerm' and a setter 'setSearchTerm'.
  // Initialize it with an empty string ("").
  

  // TODO 2: Create a new array called 'filteredProjects'.
  // Use the .filter() method on ALL_PROJECTS to only include projects whose 
  // title includes the 'searchTerm' (Hint: use .toLowerCase() for better searching!)
  

  return (
    <div className="max-w-xl mx-auto p-8 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">CS Project Directory</h1>
        <p className="text-gray-500">Search for a project below.</p>
      </div>

      {/* SEARCH BAR */}
      <Input
        isClearable
        placeholder="Search projects..."
        size="lg"
        // TODO 3: Connect the Input 'value' to your 'searchTerm' state
        
        // TODO 4: Update 'searchTerm' state when the user types (using onChange or onValueChange)
        
      />

      {/* RESULTS LIST */}
      <div className="flex flex-col gap-3">
        {/* TODO 5: Change ALL_PROJECTS.map to map over your new 'filteredProjects' array instead */}
        {ALL_PROJECTS.map((project) => (
          <Card key={project.id}>
            <CardBody>
              <p className="text-lg">{project.title}</p>
            </CardBody>
          </Card>
        ))}

        {/* Bonus UI: Show this message if the search yields no results */}
        {/* TODO 6: Uncomment this conditionally based on filteredProjects.length */}
        {/* <p className="text-center text-gray-500 mt-4">No projects found matching your search.</p> */}
      </div>
    </div>
  );
}