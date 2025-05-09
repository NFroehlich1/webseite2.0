import React, { useState } from "react";
import "./FAQ.css"

type Faq = {
  question: string;
  answer: string;
};

type FaqListProps = {
  faqs: Faq[];
};

type FaqItemProps = {
  faq: Faq;
};

const FaqItem: React.FC<FaqItemProps> = ({ faq }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
    setIsRotated(!isRotated);
  };

  return (
    <div className="faq-item">
      <div
        className={"faq-question" + (isRotated ? " rotate" : "")}
        onClick={toggleExpansion}
      >
        {faq.question}
        
      </div>
      {isExpanded && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

const FaqList: React.FC<FaqListProps> = ({ faqs }) => {
  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <FaqItem key={index} faq={faq} />
      ))}
    </div>
  );
};

const faqs: Faq[] = [
  {
   
    question: "Warum brauche ich eine Bewerbung, um einer Hochschulgruppe beizutreten?",
    answer: "Deine Bewerbung hilft dabei, uns ein erstes Bild von dir zu machen und dich in die Hochschulgruppe zu integrieren. Wir können anhand dessen besser einordnen, in welches deiner Wunsch-Ressorts du am besten reinpasst. Aber keine Sorge, die Bewerbung ist nicht dazu da Interessenten auszusortieren. Du brauchst keine Vorkenntnisse oder andere Anforderungen. Hauptsache ist, du zeigst Interesse, dich bei linkit einzubringen.",
  },

  {
    
    question: "Wie ausführlich sollte meine Bewerbung sein?",
    answer: "Deine Bewerbung sollte deine Interessen und was du bei linkit machen willst enthalten. Dabei kannst du dich aber ruhig kurzhalten. Wenn du ein bisschen über deine bisherigen Erfahrungen im Bereich Data Science und Industrie 4.0 berichtest, können wir dich besser einschätzen und finden vielleicht eine passender Aufgabe, an der du mehr Freude hast.",
  },
  {
    
    question: "Ich habe die Bewerbungsphase verpasst, wäre aber trotzdem gerne dabei. Was kann ich tun?",
    answer: "Außerhalb der Bewerbungsphase kannst du dich initiativ bewerben, indem du eine Mail an hr@linkit.tech schreibst.",
  },
  {
  
    question: "Warum sollte ich beitreten? Kann ich nicht einfach so zu Vorträgen und Workshops vorbeikommen?",
    answer: "Unsere Kooperationspartner und Referenten haben ein Interesse daran zu erfahren, welche Zielgruppe an den Veranstaltungen teilnimmt. Sobald du eingetragenes Mitglied bist, tauchst du - selbstverständlich anonym - in unseren Statistiken auf. Dadurch können Inhalte auf die Mitglieder zugeschnitten werden. Außerdem gehört zur Hochschulgruppe auch die stetige Arbeit an unseren internen und externen Projekten, die über unsere Ressorts stattfinden. Als Mitglied lernst du andere linkit-ler besser kennen und kannst dich so mit Gleichgesinnten vernetzen. Mitglieder profitieren zudem von Angeboten wie Teamevents, Weihnachtsüberraschungen und vielem mehr.",
  },
  {
    
   
    question: "Was sind die Erwartungen an mich als Mitglied?",
    answer: "Vorerst brauchst du nur Interesse an den Kerninhalten von linkit. Kein Mitglied ist dazu verpflichtet, sich aktiv einzubringen. Dennoch lebt die Hochschulgruppe von engagierten Studenten und funktioniert nur, weil viele unserer Mitglieder aktiv an den Inhalten mitgestalten. In welchem Umfang du das tust, bleibt dir überlassen. Wir freuen uns, wenn du immer wieder in Präsenz an Treffen und Veranstaltungen teilnimmst. damit wir uns untereinander kennenlernen und einen lebendigen Austausch aufrechterhalten.",
  },
  {

    question: "Wo kann ich mehr über linkit erfahren?",
    answer: "Wenn du auf der Website nicht fündig wirst, nutze gerne unser Kontaktformular für weitere Fragen. Ansonsten findest du uns auch auf Linkedln, Instagram und Facebook, oder du meldest dich für unseren Newsletter an. Wenn du uns persönlich kennenlernen willst, findest du uns auf der Hochschulgruppenmesse, oder du kommst zu Semesterbeginn bei unserem Infoabend vorbei. Der wird rechtzeitig über Social Media angekündigt.",
  },
  {
  
    question: "Kann ich Mitglied werden, wenn ich nicht in Karlsruhe bin?",
    answer: "Ja, in den letzten Jahren hat linkit das Hybrid- und Online-Angebot deutlich ausgebaut. Dennoch wollen wir weiterhin eine Präsenz-Hochschulgruppe bleiben, d.h. einige Vorträge und Workshops findet nur vor Ort statt und es gehört zum Hochschulgruppenleben dazu sich auch hin und wieder persönlich zu treffen. Wir freuen uns trotzdem über jeden, der erstmal online einsteigt.",
  },
];

const App: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="App">
    
      <FaqList faqs={faqs} />
    </div>
  );
};

export default App;
