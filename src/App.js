import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [taches, setTaches] = useState([]);

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte,
      terminee: false,
    };

    setTaches((currentTaches) => [...currentTaches, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches((currentTaches) =>
      currentTaches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches((currentTaches) =>
      currentTaches.filter((tache) => tache.id !== id)
    );
  };

  return (
    <main className="app-shell">
      <section className="todo-card">
        <header className="todo-header">
          <div>
            <p className="eyebrow">React Lab 4</p>
            <h1>To-Do List Interactive</h1>
            <p className="subtitle">
              Ajoutez, cochez et supprimez des taches avec des composants
              React fonctionnels.
            </p>
          </div>
          <img className="header-avatar" src="/user.png" alt="Illustration" />
        </header>

        <TodoForm ajouterTache={ajouterTache} />
        <TodoList
          taches={taches}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
        />
      </section>
    </main>
  );
}

export default App;
