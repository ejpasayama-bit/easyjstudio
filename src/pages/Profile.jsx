import { useLanguage } from '../LanguageContext';

const Profile = () => {
  const { t } = useLanguage();
  return (
    <div className="py-24 px-8 max-w-4xl mx-auto min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-8">{t.profile.title}</h2>
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-3xl shadow-inner">
            <img src="/profile.jpg" alt="Profile" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{t.profile.name}</h3>
            <p className="text-indigo-600 font-medium whitespace-pre-wrap">{t.profile.role}</p>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-wrap">{t.profile.description}</p>
      </div>
    </div>
  );
};
export default Profile;