//DOM SELECTOR
const displayButton = document.querySelector('.display');
const createButton = document.querySelector('.create');
const library = document.querySelector('.libraryContainer')

const projectLibrary = [];

const createProjectFactory = (title, description, dueDate, importance) => {
  return {title, description, dueDate, importance};
}

function appendProject () {
  const newProject = createProjectFactory (
    document.getElementById('description').value,
    document.getElementById('title').value,
    document.getElementById('due').value, 
    document.querySelector('input[name="drone"]:checked').value
  );
  projectLibrary.push(newProject);
};

function displayProject () {
  //create project container
  projectLibrary.forEach (project => {
    let projectContainer = document.createElement('div');
    let rmvButton = document.createElement('button');

    projectContainer.classList.add('projectContainer');
    rmvButton.classList.add('remove');
    rmvButton.textContent = 'x';

    library.appendChild(projectContainer);
    projectContainer.appendChild(rmvButton);
  
  //create a project's content
    for (const key in project) {
      let attribute = document.createElement('div');
      attribute.textContent = `${project[key]}`;
      projectContainer.appendChild(attribute);
    };
  }); 
};

createButton.addEventListener("click", appendProject);
displayButton.addEventListener("click", displayProject);


