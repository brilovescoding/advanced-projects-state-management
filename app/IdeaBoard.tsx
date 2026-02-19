'use client';

import { useState } from "react";
import { Input, Button, Card, CardBody } from "@heroui/react";

export default function IdeaBoard() {
  // 1. STATE SETUP
  // inputValue tracks what the user is typing.
  const [inputValue, setInputValue] = useState("");
  
  // ideas tracks our list of project ideas. We've added one to start!
  const [ideas, setIdeas] = useState([
    { id: 1, text: "Build an AI Study Buddy" }
  ]);

  // 2. EVENT HANDLERS
  const handleAddIdea = () => {
    // Prevent adding empty ideas
    if (inputValue.trim() === "") return;

    const newIdea = {
      id: Date.now(), // Creates a unique ID for React's 'key' prop
      text: inputValue
    };

    // TODO 1: Update the 'ideas' state by creating a NEW array with the old ideas plus the newIdea.
    // Hint: Use the spread operator [...]
    

    // TODO 2: Reset the 'inputValue' state to an empty string to clear the input box.
    
  };

  const handleDeleteIdea = (idToRemove: number) => {
    // TODO 3: Update the 'ideas' state by filtering out the idea that matches 'idToRemove'.
    // Hint: Use ideas.filter(...)
    
  };

  // 3. THE UI
  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Project Idea Board</h2>

      {/* Input Section */}
      <div className="flex gap-2">
        <Input 
          placeholder="Type a new project idea..."
          // TODO 4: Connect the Input's value to your 'inputValue' state
          value={/* Your code here */}
          // TODO 5: Update the 'inputValue' state when the user types
          onChange={(e) => /* Your code here */}
        />
        <Button color="primary" onPress={handleAddIdea}>
          Add
        </Button>
      </div>

      {/* Display Section */}
      <div className="flex flex-col gap-3">
        {ideas.map((idea) => (
          <Card key={idea.id}>
            <CardBody className="flex flex-row justify-between items-center">
              <span>{idea.text}</span>
              <Button 
                color="danger" 
                variant="flat" 
                size="sm"
                // TODO 6: Call handleDeleteIdea and pass it this specific idea's ID
                onPress={() => /* Your code here */}
              >
                Delete
              </Button>
            </CardBody>
          </Card>
        ))}
        
        {ideas.length === 0 && (
          <p className="text-gray-500 text-sm">No ideas yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}