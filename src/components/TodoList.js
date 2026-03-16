import TodoItem from './TodoItem';

function TodoList({ taches, changerEtat, supprimerTache }) {
  if (taches.length === 0) {
    return (
      <section className="empty-state">
        <h2>Aucune tache pour le moment</h2>
        <p>Commencez par ajouter votre premiere tache.</p>
      </section>
    );
  }

  return (
    <ul className="todo-list">
      {taches.map((tache) => (
        <TodoItem
          key={tache.id}
          tache={tache}
          changerEtat={changerEtat}
          supprimerTache={supprimerTache}
        />
      ))}
    </ul>
  );
}

export default TodoList;
