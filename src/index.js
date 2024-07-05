document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", ()=>{
    event.preventDefault();
    let listValues=document.getElementById("new-task-description").value;
    tasks.append(listValues)
  })
})
