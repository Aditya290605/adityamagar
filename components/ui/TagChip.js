const variants = {
  default: "bg-white/[0.06] text-indigo-light border border-white/[0.06]",
  live: "bg-green/10 text-green border border-green/20",
  wip: "bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20",
};

const TagChip = ({ label, variant = "default" }) => {
  const colorClass = variants[variant] || variants.default;

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[0.7rem] font-mono font-medium tracking-wide ${colorClass}`}
    >
      {label}
    </span>
  );
};

export default TagChip;
