// Importações necessárias
import Header from "./components/Header"; // Adicione o caminho correto para o componente Header
import TextInput from "./components/TextInput";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <Header /> {/* Renderiza o Header */}
      <TextInput /> {/* Renderiza o TextInput */}
    </div>
  );
}

export default App;

