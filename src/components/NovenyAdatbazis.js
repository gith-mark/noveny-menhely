import React, { useState } from "react";
import "./NovenyAdatbazis.css";

const NovenyAdatbazis = () => {
  const [plants, setPlants] = useState([
    { name: "Monstera", type: "Szobanövény", light: "Közepes fény" },
    { name: "Levendula", type: "Kerti növény", light: "Teljes napfény" },
    { name: "Aloe Vera", type: "Pozsgás", light: "Erős fény" },
    { name: "Páfrány", type: "Szobanövény", light: "Alacsony fény" },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedPlant, setEditedPlant] = useState({ name: "", type: "", light: "" });
  const [newPlant, setNewPlant] = useState({ name: "", type: "", light: "" });

  const handleDelete = (index) => {
    const updatedPlants = plants.filter((_, i) => i !== index);
    setPlants(updatedPlants);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedPlant(plants[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPlant({ ...editedPlant, [name]: value });
  };

  const handleSave = () => {
    const updatedPlants = [...plants];
    updatedPlants[editingIndex] = editedPlant;
    setPlants(updatedPlants);
    setEditingIndex(null);
    setEditedPlant({ name: "", type: "", light: "" });
  };

  const handleNewPlantChange = (e) => {
    const { name, value } = e.target;
    setNewPlant({ ...newPlant, [name]: value });
  };

  const handleAddPlant = (e) => {
    e.preventDefault();
    if (newPlant.name && newPlant.type && newPlant.light) {
      setPlants([...plants, newPlant]);
      setNewPlant({ name: "", type: "", light: "" });
    } else {
      alert("Kérlek tölts ki minden mezőt!");
    }
  };

  return (
    <div className="container">
      <h2>Növény Adatbázis</h2>

      <ul className="plant-list">
        {plants.map((plant, index) => (
          <li key={index} className="plant-card">
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={editedPlant.name}
                  onChange={handleChange}
                  placeholder="Név"
                />
                <input
                  type="text"
                  name="type"
                  value={editedPlant.type}
                  onChange={handleChange}
                  placeholder="Típus"
                />
                <input
                  type="text"
                  name="light"
                  value={editedPlant.light}
                  onChange={handleChange}
                  placeholder="Fényigény"
                />
                <div className="plant-buttons">
                  <button onClick={handleSave}>Mentés</button>
                </div>
              </>
            ) : (
              <>
                <h4>{plant.name}</h4>
                <p><strong>Típus:</strong> {plant.type}</p>
                <p><strong>Fényigény:</strong> {plant.light}</p>
                <div className="plant-buttons">
                  <button onClick={() => handleEdit(index)}>Szerkesztés</button>
                  <button onClick={() => handleDelete(index)}>Törlés</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      <h3>Új növény hozzáadása</h3>
      <form onSubmit={handleAddPlant} className="add-plant-form">
        <input
          type="text"
          name="name"
          value={newPlant.name}
          onChange={handleNewPlantChange}
          placeholder="Név"
        />
        <input
          type="text"
          name="type"
          value={newPlant.type}
          onChange={handleNewPlantChange}
          placeholder="Típus"
        />
        <input
          type="text"
          name="light"
          value={newPlant.light}
          onChange={handleNewPlantChange}
          placeholder="Fényigény"
        />
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
};

export default NovenyAdatbazis;