// TO DO
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("ul");
  

  list.addEventListener("click", (e) => {

    

    if (e.target.className === "checked" ) {
    
      e.target.classList.remove("checked");

    } else {
      e.target.classList.add("checked");
    }

  });
  
});