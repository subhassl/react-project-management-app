import React from "react";
import { useState } from "react";
import { ProjectSidebar } from "./Components/ProjectSidebar";
import { NewProject } from "./Components/NewProject.jsx";
import { NoProjectsSelected } from "./Components/NoProjectsSelected.jsx";
function App() {
  const [projectsState, setProjectsState] = useState({
    //its undefined that we're neither adding a new project nor selecting a project, but that should change when we click on a +add project button
    selectedProjectID: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  };

  const handleAddProject = (projectsdata) => {
    // on executing this func, we want to show the new project form
    setProjectsState((prevState) => {
      const newProject = {
        ...projectsdata,
        id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 bg-gray-100 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
