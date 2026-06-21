export default function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-e2i-darker">
      {/* Yaşayan gradient katmanı */}
      <div className="animated-bg absolute inset-0" aria-hidden="true" />

      {/* Turkuaz glow — sol üst */}
      <div
        className="ambient-orb absolute -left-10 top-[5%] h-[min(560px,85vw)] w-[min(560px,85vw)] animate-ambient-orbit rounded-full blur-[60px] md:blur-[90px]"
        style={{
          background: "rgba(0, 245, 212, 0.18)",
          animationDelay: "0s",
          animationDuration: "14s",
        }}
      />

      {/* Mavi glow — sağ orta */}
      <div
        className="ambient-orb absolute -right-10 top-[40%] h-[min(480px,75vw)] w-[min(480px,75vw)] animate-ambient-orbit rounded-full blur-[60px] md:blur-[90px]"
        style={{
          background: "rgba(59, 130, 246, 0.15)",
          animationDelay: "-5s",
          animationDuration: "18s",
        }}
      />

      {/* Turkuaz glow — alt orta */}
      <div
        className="ambient-orb absolute bottom-[-8%] left-[20%] h-[min(440px,70vw)] w-[min(440px,70vw)] animate-ambient-pulse rounded-full blur-[60px] md:blur-[90px]"
        style={{
          background: "rgba(0, 245, 212, 0.14)",
          animationDelay: "-8s",
          animationDuration: "12s",
        }}
      />

      {/* Mavi glow — üst orta */}
      <div
        className="ambient-orb absolute left-[35%] top-[-12%] h-[min(360px,60vw)] w-[min(360px,60vw)] animate-ambient-drift rounded-full blur-[70px] md:blur-[100px]"
        style={{
          background: "rgba(59, 130, 246, 0.12)",
          animationDelay: "-3s",
          animationDuration: "15s",
        }}
      />

      {/* Turkuaz accent — sağ alt */}
      <div
        className="ambient-orb absolute bottom-[10%] right-[5%] h-[min(320px,50vw)] w-[min(320px,50vw)] animate-ambient-orbit rounded-full blur-[60px] md:blur-[80px]"
        style={{
          background: "rgba(0, 245, 212, 0.1)",
          animationDelay: "-10s",
          animationDuration: "16s",
        }}
      />
    </div>
  );
}
