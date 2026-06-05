import { Link } from "react-router-dom";
import { InovaaButton } from "./ui/inovaa-button";
import { ArrowRight, BadgeDollarSign, Bot, Workflow, BarChart3, Zap, Cpu, Activity } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] sm:min-h-screen flex items-center overflow-hidden bg-background">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg opacity-90" />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-0 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT — Copy */}
        <div className="space-y-7 sm:space-y-8">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
            Menos custo.<br />
            Mais produtividade.{" "}
            <span className="text-gradient-gold">
              Tecnologia que opera por você.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-xl font-body">
            Automações, agentes de IA, sistemas personalizados, integradores e apps sob medida
            para reduzir custos operacionais e escalar seu e-commerce sem aumentar o time.
          </p>


          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <InovaaButton size="lg" className="group w-full sm:w-auto" asChild>
              <Link to="/formulario-contato">
                <span>Mapear minhas automações</span>
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </InovaaButton>

            <a
              href="https://wa.me/5514991302496?text=Olá!%20Quero%20entender%20como%20a%20Inovaa%20pode%20automatizar%20meu%20e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 h-14 border border-border text-foreground font-medium rounded-md transition-all duration-300 hover:border-primary/50 hover:text-primary text-sm sm:text-base w-full sm:w-auto font-body"
            >
              Conversar com especialista
            </a>
          </div>

          {/* Trust strip */}
          <div className="flex items-center gap-6 pt-4">
            <div>
              <div className="text-2xl font-bold text-gradient-gold font-heading">-38%</div>
              <div className="text-xs text-text-muted font-body">custo operacional</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold text-gradient-gold font-heading">+4.2x</div>
              <div className="text-xs text-text-muted font-body">produtividade</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold text-gradient-gold font-heading">24/7</div>
              <div className="text-xs text-text-muted font-body">operação automatizada</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Dashboard mockup */}
        <div className="relative">
          {/* Glow */}
          <div className="absolute -inset-10 bg-primary/20 blur-3xl rounded-full opacity-60" />

          <div className="relative glass-card rounded-2xl p-5 shadow-card">
            {/* Window header */}
            <div className="flex items-center gap-2 pb-4 border-b border-border/60">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="w-3 h-3 rounded-full bg-accent-mint/70" style={{ backgroundColor: 'hsl(var(--accent-mint))' }} />
              <span className="ml-3 text-xs text-text-muted font-mono">inovaa.dashboard / operações</span>
              <span className="ml-auto flex items-center gap-1.5 text-[10px] text-primary font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                AO VIVO
              </span>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { label: "Pedidos auto.", value: "1.284", delta: "+24%", icon: Activity },
                { label: "Horas salvas", value: "312h", delta: "+18%", icon: Zap },
                { label: "Tickets IA", value: "97%", delta: "resolvidos", icon: Bot },
              ].map((k) => (
                <div key={k.label} className="rounded-xl p-3 border border-border bg-background/40">
                  <div className="flex items-center justify-between">
                    <k.icon className="w-4 h-4 text-primary" />
                    <span className="text-[10px] text-accent-mint font-mono" style={{ color: 'hsl(var(--accent-mint))' }}>{k.delta}</span>
                  </div>
                  <div className="text-xl font-bold mt-2 font-heading">{k.value}</div>
                  <div className="text-[10px] text-text-muted font-body">{k.label}</div>
                </div>
              ))}
            </div>

            {/* Chart bars */}
            <div className="mt-5 rounded-xl p-4 border border-border bg-background/40">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium font-body">Custo operacional</span>
                </div>
                <span className="text-xs text-text-muted font-mono">últimos 6 meses</span>
              </div>
              <div className="flex items-end gap-2 h-24">
                {[80, 72, 65, 50, 42, 30].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-primary/80 to-primary/30 relative group" style={{ height: `${h}%` }}>
                    {i === 5 && <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-primary">-62%</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Workflow row */}
            <div className="mt-4 flex items-center gap-2 px-3 py-3 rounded-xl border border-border bg-background/40">
              <div className="w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center"><Bot className="w-3.5 h-3.5 text-primary" /></div>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/60 to-accent-mint/60" style={{ background: 'linear-gradient(90deg, hsl(var(--primary)/.6), hsl(var(--accent-mint)/.6))' }} />
              <div className="w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center"><Workflow className="w-3.5 h-3.5 text-primary" /></div>
              <div className="flex-1 h-px bg-gradient-to-r from-accent-mint/60 to-accent-violet/60" style={{ background: 'linear-gradient(90deg, hsl(var(--accent-mint)/.6), hsl(var(--accent-violet)/.6))' }} />
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'hsl(var(--accent-violet) / 0.18)' }}><Cpu className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent-violet))' }} /></div>
            </div>
          </div>

          {/* Floating mini card */}
          <div className="absolute -bottom-6 -left-6 hidden sm:block glass-card rounded-xl p-3 shadow-card float">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><BadgeDollarSign className="w-4 h-4 text-primary" /></div>
              <div>
                <div className="text-xs font-semibold font-body">Agente IA ativo</div>
                <div className="text-[10px] text-text-muted font-mono">processou 42 pedidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
