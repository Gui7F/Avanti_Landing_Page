const departments = [
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento ",
    "Departamento ",
    "Departamento ",
    "Departamento ",
    "Departamento ",
    "Departamento ",
  ];

  const categorias = [
    ["Categoria", "Categoria", "Categoria", "Categoria", "Categoria", "Categoria", "Categoria", "Categoria",],
    ["Categoria", "Categoria", "Categoria", "Categoria", "Categoria", "Categoria", "Categoria", "Categoria",],
    ["Categoria", "Categoria", "Categoria", "Categoria", "Categoria", "Categoria", "Categoria", "Categoria",]
  ]


  const menuHover = document.getElementById("menu-hover");
  const containerMenu = document.getElementById("containerMenu");
  const containerDept = document.querySelector(".containerDept");
  const containerCat = document.getElementById("containerCat"); 
  const deptHover = document.querySelectorAll(".deptHover")

  console.log(deptHover)

  const addCategorias = () => {
    containerCat.innerHTML = "";
  
    categorias.forEach((coluna) => {
      const colunaDiv = document.createElement("div");
      colunaDiv.className = "space-y-3";
  
      coluna.forEach((categoria) => {
        const p = document.createElement("p");
        p.textContent = categoria;
        p.className = "cursor-pointer hover:text-[#005CFF] text-[14px] text-[#656565] hover:font-bold";
        colunaDiv.appendChild(p);
      });
  
      containerCat.appendChild(colunaDiv);
    });
  };

  export const mouseOnMenuHover = () => {
    menuHover.addEventListener("mouseenter", () => {
      title.classList.add("hidden");
      containerMenu.classList.remove("hidden")
  
      containerDept.innerHTML = "" 
      departments.forEach((dept, index) => {
        const item = document.createElement("p")
        item.className = "cursor-pointer hover:text-[#005CFF] text-[14px] text-[#656565] hover:font-bold"
        item.innerHTML = `${dept} <span class="ml-20 mr-4"> > </span>`
        containerDept.appendChild(item)
      })
    })

    addCategorias()
    mouseOutMenuHover()
  }
  
  
  const title = document.getElementById("titleDept");
  export const mouseOnDeptHover = () => {
    deptHover.forEach((dept) => { 
      dept.addEventListener("mouseenter", () => {
        title.classList.remove("hidden");
        containerDept.innerHTML = "";
        containerMenu.classList.remove("hidden");

      });
      containerMenu.addEventListener("mouseleave", () => {
        containerMenu.classList.add("hidden");
        title.classList.add("hidden")
        containerDept.innerHTML = "";
      });
    });
  };

  const mouseOutMenuHover = () =>{
    containerMenu.addEventListener("mouseleave", () => {
        containerMenu.classList.add("hidden")
    })
  }
  