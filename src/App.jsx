// src/App.jsx

import { useState } from "react";
import "./index.css";

const initialState = {
  specialty: "",
  specialtyOther: "",
  yearsPractice: "",
  practiceSetting: "",
  managedThyroid: "",
  familiarMWA: "",
  learnMWA: "",
  learnMWAOther: "",
  indications: [],
  compareMWA: "",
  contraindications: "",
  referredOrTreated: "",
  numMWA: "",
  outcomes: [],
  complications: [],
  complicationsOther: "",
  viableAlt: "",
  encourage: [],
  openWorkshop: "",
  comments: "",
  consent: "",
  contact: "",
};

const specialties = [
  "Endocrinologist",
  "ENT Specialist",
  "General Surgeon",
  "Radiologist",
  "Other",
];

const yearsOptions = [
  "< 5 years",
  "5-10 years",
  "10-20 years",
  "> 20 years",
];

const practiceSettings = [
  "Government Hospital",
  "Private Hospital",
  "Clinic/Nursing Home",
  "Academic Institution",
];

const indicationsOptions = [
  "Benign thyroid nodules",
  "Recurrent thyroid cysts",
  "Thyroid cancer (selected cases)",
  "Cosmetic concerns",
  "Not sure",
];

const outcomesOptions = [
  "Significant volume reduction",
  "Symptom relief",
  "Minimal complications",
  "Recurrence",
  "Not applicable",
];

const complicationsOptions = [
  "Voice change",
  "Pain or swelling",
  "Nodule recurrence",
  "Infection",
  "None observed",
  "Other",
];

const encourageOptions = [
  "More clinical evidence",
  "Training/workshops",
  "Cost-effectiveness",
  "Better insurance coverage",
  "Patient demand",
  "Institutional approval",
];

function App() {
  const [form, setForm] = useState(initialState);

  // For checkboxes (multi-select)
  const handleCheckbox = (e) => {
    const { name, value, checked } = e.target;
    setForm((prev) => {
      const arr = prev[name] || [];
      if (checked) {
        return { ...prev, [name]: [...arr, value] };
      } else {
        return { ...prev, [name]: arr.filter((v) => v !== value) };
      }
    });
  };

  // For all other fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
    // TODO: send to Firebase
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-2 py-8">
      <form
        className="bg-white border border-black shadow-2xl rounded-2xl p-6 max-w-2xl w-full space-y-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-black mb-2 text-center">
          Microwave Ablation Therapy for Thyroid - Doctor Survey
        </h1>
        <p className="text-md text-black text-center mb-6">
          Please fill out this survey to help us understand your experience and opinions on MWA for thyroid nodules.
        </p>

        {/* Section A */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-2">A. Respondent Profile</h2>
          <div className="space-y-6">
            {/* 1. Specialty */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Specialty</label>
              <select
                name="specialty"
                value={form.specialty}
                onChange={handleChange}
                className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2"
                required
              >
                <option value="">Select</option>
                {specialties.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {form.specialty === "Other" && (
                <input
                  type="text"
                  name="specialtyOther"
                  value={form.specialtyOther}
                  onChange={handleChange}
                  className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2 mt-2"
                  placeholder="Please specify"
                />
              )}
            </div>
            {/* 2. Years of Clinical Practice */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Years of Clinical Practice</label>
              <select
                name="yearsPractice"
                value={form.yearsPractice}
                onChange={handleChange}
                className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2"
                required
              >
                <option value="">Select</option>
                {yearsOptions.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            {/* 3. Practice Setting */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Practice Setting</label>
              <select
                name="practiceSetting"
                value={form.practiceSetting}
                onChange={handleChange}
                className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2"
                required
              >
                <option value="">Select</option>
                {practiceSettings.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            {/* 4. Managed patients with thyroid nodules */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Have you managed patients with thyroid nodules?</label>
              <div className="flex gap-8">
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="managedThyroid"
                    value="Yes"
                    checked={form.managedThyroid === "Yes"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                    required
                  />
                  Yes
                </label>
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="managedThyroid"
                    value="No"
                    checked={form.managedThyroid === "No"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Section B */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-2">B. Awareness & Knowledge</h2>
          <div className="space-y-6">
            {/* 5. Familiar with MWA */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Are you familiar with Microwave Ablation (MWA) for thyroid nodules?</label>
              <div className="flex gap-8">
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="familiarMWA"
                    value="Yes"
                    checked={form.familiarMWA === "Yes"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                    required
                  />
                  Yes
                </label>
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="familiarMWA"
                    value="No"
                    checked={form.familiarMWA === "No"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                  />
                  No
                </label>
              </div>
            </div>
            {/* 6. How did you first learn about MWA? */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">How did you first learn about MWA?</label>
              <select
                name="learnMWA"
                value={form.learnMWA}
                onChange={handleChange}
                className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2"
                required
              >
                <option value="">Select</option>
                <option value="Medical literature">Medical literature</option>
                <option value="Conference">Conference</option>
                <option value="Colleague">Colleague</option>
                <option value="Medical device representative">Medical device representative</option>
                <option value="Other">Other</option>
              </select>
              {form.learnMWA === "Other" && (
                <input
                  type="text"
                  name="learnMWAOther"
                  value={form.learnMWAOther}
                  onChange={handleChange}
                  className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2 mt-2"
                  placeholder="Please specify"
                />
              )}
            </div>
            {/* 7. Indications for MWA */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">In your opinion, what are the indications for MWA in thyroid treatment?</label>
              <div className="flex flex-col gap-2">
                {indicationsOptions.map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2 text-black">
                    <input
                      type="checkbox"
                      name="indications"
                      value={opt}
                      checked={form.indications.includes(opt)}
                      onChange={handleCheckbox}
                      className="text-black focus:ring-black"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section C */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-2">C. Experience & Practice</h2>
          <div className="space-y-6">
            {/* 8. Compare MWA */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">How would you compare MWA to other thermal ablation techniques (e.g., RFA, laser)?</label>
              <select
                name="compareMWA"
                value={form.compareMWA}
                onChange={handleChange}
                className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2"
                required
              >
                <option value="">Select</option>
                <option value="More effective">More effective</option>
                <option value="Equally effective">Equally effective</option>
                <option value="Less effective">Less effective</option>
                <option value="Insufficient data">Insufficient data</option>
              </select>
            </div>
            {/* 9. Contraindications/limitations */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">What are the contraindications or limitations you associate with MWA?</label>
              <textarea
                name="contraindications"
                value={form.contraindications}
                onChange={handleChange}
                className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2 resize-none"
                rows={2}
                placeholder="Type here"
              />
            </div>
            {/* 10. Referred or treated with MWA */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Have you personally referred or treated a patient with MWA?</label>
              <div className="flex flex-col gap-2">
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="referredOrTreated"
                    value="Yes, I've referred"
                    checked={form.referredOrTreated === "Yes, I've referred"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                    required
                  />
                  Yes, I've referred
                </label>
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="referredOrTreated"
                    value="Yes, I've performed"
                    checked={form.referredOrTreated === "Yes, I've performed"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                  />
                  Yes, I've performed
                </label>
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="referredOrTreated"
                    value="No, not yet"
                    checked={form.referredOrTreated === "No, not yet"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                  />
                  No, not yet
                </label>
              </div>
            </div>
            {/* 11. Number of procedures */}
            {(form.referredOrTreated === "Yes, I've referred" ||
              form.referredOrTreated === "Yes, I've performed") && (
              <div>
                <label className="block text-sm font-medium text-black mb-1">If yes, approximately how many thyroid MWA procedures have you been involved in?</label>
                <select
                  name="numMWA"
                  value={form.numMWA}
                  onChange={handleChange}
                  className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2"
                  required
                >
                  <option value="">Select</option>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-20">11-20</option>
                  <option value="> 20">&gt; 20</option>
                </select>
              </div>
            )}
            {/* 12. Outcomes observed */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">What outcomes have you observed in MWA-treated patients?</label>
              <div className="flex flex-col gap-2">
                {outcomesOptions.map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2 text-black">
                    <input
                      type="checkbox"
                      name="outcomes"
                      value={opt}
                      checked={form.outcomes.includes(opt)}
                      onChange={handleCheckbox}
                      className="text-black focus:ring-black"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            {/* 13. Complications encountered */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Which complications, if any, have you encountered or heard of in MWA?</label>
              <div className="flex flex-col gap-2">
                {complicationsOptions.map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2 text-black">
                    <input
                      type="checkbox"
                      name="complications"
                      value={opt}
                      checked={form.complications.includes(opt)}
                      onChange={handleCheckbox}
                      className="text-black focus:ring-black"
                    />
                    {opt}
                  </label>
                ))}
              </div>
              {form.complications.includes("Other") && (
                <input
                  type="text"
                  name="complicationsOther"
                  value={form.complicationsOther}
                  onChange={handleChange}
                  className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2 mt-2"
                  placeholder="Please specify"
                />
              )}
            </div>
          </div>
        </div>

        {/* Section D */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-2">D. Opinions & Adoption</h2>
          <div className="space-y-6">
            {/* 14. Viable alternative to surgery */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Do you consider MWA a viable alternative to surgery for benign thyroid nodules?</label>
              <select
                name="viableAlt"
                value={form.viableAlt}
                onChange={handleChange}
                className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2"
                required
              >
                <option value="">Select</option>
                <option value="Strongly agree">Strongly agree</option>
                <option value="Agree">Agree</option>
                <option value="Neutral">Neutral</option>
                <option value="Disagree">Disagree</option>
                <option value="Strongly disagree">Strongly disagree</option>
              </select>
            </div>
            {/* 15. What would encourage wider adoption */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">What would encourage wider adoption of MWA in your practice or institution?</label>
              <div className="flex flex-col gap-2">
                {encourageOptions.map((opt) => (
                  <label key={opt} className="inline-flex items-center gap-2 text-black">
                    <input
                      type="checkbox"
                      name="encourage"
                      value={opt}
                      checked={form.encourage.includes(opt)}
                      onChange={handleCheckbox}
                      className="text-black focus:ring-black"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            {/* 16. Open to workshop */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Are you open to attending a hands-on MWA workshop or CME session?</label>
              <div className="flex gap-8">
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="openWorkshop"
                    value="Yes"
                    checked={form.openWorkshop === "Yes"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                    required
                  />
                  Yes
                </label>
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="openWorkshop"
                    value="Maybe"
                    checked={form.openWorkshop === "Maybe"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                  />
                  Maybe
                </label>
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="openWorkshop"
                    value="No"
                    checked={form.openWorkshop === "No"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                  />
                  No
                </label>
              </div>
            </div>
            {/* 17. Additional Comments */}
            <div>
              <label className="block text-sm font-medium text-black mb-1">Additional Comments / Suggestions</label>
              <textarea
                name="comments"
                value={form.comments}
                onChange={handleChange}
                className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2 resize-none"
                rows={2}
                placeholder="Type here"
              />
            </div>
          </div>
        </div>

        {/* Consent & Contact */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-2">Optional: Consent & Contact</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Would you like to receive updates or invites related to MWA training or research?</label>
              <div className="flex gap-8">
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="consent"
                    value="Yes"
                    checked={form.consent === "Yes"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                  />
                  Yes
                </label>
                <label className="inline-flex items-center gap-2 text-black">
                  <input
                    type="radio"
                    name="consent"
                    value="No"
                    checked={form.consent === "No"}
                    onChange={handleChange}
                    className="text-black focus:ring-black"
                  />
                  No
                </label>
              </div>
              {form.consent === "Yes" && (
                <input
                  type="text"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  className="w-full border-black focus:ring-black focus:border-black rounded-lg shadow-sm text-base px-4 py-2 mt-2"
                  placeholder="Please share your contact/email"
                />
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black hover:bg-neutral-800 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200 text-lg mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
