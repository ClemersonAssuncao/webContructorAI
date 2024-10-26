import React from 'react';
import './Sidebar.css';
import OptionList from '../OptionList/OptionList';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <OptionList
        title= "Componentes"
        links={[
          { title: "*Texto", url: "#" },
          { title: "*Imagem", url: "#" },
          { title: "*Vídeo", url: "#" },
          { title: "*Áudio", url: "#" },
          { title: "*Lista", url: "#" },
          { title: "*Tabela", url: "#" },
        ]}
      />
    </aside>
  );
};

export default Sidebar;