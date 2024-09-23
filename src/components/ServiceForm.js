import React, { useState, useEffect } from "react";

const ServiceForm = ({ addService, editingService, updateService }) => {
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });

  // Pre-fill form when editing
  useEffect(() => {
    if (editingService) {
      setService(editingService);
    } else {
      setService({ name: "", description: "", price: "" });
    }
  }, [editingService]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      alert("All fields are required!");
      return;
    }

    if (editingService) {
      updateService(service);
    } else {
      addService(service);
    }
    setService({ name: "", description: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="service-form">
      <h2>{editingService ? "Update Service" : "Add New Service"}</h2>
      <input
        type="text"
        name="name"
        value={service.name}
        placeholder="Service Name"
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={service.description}
        placeholder="Service Description"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        value={service.price}
        placeholder="Service Price"
        onChange={handleChange}
      />
      <button type="submit">{editingService ? "Update" : "Add"}</button>
    </form>
  );
};

export default ServiceForm;
