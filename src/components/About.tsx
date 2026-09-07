import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { ref: avatarRef, className: avatarClass } = useScrollReveal(true);
  const { ref: eyebrowRef, className: eyebrowClass } = useScrollReveal();
  const { ref: titleRef, className: titleClass } = useScrollReveal();
  const { ref: p1Ref, className: p1Class } = useScrollReveal();
  const { ref: p2Ref, className: p2Class } = useScrollReveal();
  const { t } = useLanguage();
  const profileImageUrl = "/profile1.png";

  const avatarStyle = {
    "--avatar-radius": "32px",
    "--avatar-image-position": "center 10%",
  } as React.CSSProperties;

  const infoCards = [
    {
      icon: (
        <img
          src="/ku.jpg"
          alt="Kasetsart University"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-sm)",
            objectFit: "cover",
          }}
        />
      ),
      bgColor: "transparent",
      titleKey: "about.cards.education.title",
      subtitleKey: "about.cards.education.subtitle",
    },
    {
      icon: (
        <img
          src="/database-svgrepo-com.svg"
          alt="Full Stack Developer"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-sm)",
            objectFit: "cover",
          }}
        />
      ),
      bgColor: "transparent",
      titleKey: "about.cards.role.title",
      subtitleKey: "about.cards.role.subtitle",
    },
    {
      icon: (
        <img
          src="/google-maps-old-svgrepo-com.svg"
          alt="Location"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-sm)",
            objectFit: "cover",
          }}
        />
      ),
      bgColor: "transparent",
      titleKey: "about.cards.location.title",
      subtitleKey: "about.cards.location.subtitle",
    },
    {
      icon: (
        <img
          src="/language-svgrepo-com.svg"
          alt="Languages"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "var(--radius-sm)",
            objectFit: "cover",
          }}
        />
      ),
      bgColor: "transparent",
      titleKey: "about.cards.language.title",
      subtitleKey: "about.cards.language.subtitle",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div
          className={`avatar-wrap ${avatarClass}`}
          ref={avatarRef}
          style={avatarStyle}
        >
          <div className="avatar">
            <img
              src={profileImageUrl}
              alt="Theeraphat Chumchit profile"
              className="avatar-image"
            />
          </div>
          <div className="avatar-badge">
            <span className="dot"></span>
            <span>{t("about.status")}</span>
          </div>
        </div>

        <div className="about-bio">
          <span className={`eyebrow ${eyebrowClass}`} ref={eyebrowRef}>
            {t("about.eyebrow")}
          </span>
          <h2
            className={`${titleClass}`}
            ref={titleRef}
            style={{
              fontSize: "clamp(26px,3.2vw,34px)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              marginBottom: "18px",
            }}
          >
            {t("about.title")}
          </h2>
          <p className={`${p1Class}`} ref={p1Ref}>
            {t("about.bio1")}
          </p>
          <p className={`${p2Class}`} ref={p2Ref}>
            {t("about.bio2")}
          </p>

          <div className="info-cards stagger">
            {infoCards.map((card, i) => (
              <div
                key={i}
                className="info-card reveal is-visible"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="ic" style={{ background: card.bgColor }}>
                  {card.icon}
                </div>
                <div>
                  <h4>{t(card.titleKey)}</h4>
                  <span>{t(card.subtitleKey)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
