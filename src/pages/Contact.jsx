import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FadeIn from "../components/FadeIn";
import Landing from "../components/Landing";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          alert("Une erreur est survenue. Veuillez réessayer.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Landing>
        <Header />

        {/* ===== HERO ===== */}
        <section className="py-20 md:py-40 text-center">
          <FadeIn>
            <span className="text-xl md:text-2xl md:font-bold tracking-widest text-white">
              | NOUS CONTACTER |
            </span>
            <h1 className="text-3xl md:text-7xl font-serif mt-8 text-amber-400">
              Informations de contact
            </h1>
          </FadeIn>
        </section>
      </Landing>

      <main className="bg-[#f7f6f2] text-[#2e2e2e]">
        <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* ===== LEFT ===== */}
          <FadeIn>
            <div>
              <h2 className="text-4xl font-serif mb-6">
                Contactez-nous à tout moment pour réserver votre séjour
              </h2>
              <p className="text-gray-600 max-w-md">
                Une question, un commentaire ou une demande particulière ?
                Nous sommes là pour vous aider et serons ravis d’échanger avec vous.
              </p>

              <div className="mt-12 space-y-6 text-sm">
                <div>
                  <p className="uppercase tracking-widest mb-2">
                    Horaires
                  </p>
                  <p>Lundi – Vendredi : 22h – 08h</p>
                  <p>Samedi – Dimanche : 20h – 10h</p>
                </div>

                <div className="pt-6 border-t space-y-6">
                  <h3 className="text-xl font-serif">
                    Souk Elkhmis Dades, Maroc
                  </h3>
                  <p>📍 Vallée des Dades – Vallée des Roses</p>
                  <p>📞 +212 XXX XXX XXX</p>
                  <p>✉️ contact@aromadades.com</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ===== RIGHT FORM ===== */}
          <FadeIn>
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white rounded-3xl p-10 shadow-lg"
            >
              <h3 className="text-2xl font-serif mb-8">
                Demande avant réservation
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  name="name"
                  required
                  placeholder="Prénom"
                  className="input"
                />
                <input
                  name="lastname"
                  required
                  placeholder="Nom"
                  className="input"
                />
              </div>

              <input
                type="email"
                name="email"
                required
                placeholder="Votre adresse e-mail"
                className="input mb-6"
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Votre message"
                className="w-full border border-gray-300 rounded-md px-6 py-4 text-sm
                focus:outline-none focus:ring-1 focus:ring-black mb-8 resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-full tracking-widest hover:bg-gray-800 transition"
              >
                {loading ? "ENVOI..." : "ENVOYER"}
              </button>

              {success && (
                <p className="text-green-600 text-center mt-6">
                  Message envoyé avec succès 🌿
                </p>
              )}
            </form>
          </FadeIn>
        </section>

        {/* ===== GOOGLE MAP ===== */}
        <div className="w-full h-96 overflow-hidden mt-8 mb-8 shadow-md">
          <iframe
            title="Localisation Aroma Dades"
            src="https://www.google.com/maps?q=Souk+Elkhmis+Dades,+Morocco&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
