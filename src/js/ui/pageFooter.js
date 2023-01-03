export const renderFooter = () => {
  const footer = document.querySelector('footer');
  let date = new Date().getFullYear();
  
  footer.innerHTML = `<div class="d-flex justify-content-center p-2">
    <p><i class="fa-solid fa-copyright"></i> Copyright Christopher Tønnesland ${date}</p>
    </div>
    `;
};
