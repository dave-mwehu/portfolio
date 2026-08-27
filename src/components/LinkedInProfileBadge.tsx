import { useEffect, useRef } from "react";
import { profile } from "../data/profile";

declare global {
  interface Window {
    LIRenderAll?: () => void;
  }
}

const badgeThemes = ["light", "dark"] as const;

export function LinkedInProfileBadge() {
  const badgeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingScript = document.getElementById("linkedin-profile-badge-script");

    if (existingScript) {
      window.LIRenderAll?.();
      return;
    }

    const script = document.createElement("script");
    script.id = "linkedin-profile-badge-script";
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.onload = () => window.LIRenderAll?.();
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const setFrameTitles = () => {
      badgeContainerRef.current?.querySelectorAll("iframe").forEach((frame) => {
        frame.title = `Profil LinkedIn de ${profile.name}`;
      });
    };

    const observer = new MutationObserver(setFrameTitles);
    if (badgeContainerRef.current) {
      observer.observe(badgeContainerRef.current, { childList: true, subtree: true });
    }
    setFrameTitles();

    return () => observer.disconnect();
  }, []);

  const badgeUrl = `https://cd.linkedin.com/in/${profile.linkedinVanity}?trk=profile-badge`;

  return (
    <div className="linkedin-profile-badge" ref={badgeContainerRef}>
      <div className="linkedin-badge-variants">
        {badgeThemes.map((theme) => (
          <div
            className={`linkedin-badge-variant linkedin-badge-variant--${theme}`}
            key={theme}
          >
            <div
              className="badge-base LI-profile-badge"
              data-locale="fr_FR"
              data-size="medium"
              data-theme={theme}
              data-type="HORIZONTAL"
              data-vanity={profile.linkedinVanity}
              data-version="v1"
            >
              <a className="badge-base__link LI-simple-link" href={badgeUrl} target="_blank" rel="noreferrer">
                {profile.name}
              </a>
            </div>
          </div>
        ))}
      </div>
      <a className="linkedin-badge-fallback" href={profile.linkedin} target="_blank" rel="noreferrer">
        Voir le profil LinkedIn
      </a>
    </div>
  );
}
