import React, { useState } from "react";
import './OptionList.css';

interface OptionItems {
  title: string;
  links: { title: string, url: string }[];
}

const OptionList: React.FC<OptionItems> = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="option-list">
      <div className="option-list-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default OptionList;
