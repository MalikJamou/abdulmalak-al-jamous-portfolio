interface SkillGroupProps {
  title: string;
  skills: string[];
  dir?: 'ltr' | 'rtl';
}

export default function SkillGroup({ title, skills, dir = 'ltr' }: SkillGroupProps) {
  return (
    <div className={`mb-8 sm:mb-0 ${dir === 'rtl' ? 'text-right' : ''}`}>
      <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className={`flex items-center text-slate-600 ${dir === 'rtl' ? 'justify-end' : ''}`}>
            {dir === 'rtl' ? (
              <>
                {skill}
                <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {skill}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
