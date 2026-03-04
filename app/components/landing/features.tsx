import { BarChart3,Upload,Shield,Zap,Layers,Users,MessageSquare,Bell } from "lucide-react";
export default function Features(){
const features=[
    {
        icon: Layers,
        title:"Workspace and Projects",
        description:"Organize work into flexible workspaces. Each team gets their own space with unlimited projects."
    },
    {
        icon: Users,
        title:"Team Collaboration",
        description: "Invite members, assign roles, and work together seamlessly across all your projects."
    },
    {
        icon: MessageSquare,
        title:"Real-Time Chat",
        description: "Built-in project chat with typing indicators, read receipts, and instant notifications."
    },
    {
        icon: Bell,
        title: "Smart Notifications",
        description: "Stay informed with real-time alerts for assignments, mentions, and approaching deadlines."
    },
    {
    icon: Upload,
    title: "File Attachments",
    description: "Attach files to tasks, share documents, and keep everything in one organized place."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track team productivity, project health, and task completion with beautiful charts."
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Control who can view, edit, or manage with granular admin, manager, and member roles."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with real-time updates, optimistic UI, and instant synchronization."
  }
]
    return(
        <section className="bg-gradient-to-b from-white to-slate-100 flex items-center justify-center mt-5 flex-col">
            <div className="flex flex-col">
                <p className="font-bold text-5xl">Everything you need to ship</p>
                <p className="font-bold text-5xl text-center">faster</p>
            </div>
            <div className="mt-4">
                <p className="text-zinc-500 text-xl">Powerful features designed to help teams move from idea to execution with clarity</p>
                <p className="text-zinc-500 text-xl text-center">and speed</p>
            </div>
            
                {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-7 mb-7">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-white border border-zinc-300 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className=" text-sm leading-relaxed text-zinc-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
           


        </section>
    );
}