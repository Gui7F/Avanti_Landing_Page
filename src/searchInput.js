
export const initInput = () => {
    const inputDesktop = document.getElementById("searchInput");
    const inputMobile = document.getElementById("searchInputMobile");
    const textResponse = document.querySelector(".responseInput");
    const textResponseMobile = document.querySelector(".responseInputMobile");
  
    const inputDesktopValue = inputDesktop.value;
    const inputMobileValue = inputMobile.value;
  
    if (inputDesktopValue.trim() !== "") {
      const itemDesktop = document.createElement("p");
      itemDesktop.className = "text-center bg-neutral-600 text-white w-[300px]";
      itemDesktop.textContent = `Você pesquisou por: ${inputDesktopValue}`;
      textResponse.appendChild(itemDesktop);
    }
  
    if (inputMobileValue.trim() !== "") {
      const itemMobile = document.createElement("p");
      itemMobile.className = "w-full h-auto text-center text-[18px] font-nunito font-bold bg-neutral-500";
      itemMobile.textContent = `Você pesquisou por: ${inputMobileValue}`;
      textResponseMobile.appendChild(itemMobile);
    }
  };
  

  window.addEventListener("DOMContentLoaded", () => {
    const inputDesktop = document.getElementById("searchInput");
    const inputMobile = document.getElementById("searchInputMobile");
    const btnDesktop = document.getElementById("searchBtnDesktop");
    const btnMobile = document.getElementById("searchBtnMobile");
  
    // Clicks nos botões
    btnDesktop?.addEventListener("click", initInput);
    btnMobile?.addEventListener("click", initInput);
  
    // Tecla Enter nos inputs
    inputDesktop?.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        initInput();
      }
    });
  
    inputMobile?.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        initInput();
      }
    });
  });