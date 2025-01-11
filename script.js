// Lógica de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');
  
    // Limpiar mensaje previo
    loginMessage.textContent = '';
  
    // Validación de credenciales
    if (username === "admin" && password === "admin123") {
      // Ocultar formulario de inicio de sesión y mostrar el inventario
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('inventorySection').style.display = 'block';
      
      // Mostrar mensaje de bienvenida
      loginMessage.textContent = "Bienvenido, Administrador";
      loginMessage.style.color = 'green';
  
    } else if (username === "ventas" && password === "ventas123") {
      // Ocultar formulario de inicio de sesión y mostrar el inventario
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('inventorySection').style.display = 'block';
      
      // Mostrar mensaje de bienvenida
      loginMessage.textContent = "Bienvenido, Ventas";
      loginMessage.style.color = 'green';
  
    } else {
      // Mostrar mensaje de error si las credenciales son incorrectas
      loginMessage.textContent = "Credenciales incorrectas. Intenta de nuevo.";
      loginMessage.style.color = 'red';
    }
  });
  
  // Funciones para agregar y eliminar productos
  let productList = [];
  
  function addProduct(productName) {
    const messageSection = document.getElementById('productMessage');
    
    if (!productList.includes(productName)) {
      productList.push(productName);
      messageSection.textContent = productName + " ha sido agregado.";
      messageSection.style.color = 'green';
    } else {
      messageSection.textContent = productName + " ya está en la lista.";
      messageSection.style.color = 'orange';
    }
  }
  
  function removeProduct(productName) {
    const messageSection = document.getElementById('productMessage');
    
    const index = productList.indexOf(productName);
    if (index !== -1) {
      productList.splice(index, 1);
      messageSection.textContent = productName + " ha sido eliminado.";
      messageSection.style.color = 'red';
    } else {
      messageSection.textContent = productName + " no está en la lista.";
      messageSection.style.color = 'red';
    }
  }
  