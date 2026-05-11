import React from "react";

function ToyCard({ toy, toys, setToys }) {
  function handleDelete() {
    // Send delete request to remove toy from backend
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => {
      // Remove toy from UI state after succesful deletion
      const updatedToys = toys.filter((t) => t.id !== toy.id);
      setToys(updatedToys);
    });
  }

  function handleLike() {
    const updatedToy = {
      likes: toy.likes + 1,
    };
    // fetch all toys from backend when app loads
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((updatedToyFromServer) => {
        const updatedToys = toys.map((t) =>
          t.id === toy.id ? updatedToyFromServer : t
        );

        setToys(updatedToys);
      });
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      <p>{toy.likes} Likes </p>

      <button className="like-btn" onClick={handleLike}>
        Like {"<3"}
      </button>

      <button className="del-btn" onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;