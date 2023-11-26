import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useToast,
} from "@chakra-ui/react";

const MenuAdmin = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    ingredients: "",
    type: "",
    categoryId: "",
  });
  const toast = useToast();
  const [selectedProductId, setSelectedProductId] = useState(null); // Per l'aggiornamento


  useEffect(() => {
    // Carica l'elenco dei prodotti quando il componente viene montato
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("http://localhost:3000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
  
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei prodotti:", error.message);
      });
  };

  const handleDeleteProduct = (productId) => {
    const token = localStorage.getItem('token');
    fetch(`http://localhost:3000/products/id/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Prodotto eliminato:", data);
        toast({
          title: "Prodotto eliminato",
          description: "Il prodotto è stato eliminato con successo.",
          status: "success",
          isClosable: true,
        });

        // Aggiorna l'elenco dei prodotti dopo l'eliminazione
        getProducts();
      })
      .catch((error) => {
        console.error("Errore durante l'eliminazione del prodotto:", error.message);
      });
  };

  const handleAddProduct = () => {
    const token = localStorage.getItem('token');
    // Invia una richiesta POST per aggiungere un nuovo prodotto
    fetch("http://localhost:3000/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Prodotto aggiunto:", data);
        toast({
          title: "Prodotto aggiunto",
          description: "Il prodotto è stato aggiunto con successo.",
          status: "success",
          isClosable: true,
        });

        // Resetta il form e aggiorna l'elenco dei prodotti
        setFormData({
          name: "",
          price: "",
          ingredients: "",
          type: "",
          categoryId: "",
        });
        getProducts();
      })
      .catch((error) => {
        console.error("Errore durante l'aggiunta del prodotto:", error.message);
      });
  };

  const handleUpdateProduct = () => {
    const token = localStorage.getItem('token');
    // Utilizza l'ID del prodotto selezionato per l'aggiornamento
    fetch(`http://localhost:3000/products/id/${selectedProductId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Prodotto aggiornato:", data);
        toast({
          title: "Prodotto aggiornato",
          description: "Il prodotto è stato aggiornato con successo.",
          status: "success",
          isClosable: true,
        });

        // Resetta lo stato del form e dell'ID selezionato dopo l'aggiornamento
        setFormData({
          name: "",
          price: "",
          ingredients: "",
          type: "",
          categoryId: "",
        });
        setSelectedProductId(null);

        // Aggiorna l'elenco dei prodotti dopo l'aggiornamento
        getProducts();
      })
      .catch((error) => {
        console.error("Errore durante l'aggiornamento del prodotto:", error.message);
        // Inserisci qui la gestione dell'errore, ad esempio, feedback all'utente
      });
  };

  const handleEditProduct = (productId) => {
    // Imposta l'ID del prodotto selezionato per l'aggiornamento
    setSelectedProductId(productId);

    // Recupera i dettagli del prodotto selezionato
    fetch(`http://localhost:3000/products/id/${productId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    })
      .then((response) => response.json())
      .then((data) => {
        // Popola il form con i dettagli del prodotto selezionato
        setFormData({
          name: data.name,
          price: data.price,
          ingredients: data.ingredients.join(", "),
          type: data.type,
          categoryId: data.categoryId,
        });
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei dettagli del prodotto:", error.message);
        // Inserisci qui la gestione dell'errore, ad esempio, feedback all'utente
      });
  };

  const handleInputChange = (e) => {
    // Funzione per gestire i cambiamenti negli input
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <div>
      <Box p={4}>
        <Heading mb={4}>Lista piatti</Heading>
        {/* Form per aggiungere/modificare prodotto */}
        <form>
          {/* Campi di input controllati */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Nome del prodotto"
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Prezzo"
          />
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            placeholder="Ingredienti (separati da virgola)"
          />
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            placeholder="Tipo"
          />
          <input
            type="text"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
            placeholder="Categoria ID"
          />
  
          {/* Bottoni per aggiungere/modificare prodotto */}
          {selectedProductId ? ( // Mostra il bottone "Aggiorna" solo se un prodotto è selezionato
            <Button colorScheme="blue" onClick={handleUpdateProduct}>
              Aggiorna Prodotto
            </Button>
          ) : (
            <Button colorScheme="green" onClick={handleAddProduct}>
              Aggiungi Prodotto
            </Button>
          )}
        </form>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Prezzo</Th>
              <Th>Ingredienti</Th>
              <Th>Tipo</Th>
              <Th>Categoria ID</Th>
              <Th>Azioni</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product._id}>
                <Td>{product.name}</Td>
                <Td>{product.price}</Td>
                <Td>{product.ingredients.join(", ")}</Td>
                <Td>{product.type}</Td>
                <Td>{product.categoryId}</Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Elimina
                  </Button>
                  <Button
                    colorScheme="blue"
                    onClick={() => handleEditProduct(product._id)}
                  >
                    Modifica
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </div>
  );  
};

export default MenuAdmin;