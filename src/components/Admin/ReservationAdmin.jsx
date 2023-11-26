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

const ReservationAdmin = () => {
  const [reservations, setReservations] = useState([]);
  const toast = useToast();

  useEffect(() => {
    // Carica l'elenco delle prenotazioni quando il componente viene montato
    getReservations();
  }, []);

  const getReservations = () => {
    fetch("http://localhost:3000/reserve/reservations")
      .then((response) => response.json())
      .then((data) => {
        setReservations(data.reservations);
      })
      .catch((error) => {
        console.error(
          "Errore durante il recupero delle prenotazioni:",
          error.message
        );
        // Inserisci qui la gestione dell'errore, ad esempio, feedback all'utente
      });
  };

  const handleDeleteReservation = (id) => {
    fetch(`http://localhost:3000/reserve/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Prenotazione eliminata:", data.deletedReservation);
        toast({
          title: "Prenotazione eliminata",
          description: "La prenotazione è stata eliminata con successo.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // Aggiorna l'elenco delle prenotazioni dopo l'eliminazione
        getReservations();
      })
      .catch((error) => {
        console.error(
          "Errore durante l'eliminazione della prenotazione:",
          error.message
        );
        // Inserisci qui la gestione dell'errore, ad esempio, feedback all'utente
      });
  };

  return (
    <div>
      <Box p={4}>
        <Heading mb={4}>Lista prenotazioni</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Giorno</Th>
              <Th>Ora</Th>
              <Th>Azioni</Th>
            </Tr>
          </Thead>
          <Tbody>
            {reservations.map((reservation) => (
              <Tr key={reservation._id}>
                <Td>{reservation.name}</Td>
                <Td>{reservation.selectedDay}</Td>
                <Td>{reservation.selectedTime}</Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDeleteReservation(reservation._id)}
                  >
                    Elimina
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

export default ReservationAdmin;
