import React, { useState } from "react";
import TaskList from "./TaskList";
import { Button, ButtonGroup } from "@mui/material";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => setActiveTab("all")}>All</Button>
        <Button onClick={() => setActiveTab("completed")}>Completed</Button>
        <Button onClick={() => setActiveTab("deleted")}>Deleted</Button>
        <Button onClick={() => setActiveTab("weekly")}>Weekly</Button>
        <Button onClick={() => setActiveTab("monthly")}>Monthly</Button>
      </ButtonGroup>

      <TaskList filter={activeTab} />
    </div>
  );
};

export default Tabs;
