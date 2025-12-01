'use client';



interface Editor {
  _id: string;
  name: string;
  university: string;
  image: string;
}

export default function Editors() {
  // 🔴 NOT NEEDED FOR NOW (Fetching from backend disabled temporarily)
  /*
  const [coEditors, setCoEditors] = useState<Editor[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/coeditors/list")
      .then(res => res.json())
      .then(setCoEditors)
      .catch(err => console.error("Error:", err));
  }, []);

  const displayedEditors = coEditors.slice(0, 3);
  */

  // 🟢 USING STATIC SAMPLE EDITORS FOR NOW
  const displayedEditors: Editor[] = [
    { _id: "1", name: "Alice Johnson", university: "Harvard University", image: "https://ecrm.ie/wp-content/themes/cera/assets/images/avatars/user-avatar.png" },
    { _id: "2", name: "Brian Smith", university: "Stanford University", image: "https://w7.pngwing.com/pngs/349/288/png-transparent-teacher-education-student-course-school-avatar-child-face-heroes.png" },
    { _id: "3", name: "Catherine Lee", university: "MIT", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0sGpUo7NSCiDT1ZT4mqjgi3sq_-lnKKxXoqlgAnYhCLUnxtyfifWrSJg2hEqu4Dz2GN0&usqp=CAUg" },
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-[#1a2849] via-[#1E3A8A] to-[#061b50] overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header (height reduced) */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
              Co-Editors-in-Chief
            </h2>
            <p className="text-blue-200 text-base mt-2">
              Meet our leadership team shaping the journal’s vision
            </p>
          </div>

          <a
            href="/all-editors"
            className="group inline-flex items-center gap-2 text-blue-200 hover:text-white font-semibold text-base transition-all"
          >
            View all
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Cards Grid (compact) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-14">
          {displayedEditors.map((editor) => (
           <div
              key={editor._id}
              className="
                group relative text-center 
                bg-white/10 backdrop-blur-xl rounded-2xl p-6 
                shadow-[8px_8px_20px_rgba(0,0,0,0.35)] 
                hover:shadow-[12px_12px_30px_rgba(0,0,0,0.45),6px_6px_20px_rgba(255,255,255,0.2)] 
                transition-all duration-500 
                hover:-translate-y-2 hover:bg-white/20 
                border border-white/10
              "
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-pink-400/15 opacity-0 group-hover:opacity-100 blur-xl transition duration-700 -z-10" />

              {/* Avatar (height reduced) */}
              <div className="relative mb-4 mx-auto w-24 h-24">
                <div className="absolute -inset-4 bg-blue-500/25 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />
                <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-white/20 shadow-lg transition-all duration-500 group-hover:ring-white/40 group-hover:scale-110">
                  <img
                    src={editor.image}
                    alt={editor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-white drop-shadow-sm group-hover:text-blue-100 transition-colors">
                {editor.name}
              </h3>

              {/* University */}
              <p className="text-blue-200 text-sm mt-2 opacity-90 group-hover:text-blue-100">
                {editor.university}
              </p>

              {/* Divider */}
              <div className="mt-4 h-[2px] w-16 mx-auto bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-60 group-hover:opacity-100 transition-all" />
            </div>
          ))}
        </div>

        {/* 🔴 NOT NEEDED FOR NOW — Mobile horizontal scroll logic */}
        {/*
        {coEditors.length > 3 && displayedEditors.length < coEditors.length && (
          <div className="mt-8 -mx-6 px-6 overflow-x-auto flex gap-8 snap-x snap-mandatory scrollbar-hide">
            {coEditors.slice(3, 6).map(editor => (
              <div key={editor._id} className="flex-shrink-0 w-64 text-center">
                same card styles here
              </div>
            ))}
          </div>
        )}
        */}
      </div>
    </section>
  );
}
