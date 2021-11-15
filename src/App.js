import { useState } from 'react';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import sidebar from './sidebar';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState(0)

  const handleSectionSelect = (e, index) => {
    e.preventDefault();
    setCurrentSection(index)
  };

  const getLinkHref = () => {
    return 'link';
  };

  return (
    <div className="App">
      <SidebarMenu
        sidebar={sidebar}
        currentSection={currentSection}
        onSectionSelect={handleSectionSelect}
        getLinkHref={getLinkHref}
      />
    </div>
  );
}

export default App;
