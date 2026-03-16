import TodoItem from './TodoItem';

function TodoList({ taches, changerEtat, supprimerTache }) {
  return (
    <ul>
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
