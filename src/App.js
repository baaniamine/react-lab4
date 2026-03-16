import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

const COMMANDS_SNIPPET = `npx create-react-app mon-projet-react
cd mon-projet-react
npm start`;

const ROUTER_SNIPPET = `npm install react-router-dom`;

const TODO_FORM_SNIPPET = `import { useState } from 'react';

function TodoForm({ ajouterTache }) {
  const [texte, setTexte] = useState('');

  const soumettreFormulaire = (e) => {
    e.preventDefault();

    if (texte.trim() === '') return;

    ajouterTache(texte);
    setTexte('');
  };

  return (
    <form onSubmit={soumettreFormulaire}>
      <input
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
        placeholder="Nouvelle tâche"
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TodoForm;`;

const TODO_LIST_SNIPPET = `import TodoItem from './TodoItem';

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

export default TodoList;`;

const TODO_ITEM_SNIPPET = `function TodoItem({ tache, changerEtat, supprimerTache }) {
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

      <button onClick={() => supprimerTache(tache.id)}>X</button>
    </li>
  );
}

export default TodoItem;`;

const APP_SNIPPET = `import { useState } from 'react';
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

    setTaches([...taches, nouvelleTache]);
  };

  const changerEtat = (id) => {
    setTaches(
      taches.map((t) =>
        t.id === id ? { ...t, terminee: !t.terminee } : t
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((t) => t.id !== id));
  };

  return (
    <div>
      <h1>To-Do List Interactive</h1>
      <TodoForm ajouterTache={ajouterTache} />
      <TodoList
        taches={taches}
        changerEtat={changerEtat}
        supprimerTache={supprimerTache}
      />
    </div>
  );
}

export default App;`;

const steps = [
  {
    path: '/',
    title: 'Objectif',
    element: (
      <>
        <p>Ce TP vous permet de consolider toutes les notions vues précédemment :</p>
        <ul>
          <li>Création de composants fonctionnels</li>
          <li>
            Gestion du state avec <InlineCode>useState</InlineCode>
          </li>
          <li>Gestion des événements utilisateurs</li>
          <li>Navigation avec React Router</li>
          <li>Intégration de styles et de ressources</li>
        </ul>
      </>
    ),
  },
  {
    path: '/etape-1',
    title: 'Étape 1 - Préparer l’environnement',
    element: (
      <>
        <p>Ouvrir le terminal et saisir les commandes suivantes :</p>
        <CodeBlock>{COMMANDS_SNIPPET}</CodeBlock>
        <p>Cette commande crée le squelette d’un projet React avec :</p>
        <ul>
          <li>
            <InlineCode>src/</InlineCode> : tous les composants et le code
            JavaScript
          </li>
          <li>
            <InlineCode>public/</InlineCode> : le fichier HTML racine
          </li>
          <li>
            <InlineCode>App.js</InlineCode> : point d’entrée de votre interface
          </li>
        </ul>
        <p>Ensuite, installez React Router :</p>
        <CodeBlock>{ROUTER_SNIPPET}</CodeBlock>
      </>
    ),
  },
  {
    path: '/etape-2',
    title: 'Étape 2 - Choisir un mini-projet',
    element: (
      <>
        <p>Deux options sont proposées :</p>
        <div className="option-callout">
          <strong>Option A : To-Do List interactive</strong>
        </div>
      </>
    ),
  },
  {
    path: '/option-a',
    title: 'Option A : To-Do List interactive',
    element: (
      <>
        <h2>Objectifs</h2>
        <ul>
          <li>Ajouter des tâches</li>
          <li>Afficher et cocher les tâches terminées</li>
          <li>Supprimer des tâches</li>
        </ul>
      </>
    ),
  },
  {
    path: '/etape-3a',
    title: 'Étape 3A - Structure des composants',
    element: (
      <>
        <p>
          Créez le dossier <InlineCode>src/components</InlineCode>.
        </p>
        <p>Ajoutez les fichiers suivants :</p>
        <ul>
          <li>
            <InlineCode>TodoForm.js</InlineCode>
          </li>
          <li>
            <InlineCode>TodoItem.js</InlineCode>
          </li>
          <li>
            <InlineCode>TodoList.js</InlineCode>
          </li>
        </ul>
      </>
    ),
  },
  {
    path: '/etape-4a',
    title: 'Étape 4A - Le formulaire d’ajout de tâches',
    element: (
      <>
        <h2>Fichier TodoForm.js</h2>
        <CodeBlock>{TODO_FORM_SNIPPET}</CodeBlock>
      </>
    ),
  },
  {
    path: '/etape-5a',
    title: 'Étape 5A - La liste des tâches',
    element: (
      <>
        <h2>Fichier TodoList.js</h2>
        <CodeBlock>{TODO_LIST_SNIPPET}</CodeBlock>
        <h3>Explications du code :</h3>
        <ul>
          <li>
            <InlineCode>taches.map()</InlineCode> parcourt chaque tâche.
          </li>
          <li>
            Chaque élément est transmis au composant{' '}
            <InlineCode>TodoItem</InlineCode>.
          </li>
          <li>
            <InlineCode>key</InlineCode> est nécessaire pour que React identifie
            chaque élément.
          </li>
        </ul>
        <p>
          <strong>Remarque pédagogique :</strong>
        </p>
        <p>
          L’utilisation de <InlineCode>key</InlineCode> est obligatoire avec{' '}
          <InlineCode>map()</InlineCode> pour éviter des erreurs d’affichage.
        </p>
      </>
    ),
  },
  {
    path: '/etape-6a',
    title: 'Étape 6A - Un élément de la liste',
    element: (
      <>
        <h2>Fichier TodoItem.js</h2>
        <CodeBlock>{TODO_ITEM_SNIPPET}</CodeBlock>
        <h3>Explications du code :</h3>
        <ul>
          <li>
            <InlineCode>checked</InlineCode> est lié à{' '}
            <InlineCode>tache.terminee</InlineCode>.
          </li>
          <li>
            <InlineCode>onChange</InlineCode> appelle{' '}
            <InlineCode>changerEtat</InlineCode> pour cocher ou décocher.
          </li>
          <li>
            Le texte barré est obtenu via{' '}
            <InlineCode>textDecoration: 'line-through'</InlineCode>.
          </li>
        </ul>
      </>
    ),
  },
  {
    path: '/etape-7a',
    title: 'Étape 7A - Gestion globale du state',
    element: (
      <>
        <h2>Fichier App.js</h2>
        <CodeBlock>{APP_SNIPPET}</CodeBlock>
        <h3>Explications du code :</h3>
        <ul>
          <li>
            <InlineCode>taches</InlineCode> contient le tableau des tâches.
          </li>
          <li>
            <InlineCode>ajouterTache()</InlineCode> ajoute un objet avec un{' '}
            <InlineCode>id</InlineCode> unique basé sur la date.
          </li>
          <li>
            <InlineCode>changerEtat()</InlineCode> inverse le statut{' '}
            <InlineCode>terminee</InlineCode>.
          </li>
          <li>
            <InlineCode>supprimerTache()</InlineCode> retire la tâche selon
            l’id.
          </li>
        </ul>
      </>
    ),
  },
];

function InlineCode({ children }) {
  return <code className="inline-code">{children}</code>;
}

function CodeBlock({ children }) {
  return (
    <pre className="code-block">
      <code>{children}</code>
    </pre>
  );
}

function Navigation() {
  const location = useLocation();
  const currentIndex = steps.findIndex((step) => step.path === location.pathname);
  const previousStep = currentIndex > 0 ? steps[currentIndex - 1] : null;
  const nextStep = currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null;

  return (
    <div className="step-navigation">
      {previousStep ? (
        <Link className="nav-button" to={previousStep.path}>
          &larr; Étape précédente
        </Link>
      ) : (
        <span className="nav-button is-disabled">&larr; Étape précédente</span>
      )}

      {nextStep ? (
        <Link className="nav-button nav-button-primary" to={nextStep.path}>
          Étape suivante &rarr;
        </Link>
      ) : (
        <span className="nav-button nav-button-primary is-disabled">
          Étape suivante &rarr;
        </span>
      )}
    </div>
  );
}

function StepPage({ title, children }) {
  return (
    <main className="app-shell">
      <section className="page-card">
        <h1>{title}</h1>
        <div className="page-content">{children}</div>
        <Navigation />
      </section>
    </main>
  );
}

function StepRoutes() {
  return (
    <Routes>
      {steps.map((step) => (
        <Route
          key={step.path}
          path={step.path}
          element={<StepPage title={step.title}>{step.element}</StepPage>}
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <StepRoutes />
    </BrowserRouter>
  );
}

export default App;
