const products = [
      {
        id: "2",
        name: "Proteina",
        category: "suplementacion",
        stock: 10,
        price: 6000,
        img: "../img/proteina.jpg",
        description: "Una proteina",
      },
      {
        id: "3",
        name: "Creatina",
        category: "suplementacion",
        stock: 4,
        price: 12000,
        img: "../img/creatina.jpg",
        description: "Una creatina",
      },
      {
        id: "5",
        name: "Aminoacidos",
        category: "suplementacion",
        stock: 5,
        price: 5000,
        img: "../img/aminoacidos.png",
        description: "Un BCAA",
      },
      {
        id: "6",
        name: "Prentreno",
        category: "suplementacion",
        stock: 6,
        price: 6500,
        img: "../img/preEntreno.jpg",
        description: "Un Preentreno",
      },
      {
        id: "7",
        name: "Minerales",
        category: "suplementacion",
        stock: 7,
        price: 7000,
        img: "../img/multivitaminico.jpeg",
        description: "Un Mineral",
      },
      {
        id: "9",
        name: "Barritas de proteina",
        category: "snacks",
        stock: 25,
        price: 500,
        img: "../img/barraProteina.jpg",
        description: "Una barra proteica",
      },
      {
        id: "10",
        name: "Barritas de proteina vegana",
        category: "snacks",
        stock: 28,
        price: 700,
        img: "../img/proteinaVegana.jpg",
        description: "Una barra vegana",
      },
      {
        id: "12",
        name: "Remera",
        category: "indumentaria",
        stock: 3,
        price: 5000,
        img: "../img/remera.jpg",
        description: "Una remera",
      },
      {
        id: "15",
        name: "Muñequera",
        category: "indumentaria",
        stock: 2,
        price: 5200,
        img: "../img/muñequera.jpg",
        description: "Una muñequera",
      },
      {
        id: "17",
        name: "Musculosa",
        category: "indumentaria",
        stock: 4,
        price: 6300,
        img: "../img/musculosa.jpg",
        description: "Una musculosa",
      },
      {
        id: "19",
        name: "Campera",
        category: "indumentaria",
        stock: 3,
        price: 12500,
        img: "../img/campera.jpg",
        description: "Una campera",
      },
      {
        id: "20",
        name: "Buzo",
        category: "indumentaria",
        stock: 3,
        price: 15000,
        img: "../img/buzo.jpg",
        description: "Una buzo",
      },
      {
        id: "21",
        name: "Termica",
        category: "indumentaria",
        stock: 4,
        price: 10000,
        img: "../img/termica.webp",
        description: "Una termica",
      },
      {
        id: "22",
        name: "Pantalon",
        category: "indumentaria",
        stock: 5,
        price: 8000,
        img: "../img/pantalon.webp",
        description: "Una pantalón",
      },
    ];

    export const getProducts = () => {
        return new Promise((resolve, reject) => {
          
          if (products.length > 0) {
            setTimeout(() => {
              resolve(products);
            }, 2000);
          } else {
            reject("No hay productos");
          }
        });
      };
    
      export const getProductById = (id) => {
        return new Promise((resolve, reject) => {
          
          if (products.length > 0) {
            const product = products.find( p => p.id === id);
            
            setTimeout(() => {
              if(!product) {
                reject(`No se encuentra el productos con el id ${id}`)
              }
              resolve(product);
            }, 2000);
          } else {
            reject("No hay productos");
          }
        });
      };