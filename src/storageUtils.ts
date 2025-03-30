export const getFormData = () => {
    return JSON.parse(localStorage.getItem("formData") || "[]");
  };
  