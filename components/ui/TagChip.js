const variants = {
  default: "bg-purple/20 text-indigo-light",
  live: "bg-green/20 text-green",
  wip: "bg-[#F59E0B]/20 text-[#F59E0B]",
};

const TagChip = ({ label, variant = "default" }) => {
  const colorClass = variants[variant] || variants.default;

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-mono font-medium ${colorClass}`}
    >
      {label}
    </span>
  );
};

export default TagChip;
