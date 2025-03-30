import React, { useState, useEffect } from "react";
import FormCard from "../FormCard/FormCard";
import "./carousel.css";
import { useAuth } from "../AuthContext";

interface FormData {
  title: string;
  link: string;
  description: string;
  name: string;
}

const Carousel: React.FC = () => {
  const { user } = useAuth(); // Get user from AuthContext
  const [forms, setForms] = useState<FormData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load forms from localStorage when the component mounts
  useEffect(() => {
    const storedForms = JSON.parse(localStorage.getItem("formEntries") || "[]");

    // Check if forms are empty, and add some default forms if true
    if (storedForms.length === 0) {
      const defaultForms: FormData[] = [
        {
          title: "Survey 1",
          link: "#",
          description: "First survey",
          name: "Admin",
        },
      ];

      localStorage.setItem("formEntries", JSON.stringify(defaultForms));
      setForms(defaultForms);
    } else {
      setForms(storedForms);
    }
  }, []);

  const nextForm = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % forms.length);
  };

  const addForm = (title: string, link: string, description: string) => {
    if (!user) return;

    const newForm: FormData = {
      title,
      link,
      description,
      name: user.name,
    };

    // Update localStorage with the new form entry
    const updatedForms = [...forms, newForm];
    localStorage.setItem("formEntries", JSON.stringify(updatedForms));

    // Update state
    setForms(updatedForms);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-viewport">
        <div
          className="carousel"
          style={{
            transform: `translateY(-${currentIndex * (100 / forms.length)}%)`,
          }}
        >
          {forms.map((form, index) => (
            <div key={index} className="carousel-item">
              <FormCard
                title={form.title}
                link={form.link}
                description={form.description}
                name={form.name}
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextForm}>Next</button>
    </div>
  );
};

export default Carousel;
