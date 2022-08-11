import React from "react";

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
      <ul>
          {/* JSX allows embedding any expression in curly braces so we could inline the map() result: */}
          {numbers.map((number) =>
              // Correct! Key should be specified inside the array.
              <ListItem key={number.toString()}
                  value={number} />
          )}
    </ul>
  );
}

export default NumberList;