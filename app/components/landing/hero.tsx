import { MoveRight, Users, MessageSquare, Bell, Upload, BarChart3,Shield,Zap} from "lucide-react";
export default function Hero(){
    return(
   <section className="min-h-full min-w-full flex items-center justify-center flex-col bg-gradient-to-b from-slate-50 to-slate-100">
       <div className=" flex flex-row bg-teal-100 p-2 rounded-lg gap-2 m-10">
          <Zap className="w-5 h-5" />
       <p className="text-teal-600 ">  New: Real-time collaboration is here</p>
       </div>
        <div>
            <p className="font-bold text-6xl">Team work made</p>
            <p className="text-6xl text-teal-600 font-bold mb-6">beautifully simple</p>
            <p className="text-zinc-500 text-xl">The all-in-one workspace for teams to plan, track, and deliver</p>
            <p className="text-zinc-500 text-xl mb-6">projects. From idea to launch, TaskFlow keeps everyone in sync.</p>
             <div className="flex justify-center items-center gap-4 mb-10">
                    <button className="bg-teal-600 rounded-md p-3 text-white cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">Start for Free</button>
               <button className="border-2 border-teal-300 p-3 rounded-lg text-teal-500 hover:bg-teal-600 hover:text-white hover:border-teal-600">See how it works</button>
             </div>
              <div className="flex justify-between items-center mb-15">
                 <p>Free 14-day trial</p>
                 <p>No credit card required</p>
                 <p>Cancel Anytime</p>
              </div>
              <div className="shadow-md bg-white rounded-lg flex flex-row p-5 items-center justify-center gap-9">
                <div>
                    <p className="text-2xl">10K+</p>
                    <p className="text-zinc-500">Active Teams</p>
                </div>
                <div>
                    <p className="text-2xl">2M+</p>
                    <p className="text-zinc-500">Tasks Completed</p>
                </div>
                <div>
                    <p className="text-2xl">99.9%</p>
                    <p className="text-zinc-500">Uptime</p>
                </div>

              </div>
            
        </div>
   </section>
    );
}