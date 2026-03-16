import { useState } from 'react';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();
    if (texte.trim() === '') return;
    ajouterTache(texte);
    setTexte('');
  };

  return (
    <form className="todo-form" onSubmit={soumettreFormulaire}>
      <input
        className="todo-input"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tache"
        aria-label="Nouvelle tache"
        required
      />
      <button className="primary-button" type="submit">
        Ajouter
      </button>
    </form>
  );
}

export default TodoForm;
