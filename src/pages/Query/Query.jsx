import { useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const Query = () => {
  useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true;
    if (!form.message.trim()) e.message = true;
    return e;
  };

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border text-base bg-white dark:bg-gray-900 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff4d00] transition ${
      errors[field] ? "border-red-500" : "border-gray-300 dark:border-gray-600"
    }`;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">

      {/* Hero Banner */}
      <div className="bg-[#ff4d00] py-10 sm:py-14 px-4 sm:px-6 text-white text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-3">{t("query_title")}</h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">{t("query_subtitle")}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

        {/* LEFT — Contact Details */}
        <div className="space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff4d00]">{t("query_contact_title")}</h2>

          {/* Address */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-[#EA4335] flex items-center justify-center shrink-0 mt-1">
              <FaLocationDot className="text-white text-xl" />
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">{t("query_address_label")}</p>
              <a
                href="https://www.google.com/maps/place/ISHA+CHS+Sector+19+Kharghar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 text-base leading-7 hover:text-[#ff4d00] transition"
              >
                Isha CHS, Plot No. 76/77, Shop No. 12<br />
                Sector 19, Kharghar, Navi Mumbai<br />
                Maharashtra – 410210
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 mt-1">
              <FaPhone className="text-white text-xl" />
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">{t("query_phone_label")}</p>
              <a href="tel:+919876543210" className="text-gray-600 dark:text-gray-400 text-base hover:text-[#ff4d00] transition">
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-[#0078D4] flex items-center justify-center shrink-0 mt-1">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div>
              <p className="text-lg font-semibold mb-1">{t("query_email_label")}</p>
              <a href="mailto:contact@kiranprakashpatil.com" className="text-gray-600 dark:text-gray-400 text-base hover:text-[#ff4d00] transition">
                contact@kiranprakashpatil.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-lg font-semibold mb-3">{t("query_follow")}</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/kiiran_prakash_patil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center text-white hover:scale-110 transition"
                style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1SVbev1sU9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://x.com/patilkiran191"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-xl overflow-hidden border-2 border-[#ff4d00] shadow-lg mt-4">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d73.07!3d19.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3e3a0000001%3A0x0!2sIsha+CHS+Sector+19+Kharghar!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff4d00] mb-8">{t("query_form_title")}</h2>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 text-center gap-4">
              <div className="w-20 h-20 rounded-full bg-[#ff4d00] flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                ✓
              </div>
              <p className="text-xl font-semibold text-[#ff4d00]">{t("query_sent")}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-lg border-2 border-[#ff4d00] text-[#ff4d00] font-semibold hover:bg-[#ff4d00] hover:text-white transition"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-1">{t("query_name")} *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("query_name_ph")}
                  className={inputClass("name")}
                />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">{t("query_email")} *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("query_email_ph")}
                    className={inputClass("email")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">{t("query_phone")}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder={t("query_phone_ph")}
                    className={inputClass("phone")}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold mb-1">{t("query_subject")}</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t("query_subject_ph")}
                  className={inputClass("subject")}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-1">{t("query_message")} *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder={t("query_message_ph")}
                  className={inputClass("message")}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#ff4d00] text-white text-lg font-bold hover:bg-[#e04300] active:scale-95 transition"
              >
                {t("query_send")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Query;
