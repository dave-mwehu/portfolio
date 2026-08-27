import { useEffect, useRef, useState } from "react";
import { DownloadIcon } from "./Icons";

const primaryDocuments = [
  { label: "CV Français", detail: "Version design", href: "/David_Mwehu_Munde_CV_FR.pdf" },
  { label: "English Resume", detail: "Designed résumé", href: "/David_Mwehu_Munde_CV_EN.pdf" },
];

const atsDocuments = [
  { label: "CV Français - ATS", detail: "Version simplifiée", href: "/David_Mwehu_Munde_CV_FR_ATS.pdf" },
  { label: "English Resume - ATS", detail: "ATS-friendly", href: "/David_Mwehu_Munde_CV_EN_ATS.pdf" },
];

type DocumentLink = (typeof primaryDocuments)[number];

function CvDocumentLink({ label, detail, href }: DocumentLink) {
  const filename = href.split("/").pop();

  return (
    <a href={href} download={filename}>
      <span>{label}</span>
      <small>{detail}</small>
    </a>
  );
}

export function CvSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className={`cv-selector${isOpen ? " is-open" : ""}`}>
      <button
        className="button secondary"
        type="button"
        ref={triggerRef}
        aria-expanded={isOpen}
        aria-controls="cv-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        CV / Resume
        <DownloadIcon />
      </button>
      {isOpen ? (
        <div className="cv-menu" id="cv-menu" aria-label="Versions disponibles du CV">
          <div className="cv-menu-group">
            <p>Versions principales</p>
            {primaryDocuments.map((document) => (
              <CvDocumentLink key={document.href} {...document} />
            ))}
          </div>
          <div className="cv-menu-group cv-menu-group--secondary">
            <p>ATS versions</p>
            {atsDocuments.map((document) => (
              <CvDocumentLink key={document.href} {...document} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
