import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import "./App.css";

const App = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "General Checkup",
      description: "Routine health check",
      price: 50,
    },
    {
      id: 2,
      name: "Dental Cleaning",
      description: "Cleaning of teeth",
      price: 75,
    },
  ]);
  const [editingService, setEditingService] = useState(null);

  // Add a new service
  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  // Update an existing service
  const updateService = (updatedService) => {
    setServices(
      services.map((service) =>
        service.id === updatedService.id ? updatedService : service
      )
    );
    setEditingService(null);
  };

  // Delete a service
  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className="App">
      <h1>Healthcare Services</h1>
      <ServiceForm
        addService={addService}
        editingService={editingService}
        updateService={updateService}
      />
      <ServiceList
        services={services}
        deleteService={deleteService}
        setEditingService={setEditingService}
      />
    </div>
  );
};

export default App;
