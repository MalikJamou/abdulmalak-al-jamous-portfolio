interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  problem: string;
  solution: string;
  result: string;
  dir?: 'ltr' | 'rtl';
}

export default function ProjectCard({
  title,
  description,
  tech,
  problem,
  solution,
  result,
  dir = 'ltr'
}: ProjectCardProps) {
  const borderClass = dir === 'rtl' ? 'border-r-4' : 'border-l-4';
  const paddingClass = dir === 'rtl' ? 'pr-4' : 'pl-4';

  return (
    <div className={`border border-gray-200 rounded-lg p-6 sm:p-8 hover:border-gray-300 hover:shadow-lg transition bg-white ${dir === 'rtl' ? 'text-right' : ''}`}>
      {/* Title and Tech */}
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      
      {/* Tech Tags */}
      <div className={`flex flex-wrap gap-2 mb-6 ${dir === 'rtl' ? 'justify-end' : ''}`}>
        {tech.map((t, index) => (
          <span
            key={index}
            className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Problem - Solution - Result */}
      <div className="space-y-4">
        <div className={`${borderClass}-4 border-blue-500 ${paddingClass}`}>
          <h4 className="font-semibold text-slate-900 mb-1">Problem</h4>
          <p className="text-slate-600 text-sm sm:text-base">{problem}</p>
        </div>

        <div className={`${borderClass}-4 border-green-500 ${paddingClass}`}>
          <h4 className="font-semibold text-slate-900 mb-1">Solution</h4>
          <p className="text-slate-600 text-sm sm:text-base">{solution}</p>
        </div>

        <div className={`${borderClass}-4 border-purple-500 ${paddingClass}`}>
          <h4 className="font-semibold text-slate-900 mb-1">Result</h4>
          <p className="text-slate-600 text-sm sm:text-base">{result}</p>
        </div>
      </div>
    </div>
  );
}
