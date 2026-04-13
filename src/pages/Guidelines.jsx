import React from 'react';
import { useLanguage } from '../LanguageContext';

const Guidelines = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-24 px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-10 text-center border-b pb-6">{t.guidelines.title}</h2>
      
      <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-loose">
        <section>
          <h3 className="text-xl font-bold border-b pb-2 mb-4">{t.guidelines.introTitle}</h3>
          <p>
            {t.guidelines.introP1}<br />
            <strong>{t.guidelines.introP2}</strong>
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold border-b pb-2 mb-4">{t.guidelines.requestTitle}</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>{t.guidelines.requestLi1}</strong></li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold border-b pb-2 mb-4">{t.guidelines.monetizeTitle}</h3>
          <p>{t.guidelines.monetizeP1}</p>
        </section>

        <section>
          <h3 className="text-xl font-bold border-b pb-2 mb-4">{t.guidelines.prohibitTitle}</h3>
          <p className="mb-4">{t.guidelines.prohibitP1}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t.guidelines.prohibitLi1}</li>
            <li>{t.guidelines.prohibitLi2}</li>
            <li>{t.guidelines.prohibitLi3}</li>
            <li>{t.guidelines.prohibitLi4}</li>
          </ul>
          <div className="mt-6 p-4 bg-slate-50 border-l-4 border-slate-400 text-sm">
            <strong>{t.guidelines.rightsTitle}</strong><br />
            {t.guidelines.rightsText}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold border-b pb-2 mb-4">{t.guidelines.disclaimerTitle}</h3>
          <p>
            {t.guidelines.disclaimerP1}<br />
            {t.guidelines.disclaimerP2}<br />
            <span className="text-sm text-slate-500 block mt-2">{t.guidelines.date}</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Guidelines;