export interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.methodology": {
    en: "Methodology",
    fr: "Méthodologie"
  },
  "nav.system": {
    en: "The System",
    fr: "Le Système"
  },
  "nav.about": {
    en: "About",
    fr: "À Propos"
  },
  "nav.contact": {
    en: "Contact",
    fr: "Contact"
  },
  "nav.auditCta": {
    en: "Audit Your Architecture",
    fr: "Auditez Votre Architecture"
  },

  // Hero Section
  "hero.title": {
    en: "Stop Guessing. Start Engineering Revenue.",
    fr: "Arrêtez de deviner. Ingéniez vos revenus."
  },
  "hero.subtitle": {
    en: "We build Autonomous Acquisition Ecosystems powered by Data & AI. Replacing marketing magic with mathematical truth.",
    fr: "Nous construisons des Écosystèmes d'Acquisition Autonomes propulsés par les Données & l'IA. Remplacer la magie du marketing par la vérité mathématique."
  },
  "hero.cta.primary": {
    en: "Book Architecture Review",
    fr: "Réserver un Audit Architecture"
  },
  "hero.cta.secondary": {
    en: "See The System",
    fr: "Voir le Système"
  },

  // Problem Section (The Chaos)
  "problem.title": {
    en: "The Chaos",
    fr: "Le Chaos"
  },
  "problem.subtitle": {
    en: "Traditional agencies sell you hope. We sell you a system.",
    fr: "Les agences traditionnelles vous vendent de l'espoir. Nous vous vendons un système."
  },
  "problem.vanity.title": {
    en: "Vanity Metrics",
    fr: "Métriques de Vanité"
  },
  "problem.vanity.items": {
    en: "Likes, Impressions, Followers, Traffic",
    fr: "Likes, Impressions, Abonnés, Trafic"
  },
  "problem.reality.title": {
    en: "P&L Reality",
    fr: "Réalité du P&L"
  },
  "problem.reality.items": {
    en: "Revenue, CAC, LTV, ROAS, Profit",
    fr: "Revenu, CAC, LTV, ROAS, Profit"
  },
  "problem.manual.title": {
    en: "Manual Grunt Work",
    fr: "Travail Manuel Répétitif"
  },
  "problem.manual.items": {
    en: "Copy-paste, spreadsheets, human error",
    fr: "Copier-coller, tableurs, erreur humaine"
  },
  "problem.automation.title": {
    en: "AI Automation",
    fr: "Automatisation IA"
  },
  "problem.automation.items": {
    en: "24/7 workflows, zero latency, infinite scale",
    fr: "Workflows 24/7, zéro latence, échelle infinie"
  },

  // Solution Section (The Machine)
  "solution.title": {
    en: "The Machine",
    fr: "La Machine"
  },
  "solution.subtitle": {
    en: "Three pillars of autonomous revenue generation",
    fr: "Trois piliers de génération de revenus autonome"
  },
  "solution.pillar1.title": {
    en: "Data-First Truth",
    fr: "Vérité Data-First"
  },
  "solution.pillar1.description": {
    en: "Server-side tracking that captures every signal. Real-time dashboards that show the actual P&L impact.",
    fr: "Tracking côté serveur qui capture chaque signal. Tableaux de bord en temps réel qui montrent l'impact réel sur le P&L."
  },
  "solution.pillar1.features": {
    en: "Server-side tracking, BigQuery pipelines, Looker dashboards",
    fr: "Tracking serveur, pipelines BigQuery, dashboards Looker"
  },
  "solution.pillar2.title": {
    en: "AI Autonomy",
    fr: "Autonomie IA"
  },
  "solution.pillar2.description": {
    en: "Workflows that run without you. AI agents that make decisions, execute, and optimize 24/7.",
    fr: "Des workflows qui tournent sans vous. Des agents IA qui décident, exécutent et optimisent 24/7."
  },
  "solution.pillar2.features": {
    en: "n8n/Make workflows, GPT agents, automated campaigns",
    fr: "Workflows n8n/Make, agents GPT, campagnes automatisées"
  },
  "solution.pillar3.title": {
    en: "Scalable Infrastructure",
    fr: "Infrastructure Évolutive"
  },
  "solution.pillar3.description": {
    en: "Assets you own, not rent. Systems that compound value over time.",
    fr: "Des actifs que vous possédez, pas louez. Des systèmes qui composent de la valeur dans le temps."
  },
  "solution.pillar3.features": {
    en: "Custom CRMs, owned databases, proprietary models",
    fr: "CRMs personnalisés, bases de données propriétaires, modèles exclusifs"
  },

  // Tech Stack
  "tech.title": {
    en: "Our Weapons of Choice",
    fr: "Nos Armes de Prédilection"
  },
  "tech.subtitle": {
    en: "The technology stack that powers autonomous revenue systems",
    fr: "La stack technologique qui alimente les systèmes de revenus autonomes"
  },

  // Founder Section
  "founder.title": {
    en: "The Architect",
    fr: "L'Architecte"
  },
  "founder.name": {
    en: "Antoine",
    fr: "Antoine"
  },
  "founder.role": {
    en: "Founder & Revenue Architect",
    fr: "Fondateur & Architecte Revenue"
  },
  "founder.bio": {
    en: "10+ years engineering growth systems across France, Canada, and Southeast Asia. I don't do marketing—I build machines that generate revenue while you sleep.",
    fr: "10+ ans d'ingénierie de systèmes de croissance en France, au Canada et en Asie du Sud-Est. Je ne fais pas de marketing—je construis des machines qui génèrent des revenus pendant que vous dormez."
  },
  "founder.quote": {
    en: "Alone we go faster, together we go further.",
    fr: "Seul on va plus vite, ensemble on va plus loin."
  },

  // Contact / CTA
  "cta.title": {
    en: "Ready to Stop Guessing?",
    fr: "Prêt à Arrêter de Deviner?"
  },
  "cta.subtitle": {
    en: "Book a 30-minute architecture review. We'll audit your current stack and show you exactly where revenue is leaking.",
    fr: "Réservez un audit architecture de 30 minutes. Nous analyserons votre stack actuelle et vous montrerons exactement où les revenus fuient."
  },
  "cta.button": {
    en: "Book Architecture Review",
    fr: "Réserver l'Audit Architecture"
  },
  "cta.available": {
    en: "Available for consultation",
    fr: "Disponible pour consultation"
  },

  // Form
  "form.name": {
    en: "Name",
    fr: "Nom"
  },
  "form.email": {
    en: "Email",
    fr: "Email"
  },
  "form.company": {
    en: "Company",
    fr: "Entreprise"
  },
  "form.message": {
    en: "Tell us about your current revenue challenges",
    fr: "Parlez-nous de vos défis de revenus actuels"
  },
  "form.submit": {
    en: "Submit",
    fr: "Envoyer"
  },

  // About Page
  "about.title": {
    en: "From Premonition to Prediction.",
    fr: "De la Prémonition à la Prédiction."
  },
  "about.definition": {
    en: "In Japanese, Yokan (予感) means 'Premonition'.",
    fr: "En japonais, Yokan (予感) signifie 'Prémonition'."
  },
  "about.phonetic": {
    en: "[Yo-Kan]",
    fr: "[Yo-Kan]"
  },
  "about.definitionShort": {
    en: "n. Premonition; the feeling of something to come.",
    fr: "n. Prémonition; le pressentiment de quelque chose à venir."
  },
  "about.story": {
    en: "In traditional business, growth is often a guessing game. You have a 'hunch'. We built Yokan Digital to replace that hunch with certainty. When you build the right Data & AI infrastructure, revenue is no longer a surprise. It becomes a calculated result.",
    fr: "Dans le business traditionnel, la croissance est un jeu de hasard. On a une 'intuition'. Nous avons créé Yokan Digital pour remplacer cette intuition par la certitude. Avec la bonne infrastructure Data & IA, le revenu n'est plus une surprise. C'est un résultat calculé."
  },
  "about.pivot": {
    en: "From Intuition to Calculation.",
    fr: "De l'Intuition au Calcul."
  },
  "about.tagline": {
    en: "Stop guessing your future. Engineer it.",
    fr: "Arrêtez de deviner l'avenir. Ingéniez-le."
  },
  "about.old": {
    en: "Hunch",
    fr: "Intuition"
  },
  "about.new": {
    en: "Mathematical Certainty",
    fr: "Certitude Mathématique"
  },
  "about.founder": {
    en: "Antoine Clerc-Renaud, Founder.",
    fr: "Antoine Clerc-Renaud, Fondateur."
  },

  // Footer
  "footer.tagline": {
    en: "Revenue Architecture & AI Systems",
    fr: "Architecture Revenue & Systèmes IA"
  },
  "footer.copyright": {
    en: "© 2024 Yokan Digital. All rights reserved.",
    fr: "© 2024 Yokan Digital. Tous droits réservés."
  },
  "footer.privacy": {
    en: "Privacy Policy",
    fr: "Politique de Confidentialité"
  },
  "footer.terms": {
    en: "Terms of Service",
    fr: "Conditions d'Utilisation"
  }
};

export function translate(key: string, language: 'en' | 'fr'): string {
  return translations[key]?.[language] || key;
}
