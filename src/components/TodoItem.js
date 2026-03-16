function TodoItem({ tache, changerEtat, supprimerTache }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={tache.terminee}
        onChange={() => changerEtat(tache.id)}
      />
      <span
        style={{
          marginLeft: '8px',
          textDecoration: tache.terminee ? 'line-through' : 'none',
        }}
      >
        {tache.texte}
      </span>
      <button
        type="button"
        onClick={() => supprimerTache(tache.id)}
        style={{ marginLeft: '8px' }}
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
