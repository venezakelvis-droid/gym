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
  return (
    <div className="card" onClick={onClick}>
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
          {value && <span className="card-value">{value}</span>}
          {description && <p>{description}</p>}
        </div>
      )}

      {footerText && (
        <div className="card-footer">
          <span>{footerText}</span>
        </div>
      )}
    </div>
  );
}

export default Card;
