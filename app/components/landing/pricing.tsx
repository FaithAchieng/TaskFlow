import{Check} from "lucide-react"
import Link  from "next/link";
export default function Pricing(){
    const plans=[
        {
            name:"Free",
            price:"$0",
            description:"perfect for small teams getting started",
            features:[
                "Up to 5 members",
                "3 active projects",
                "Basic Task Management",
                "File uploads (100MB)",
                "Community support"
            ],
            cta: "Get Started",
            variant: "outline" as const,
            popular: false
        },
         {
    name: "Pro",
    price: "$12",
    period: "/user/month",
    description: "For growing teams that need more power",
    features: [
      "Unlimited team members",
      "Unlimited projects",
      "Advanced analytics",
      "Real-time chat",
      "File uploads (10GB)",
      "Priority support",
      "Custom workflows"
    ],
    cta: "Start Free Trial",
    variant: "hero" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Advanced security",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option"
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    popular: false
  }
    ]
    return(
        <section  className="flex flex-col items-center justify-center mt-10">
            <p className="font-bold text-5xl">Simple transparent pricing</p>
            <p className="text-xl text-zinc-500">Choose the plan that works best for your team. All plans include a 14-day free trial.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-white border-teal-300 shadow-glow scale-105"
                  : "bg-white border-teal-300 hover:border-teal-700 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-300 to-teal-500 text-white text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-teal-600 rounded-md p-3  text-white cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                 <Link href="/dashboard">{plan.cta}</Link>
              </button>

              
            </div>
          ))}
        </div>
        </section>
    );
}