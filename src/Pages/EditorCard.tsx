'use client';

interface Editor {
  _id: string;
  name: string;
  university: string;
  image: string;
}

export default function EditorCard({ editor }: { editor: Editor }) {
  return (
    <div className="
      group relative p-8 rounded-3xl 
      bg-white/10 backdrop-blur-xl 
      shadow-[0_8px_35px_rgba(0,0,0,0.25)]
      border border-white/10
      hover:border-white/20
      transition-all duration-700
      hover:-translate-y-3 hover:scale-[1.02]
      overflow-hidden
    ">
      {/* Floating soft particles */}
      <div className="
        absolute inset-0 pointer-events-none opacity-0 
        group-hover:opacity-100 transition duration-700
      ">
        <div className="absolute top-6 left-6 w-3 h-3 bg-white/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-8 right-10 w-4 h-4 bg-blue-400/20 rounded-full blur-xl animate-ping" />
      </div>

      {/* Animated glowing gradient border */}
      <div className="
        absolute inset-0 rounded-3xl 
        bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-700/20 
        opacity-0 group-hover:opacity-100 
        blur-2xl transition-all duration-700 -z-10
      " />

      {/* NEW: Soft rotating light sweep */}
      <div className="
        absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
        opacity-0 group-hover:opacity-40
        animate-[spin_6s_linear_infinite]
        pointer-events-none
      " />

      {/* Avatar section */}
      <div className="relative mb-6 mx-auto w-36 h-36">
        {/* Glow ring */}
        <div className="
          absolute inset-0 rounded-full 
          bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 
          opacity-0 group-hover:opacity-40 
          blur-2xl transition duration-700
        " />

        {/* Avatar */}
        <div className="
          rounded-full overflow-hidden ring-4 ring-white/20
          shadow-[0_8px_25px_rgba(0,0,0,0.35)]
          group-hover:ring-white/70
          transition-all duration-700 group-hover:scale-110
        ">
          <img
            src={editor.image}
            alt={editor.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="
        text-2xl font-extrabold text-white tracking-wide 
        drop-shadow group-hover:text-blue-100
        transition-colors duration-500
      ">
        {editor.name}
      </h3>

      {/* University */}
      <p className="
        text-blue-200 text-sm mt-3 opacity-90 max-w-xs mx-auto 
        leading-relaxed 
        group-hover:text-blue-100 group-hover:opacity-100
        transition-all duration-700
      ">
        {editor.university}
      </p>

      {/* Elegant bottom line divider */}
      <div className="
        mt-6 h-[2px] w-24 mx-auto 
        bg-gradient-to-r from-transparent via-white/50 to-transparent
        opacity-70 group-hover:opacity-100 
        transition duration-700
      " />
    </div>
  );
}