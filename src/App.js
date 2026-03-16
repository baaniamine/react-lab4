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

  const totalTerminees = taches.filter((tache) => tache.terminee).length;

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

        <section className="stats-grid" aria-label="Statistiques de la liste">
          <article className="stat-card">
            <span className="stat-label">Total</span>
            <strong className="stat-value">{taches.length}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">Terminees</span>
            <strong className="stat-value">{totalTerminees}</strong>
          </article>
          <article className="stat-card">
            <span className="stat-label">En cours</span>
            <strong className="stat-value">{taches.length - totalTerminees}</strong>
          </article>
        </section>

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
