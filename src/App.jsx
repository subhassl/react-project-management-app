import React from "react";
import { useState } from "react";
import { ProjectSidebar } from "./Components/ProjectSidebar";
import { NewProject } from "./Components/NewProject.jsx";
import { NoProjectsSelected } from "./Components/NoProjectsSelected.jsx";
import { SelectedProjects } from "./Components/SelectedProjects.jsx";

//
function App() {
  const [projectsState, setProjectsState] = useState({
    //its undefined that we're neither adding a new project nor selecting a project, but that should change when we click on a +add project button
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const newTask = {
        id: Math.random(),
        projectId: prevState.selectedProjectID,
        text: text,
      };
      return {
        ...prevState,
        // selectedProjectID: undefined,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (taskId) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,

        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectID
        ),
        selectedProjectID: undefined,
      };
    });
  };

  // this function is called when we click on a project
  const handleSelectedProjects = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  };

  // this function is called when we click on a +add project button
  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  };

  // this function is called when we click on the save button in the new project form
  const handleAddProject = (projectsdata) => {
    const projectId = Math.random();
    // on executing this func, we want to show the new project form
    setProjectsState((prevState) => {
      const newProject = {
        ...projectsdata,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  console.log(projectsState);

  // we want to show the selected project
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectID
  );
  let content = (
    <SelectedProjects
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
      selectedProjectID={projectsState.selectedProjectID}
    />
  );

  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectsSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 bg-gray-100 flex gap-8">
      <ProjectSidebar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectedProjects}
      />
      {content}
    </main>
  );
}

export default App;
