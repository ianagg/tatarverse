import '../styles/CharacterList.css';

function SelectedChar(type: string, name: string) {
  return (
    <div className="selectedChar">
      <p>*Image*</p>
      <p>
        {type} / {name}
      </p>
    </div>
  );
}

export default SelectedChar;
