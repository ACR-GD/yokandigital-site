// Simulation de l'envoi d'email pour éviter les erreurs
export const sendContactEmail = async (email: string, subject: string, message: string) => {
  console.log(`[SIMULATION] Email envoyé à: ${email}`);
  console.log(`[SIMULATION] Sujet: ${subject}`);
  return true;
};

// Au cas où il chercherait aussi une classe MailClient (fréquent sur Replit)
export class MailClient {
  async send() {
    console.log("MailClient: Envoi simulé");
  }
}