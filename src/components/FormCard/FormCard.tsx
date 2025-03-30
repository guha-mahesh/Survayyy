import "./formcard.css";
import formImg from "../../assets/formy.png";

interface FormCardProps {
  title: string;
  name?: string;
  description?: string;
  link?: string;
}

const FormCard: React.FC<FormCardProps> = ({
  title,
  name = "By: Otto",
  description = "A few questions on this topic",
  link = "",
}) => {
  return (
    <div className="form-card">
      <div className="titlewrap">
        <div className="card-title">{title}</div>
        <div className="card-name">{name}</div>
      </div>

      <div className="card-desc">
        <p className="card-desc-text">{description}</p>
      </div>
      <div className="card-image-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={formImg} alt="Card illustration" className="card-image" />
        </a>
      </div>
    </div>
  );
};

export default FormCard;
