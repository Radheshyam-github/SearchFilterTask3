import { useState } from 'react';
import './App.css';

function App() {
  const [tags, setTags] = useState([
    "Java", "Math", "C++", "C#", "React js", "node js", "Nest js",
    "Pythan", "Pull", "javascript", "Talwind", "MUI CSS",
    ".Net", "PHP", "css", "Bootstrap"
  ]);
  const [filter, setFilter] = useState('');

  const createTag = (label) => {
    return (
      <div className="tag">
        <span>{label}</span>
        <i onClick={() => removeTag(label)}>x</i>
      </div>
    );
  };

  const removeTag = (label) => {
    setTags(tags.filter(tag => tag !== label));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setTags([...tags, e.target.value.trim()]);
      e.target.value = '';
    }
  };

  const handleFilter = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  return (
   <>
    <div className='text-center mt-5 d-flex justify-content-center'>
        <form class="mx-4 w-75">
          <input class="form-control  me-2" type="search" placeholder="here search..."
            onKeyPress={handleKeyPress}
            onChange={handleFilter} id='search-input' aria-label="Search" />
        </form>
      </div>
    <div className="tag-container mt-4 text-center">
      <ul className="mt-5 filter-ul">
        {tags.filter(tag => tag.toLowerCase().includes(filter)).map((tag, index) => (
          <li key={index} className="list-group-item p-3 ">
            {tag}
          </li>
        ))}
      </ul>
    </div>
   </>
  );
}

export default App;
