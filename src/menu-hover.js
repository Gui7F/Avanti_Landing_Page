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

  
  export const mouseOnDeptHover = () => {
    deptHover.forEach((dept) => {
      
      dept.addEventListener("mouseenter", () => {
        containerDept.innerHTML = "";
  
        const item = document.createElement("h1");
        item.className = "text-[16px] font-nunito font-bold";
        item.textContent = "Categoria ativa"; // Adicionei conteúdo ao H1
  
        containerCat.appendChild(item);
        containerMenu.classList.remove("hidden");
      });
    });
  };

  const mouseOutMenuHover = () =>{
    containerMenu.addEventListener("mouseleave", () => {
        containerMenu.classList.add("hidden")
    })
  }
  