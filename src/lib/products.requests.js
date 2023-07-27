const PRODUCTS = [
    {
      id: 1,
      title: "Perfume Giorgio Armani Acqua Di Gio Hombre 100 ml EDT",
      category: "Citrico",
      price: 250.000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      img: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      stock: 10,
    },
    {
      id: 2,
      title: "Perfume Versace Eros Pour Homme Hombre 100 ml EDT",
      category: "Citrico",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 270.000,
      img: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      stock: 10,
    },
    {
      id: 3,
      title: "Perfume Emporio Armani Stronger 100 ml EDP",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      category: "Floral",
      price: 450.000,
      stock: 5,
      img: "https://images.unsplash.com/photo-1583442801251-5ce051ed7cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 4,
      title: "Perfume Mujer Miss Dior Rose N'Roses 100 ml EDT",
      category: "Floral",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 350.000,
      img: "https://images.unsplash.com/photo-1618436917352-cd3d11ea4d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      stock: 6,
    },
    {
      id: 5,
      title: "Perfume Gemma di Paradiso Roberto Cavalli 100 ml EDT",
      category: "Amaderado",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 680.000,
      img: "https://images.unsplash.com/photo-1541108564883-bec8126021f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      stock: 6,
    },
    {
      id: 6,
      title: "Perfume Chanel NO.5 100 ml EDT",
      category: "Amaderado",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 950.000,
      img: "https://images.unsplash.com/photo-1610113233329-1c73b6f7fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      stock: 6,
    },
    {
      id: 7,
      title: "Perfume Chanel Gabrielle 100 ml EDT",
      category: "Floral",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 850.000,
      img: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
      stock: 15,
    },
    {
      id: 8,
      title: "Perfume Calvi Klein One 100 ml EDT",
      category: "Amaderado",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur harum non voluptas eius earum. Reiciendis error a quod impedit ex!",
      price: 420.000,
      img: "https://images.unsplash.com/photo-1620848616916-3efaf499adcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      stock: 25,
    },
  ];
  
  export const getProducts = (id) => {
    const _products = id
      ? PRODUCTS.filter((product) => product.category.toLowerCase() === id)
      : PRODUCTS;
  
    return new Promise((res) => {
      setTimeout(() => {
        res(_products); 
      }, 500);
    });
  };
  
  export const getProduct = (id) => {
    const product = PRODUCTS.filter((product) => product.id === id)[0];
  
    return new Promise((res) => {
      setTimeout(() => {
        res(product);
      }, 300);
    });
  };