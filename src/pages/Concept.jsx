import { useLanguage } from '../LanguageContext';

const Concept = () => {
  const { t } = useLanguage();
  return (
    <div className="py-24 px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-8">{t.concept.title}</h2>
      <div className="prose prose-slate max-w-none leading-loose text-slate-700 space-y-6">
        <p className="text-xl font-bold text-indigo-600">{t.concept.subtitle}</p>
        <p>{t.concept.p1}</p>
        <p>{t.concept.p2}</p>
        <p className="pt-4 border-t border-slate-100">{t.concept.p3}</p>
      </div>
    </div>
  );
};
export default Concept;