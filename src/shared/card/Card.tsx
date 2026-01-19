import "./Card.css";
import type { ICardProps } from "./ICardProps";

function Card({
  title,
  description,
  value,
  footerText,
  imageUrl,
  onClick
}: ICardProps) {

  const handleClick = () => {
    let newValue: number = Number(value);

    const cartObj = {
      id: Math.random(),
      name: title, 
      price: newValue,
      quantity:1
    }

    onClick(cartObj)
  }

  return (
    <div className="card" onClick={handleClick}>
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}

      <div className="card-header">
        <h3>{title}</h3>
      </div>

      {(value || description) && (
        <div className="card-body">
          {value && <span className="card-value">R${value}</span>}
          {description && <p>{description}</p>}
        </div>
      )}

      {footerText && (
        <div className="card-footer">
          <span>{footerText}</span>
        </div>
      )}

      <div className="card-footer">
        <button onClick={handleClick}>Adicionar +</button>
      </div>
    </div>
  );
}

export default Card;
