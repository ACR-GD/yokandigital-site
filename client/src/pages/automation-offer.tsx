import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, MonitorPlay, Mic2 } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AutomationOfferPage() {
  const { language } = useLanguage();

  const isEn = language === "en";

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Hero */}
      <section className="border-b border-white/5 bg-[#050505] pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <div className="font-mono text-[#00ff88] text-xs mb-2">
            Automation & AI for creators
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {isEn
                ? "Turn raw interviews into visual decks, automatically."
                : "Transformez vos interviews en decks visuels, automatiquement."}
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed">
              {isEn
                ? "I build custom n8n + AI pipelines that watch your folders for new interviews or episodes, transcribe them, analyse the content in your style, and generate producer-friendly PDF or HTML decks you can share with editors, clients and collaborators."
                : "Je construis des pipelines n8n + IA qui surveillent vos dossiers pour détecter de nouveaux enregistrements, les transcrivent, analysent le contenu dans votre style, et génèrent des decks ou one-pagers PDF/HTML prêts à être partagés avec vos monteurs, clients et collaborateurs."}
            </p>

            <div className="flex flex-wrap gap-3 pt-1 text-xs md:text-sm">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-gray-200">
                <MonitorPlay className="w-4 h-4 text-[#00ff88]" />
                {isEn ? "Documentary directors & producers" : "Réalisateurs et producteurs documentaires"}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-gray-200">
                <Mic2 className="w-4 h-4 text-[#00ff88]" />
                {isEn ? "Podcast & content teams" : "Équipes de podcasts et de contenus"}
              </span>
              <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-gray-200">
                <FileText className="w-4 h-4 text-[#00ff88]" />
                {isEn ? "Agencies with recurring formats" : "Agences avec formats récurrents"}
              </span>
            </div>

            <div className="pt-2">
              <a href="#contact">
                <Button className="bg-[#00ff88] text-black hover:bg-[#00ff88]/90 font-semibold px-6 py-2 text-sm">
                  {isEn
                    ? "Tell me about your use case"
                    : "Parlez-moi de votre cas d'usage"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What it does */}
      <section className="border-b border-white/5 bg-[#050505] py-10">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-sm">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-medium">
              {isEn ? "What it does" : "Ce que ça fait"}
            </p>
            <p className="text-white font-semibold">
              {isEn
                ? "A practical pipeline, not another generic AI tool."
                : "Un pipeline concret, pas un énième outil IA générique."}
            </p>
            <p className="text-gray-300">
              {isEn
                ? "The goal is simple: you drop content in, you get back something you can send to humans without rewriting the same explanations every time."
                : "L'objectif est simple : vous déposez du contenu, vous récupérez un document que vous pouvez envoyer à des humains sans réécrire les mêmes explications à chaque fois."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="tech-card rounded-xl p-5">
              <p className="font-semibold mb-2">
                {isEn ? "Ingest & transcription" : "Ingestion & transcription"}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  {isEn
                    ? "Watches a folder (Google Drive, Dropbox, etc.) for new audio / video."
                    : "Surveille un dossier (Google Drive, Dropbox, etc.) pour les nouveaux fichiers audio/vidéo."}
                </li>
                <li>
                  {isEn
                    ? "Transcribes automatically (local Whisper or API, depending on your setup)."
                    : "Transcrit automatiquement (Whisper local ou API, selon votre infrastructure)."}
                </li>
              </ul>
            </div>

            <div className="tech-card rounded-xl p-5">
              <p className="font-semibold mb-2">
                {isEn ? "Analysis & style" : "Analyse & style"}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  {isEn
                    ? "Analyses the transcript with prompts tuned to your documentary / editorial voice."
                    : "Analyse la transcription avec des prompts ajustés à votre voix documentaire / éditoriale."}
                </li>
                <li>
                  {isEn
                    ? "Optionally uses past episodes or films as style reference."
                    : "Peut utiliser vos épisodes ou films existants comme référence de style."}
                </li>
              </ul>
            </div>

            <div className="tech-card rounded-xl p-5">
              <p className="font-semibold mb-2">
                {isEn ? "Deck generation" : "Génération de deck"}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  {isEn
                    ? "Generates a visual one-pager or deck (PDF or HTML)."
                    : "Génère un one-pager visuel ou un deck (PDF ou HTML)."}
                </li>
                <li>
                  {isEn
                    ? "Includes logline, key themes, possible angles and standout quotes / moments."
                    : "Inclut logline, thèmes clés, pistes d'angles et citations / moments marquants."}
                </li>
              </ul>
            </div>

            <div className="tech-card rounded-xl p-5">
              <p className="font-semibold mb-2">
                {isEn ? "Your tools, your stack" : "Vos outils, votre stack"}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                <li>
                  {isEn
                    ? "Built in your own n8n instance."
                    : "Construit dans votre propre instance n8n."}
                </li>
                <li>
                  {isEn
                    ? "Connects to your storage, your LLMs and your preferred output format."
                    : "Se connecte à votre stockage, vos LLMs et votre format de sortie préféré."}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-white/5 bg-[#050505] py-10">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-sm">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-medium">
              {isEn ? "How it works" : "Comment ça se passe"}
            </p>
            <p className="text-white font-semibold">
              {isEn
                ? "A small, focused project, end to end."
                : "Un projet petit mais très ciblé, de bout en bout."}
            </p>
          </div>

          <ol className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-white">
                {isEn
                  ? "1. Short mapping call (30–45 min)"
                  : "1. Appel de cadrage court (30–45 min)"}
              </span>
              <p className="mt-1">
                {isEn
                  ? "We map your current process: where your files live, how you brief people today, what \"good\" looks like for your decks."
                  : "On cartographie votre flux actuel : où vivent vos fichiers, comment vous briefez aujourd'hui, et à quoi ressemble un \"bon\" deck pour vous."}
              </p>
            </li>
            <li>
              <span className="font-semibold text-white">
                {isEn
                  ? "2. Design & build (1–2 weeks)"
                  : "2. Conception & build (1–2 semaines)"}
              </span>
              <p className="mt-1">
                {isEn
                  ? "I build a custom workflow using n8n, your transcription of choice and your LLMs, wired to your storage and deck tooling."
                  : "Je construis un workflow sur-mesure avec n8n, votre solution de transcription et vos LLMs, connecté à votre stockage et à vos outils de deck."}
              </p>
            </li>
            <li>
              <span className="font-semibold text-white">
                {isEn
                  ? "3. Refinement on real material"
                  : "3. Ajustements sur du vrai contenu"}
              </span>
              <p className="mt-1">
                {isEn
                  ? "We run 2–3 real interviews / episodes through the system and adjust prompts and layout until the output is actually useful."
                  : "On passe 2–3 interviews / épisodes réels dans le système et on ajuste prompts et mise en page jusqu'à ce que le résultat soit vraiment utile."}
              </p>
            </li>
            <li>
              <span className="font-semibold text-white">
                {isEn
                  ? "4. Handover & documentation"
                  : "4. Transmission & documentation"}
              </span>
              <p className="mt-1">
                {isEn
                  ? "You keep the pipeline in your own n8n, with clear documentation and a Loom walkthrough for your team."
                  : "Vous gardez le pipeline dans votre n8n, avec une documentation claire et un Loom de démonstration pour votre équipe."}
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Pilot offer & contact */}
      <section id="contact" className="bg-[#050505] py-10">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-sm">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 font-medium">
              {isEn ? "Pilot offer" : "Offre pilote"}
            </p>
            <p className="text-white font-semibold">
              {isEn
                ? "Early clients, simple pricing."
                : "Premiers clients, tarification simple."}
            </p>
          </div>

          <div className="tech-card rounded-2xl p-5 space-y-3">
            <p className="text-lg font-semibold text-[#00ff88]">
              {isEn
                ? "Interview → Deck pipeline"
                : "Pipeline Interview → Deck"}
            </p>
            <p className="text-gray-300">
              {isEn
                ? "For early clients I keep this simple and limited: one focused pipeline for one show or format, built in your stack."
                : "Pour les premiers clients, je garde ça simple : un pipeline focalisé sur un seul format ou émission, construit dans votre stack."}
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>{isEn ? "Mapping call" : "Appel de cadrage"}</li>
              <li>
                {isEn
                  ? "Design & build in your n8n instance"
                  : "Conception & build dans votre instance n8n"}
              </li>
              <li>
                {isEn
                  ? "Integration with your storage + transcription + one output format"
                  : "Intégration avec votre stockage + transcription + un format de sortie"}
              </li>
              <li>
                {isEn
                  ? "2 refinement rounds"
                  : "2 itérations d'ajustement"}
              </li>
              <li>
                {isEn
                  ? "Loom walkthrough you can share internally"
                  : "Une vidéo Loom de démonstration à partager en interne"}
              </li>
            </ul>

            <p className="pt-2 text-gray-200">
              <span className="font-semibold">
                {isEn ? "Pilot price:" : "Tarif pilote :"}
              </span>{" "}
              {isEn ? "from " : "à partir de "}
              <span className="font-mono">$750</span> USD
              {isEn
                ? ", depending on complexity and integrations."
                : ", selon la complexité et les intégrations."}
            </p>

            <p className="text-gray-400 text-xs">
              {isEn
                ? "Not sure yet? We can start with a short paid audit (~$150) to review your process and suggest a concrete architecture before you commit."
                : "Pas sûr encore ? On peut démarrer par un mini audit payant (~150 $) pour analyser votre flux et proposer une architecture concrète avant de vous engager."}
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-gray-300">
              {isEn
                ? "If this sounds useful, send me a quick email describing your format, your current workflow and where your files live. I'll tell you honestly if a pipeline like this will actually save you time and money."
                : "Si cela vous parle, envoyez-moi un court email décrivant votre format, votre flux actuel et où vivent vos fichiers. Je vous dirai honnêtement si un pipeline de ce type vous fera vraiment gagner du temps et de l'argent."}
            </p>
            <div className="text-[11px] text-gray-400 font-mono space-y-1">
              <p>Antoine Clerc-Renaud</p>
              <p>Yokan Digital</p>
              <p>tony@yokandigital.com</p>
              <p>
                <a
                  href="https://www.linkedin.com/in/antoineclercrenaud/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#00ff88] hover:text-[#00ff88]/80"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
