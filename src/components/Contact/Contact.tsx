import React, { useState } from "react";
import emailjs from "emailjs-com";
import ContactPic from "./ContactPic.png";
import { useTranslation } from "react-i18next";
import "./contactForm.css";

interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
  theme: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState<ContactValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
    theme: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      theme: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Do something with the form values
    console.log(formValues);
    sendEmail(event.target as HTMLFormElement);
  };

  function sendEmail(form: HTMLFormElement) {
    form.theme = formValues.theme;

    emailjs
    .sendForm(
      "service_5mu0k9s",
      "template_a4ljchj",
      form,
      "pR-oalLc833uuB_46"
    )
    .then(
      (result: { text: string }) => {
        console.log(result.text);
        setIsSubmitted(true);
      },
      (error: { text: string }) => {
        console.log(error.text);
         
      }
    );
}

  return (
    <div className="contact-page-wrapper">
      <div className="contact-grid centered-form">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-title">{t("kontakt")}</div>
          <div className="form-desc">{t("contact_description", "Du hast Fragen, Anregungen oder möchtest mit uns zusammenarbeiten? Schreib uns einfach über das Formular!")}</div>
          <div className="form-row">
            <div className="form-item">
              <label htmlFor="name">{t("name_label", "Vor- und Zuname *")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
                aria-label={t("name_label", "Vor- und Zuname") as string}
              />
            </div>
            <div className="form-item">
              <label htmlFor="email">{t("email_label", "E-Mail *")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
                aria-label={t("email_label", "E-Mail") as string}
              />
            </div>
            <div className="form-item">
              <label htmlFor="phone">{t("phone_label", "Telefonnummer")}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                aria-label={t("phone_label", "Telefonnummer") as string}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-item" style={{ flex: '1 1 100%' }}>
              <label id="themaID">{t("topic_label", "Thema *")}</label>
              <div className="checkbox-group" style={{flexDirection: 'column', gap: '12px'}}>
                <label>
                  <input
                    type="radio"
                    name="theme"
                    value="Kooperationspartner"
                    checked={formValues.theme === "Kooperationspartner"}
                    onChange={handleThemeChange}
                    required
                  />
                  {t("cooperation_partner_theme", "Kooperationspartner")}
                </label>
                <label>
                  <input
                    type="radio"
                    name="theme"
                    value="Projektanfrage"
                    checked={formValues.theme === "Projektanfrage"}
                    onChange={handleThemeChange}
                  />
                  {t("project_request_theme", "Projektanfrage")}
                </label>
                <label>
                  <input
                    type="radio"
                    name="theme"
                    value="Vortrags/Workshopsanfrage"
                    checked={formValues.theme === "Vortrags/Workshopsanfrage"}
                    onChange={handleThemeChange}
                  />
                  {t("presentation_workshop_request_theme", "Vortrags/Workshopsanfrage")}
                </label>
                <label>
                  <input
                    type="radio"
                    name="theme"
                    value="Schulungsanfrage"
                    checked={formValues.theme === "Schulungsanfrage"}
                    onChange={handleThemeChange}
                  />
                  {t("training_request_theme", "Schulungsanfrage")}
                </label>
                <label>
                  <input
                    type="radio"
                    name="theme"
                    value="Mitglied werden"
                    checked={formValues.theme === "Mitglied werden"}
                    onChange={handleThemeChange}
                  />
                  {t("become_member_theme", "Mitglied werden")}
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-item" style={{ flex: '1 1 100%' }}>
              <label htmlFor="message">{t("message_label", "Nachricht *")}</label>
              <textarea
                id="message"
                name="message"
                className="MsgTextbox"
                value={formValues.message}
                onChange={handleChange}
                required
                aria-label={t("message_label", "Nachricht") as string}
              />
            </div>
          </div>

          <button type="submit">{t("submit_button", "Absenden")}</button>
          {isSubmitted && <div className="form-success">{t("form_success", "Vielen Dank für deine Nachricht! Wir melden uns zeitnah.")}</div>}
          {/* Fehlerbehandlung kann hier ergänzt werden */}
          <div className="dsgvo-hint">{t("privacy_notice", "Mit dem Absenden stimmst du der Verarbeitung deiner Daten gemäß unserer")} <a href="/privacy" style={{color:'#52b4dc'}}>{t("privacy_policy", "Datenschutzerklärung")}</a> {t("privacy_notice_end", "zu.")}</div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
