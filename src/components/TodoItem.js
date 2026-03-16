function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li className="todo-item">
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={tache.terminee}
        onChange={() => changerEtat(tache.id)}
      />
      <span className={tache.terminee ? 'todo-text is-done' : 'todo-text'}>
        {tache.texte}
      </span>
      <button
        className="delete-button"
        type="button"
        onClick={() => supprimerTache(tache.id)}
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
