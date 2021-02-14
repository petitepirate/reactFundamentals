function Person(props) {
    const { name, age, hobbies } = props;
    return (
    <div className="person">
      <p>Learn some information about this person:</p>
      <p>Name: {name.length < 8 ? name : name.substring(0, 6) + '...'}</p>
      <p>Age: {age}</p>
      <p>Hobbies:</p>
      <ol>
        {hobbies.map(hobby =>
          <li key={hobby}>{hobby}</li>
        )}
      </ol>
      <h3>{age >= 18 ? 'Please go vote!' : 'You must be 18 to vote'}</h3>
    </div>
    )
  }
