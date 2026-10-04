export default function Brand({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-12 w-12 text-xl" : "h-10 w-10 text-lg";
  return (
    <span className="flex items-center gap-3">
      <span className={`${box} flex items-center justify-center rounded-full border border-gold/50 font-serif gold-text`}>SG</span>
      <span className={`font-serif tracking-wide ${size === "lg" ? "text-2xl" : "text-xl"}`}>
        Sparrow <span className="gold-text">Group</span>
      </span>
    </span>
  );
}
