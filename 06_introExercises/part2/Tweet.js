function Tweet(props) {
    return (
      <div>
        <h3>{props.message}</h3>
        <p>By: @{props.username} - {props.name} - {props.date}</p>
      </div>
    )
  }
