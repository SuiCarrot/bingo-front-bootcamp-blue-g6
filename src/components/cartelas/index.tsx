type CartelaCard = {
  numbers: number[];
  index: number;
};

export function CardCartela(card: CartelaCard) {
  const handleClick: any = (e: any) => {
    if (e.currentTarget.style.backgroundColor) {
      e.currentTarget.style.backgroundColor = null;
    } else {
      e.currentTarget.style.backgroundColor = "rgb(47, 227, 131)";
    }
    e.currentTarget.classList.add("mark", "mark1");
  };

  return (
    <table key={card.index}>
      <thead className="card-title">Cartela {card.index + 1}</thead>

      <tbody>
        <tr>
          <td onClick={handleClick} className="mark">
            {card.numbers[0]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[1]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[2]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[3]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[4]}
          </td>
        </tr>
        <tr>
          <td onClick={handleClick} className="mark">
            {card.numbers[6]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[7]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[8]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[9]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[10]}
          </td>
        </tr>
        <tr>
          <td onClick={handleClick} className="mark">
            {card.numbers[11]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[12]}
          </td>
          <td className="free"></td>
          <td onClick={handleClick} className="mark">
            {card.numbers[13]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[14]}
          </td>
        </tr>
        <tr>
          <td onClick={handleClick} className="mark">
            {card.numbers[15]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[16]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[17]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[18]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[19]}
          </td>
        </tr>
        <tr>
          <td onClick={handleClick} className="mark">
            {card.numbers[20]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[21]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[22]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[23]}
          </td>
          <td onClick={handleClick} className="mark">
            {card.numbers[24]}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
