import { ChevronDown } from "lucide-react";
export default function Sidebar(){
    return(
    <section>
         <div className="flex flex-row  items-center gap-1">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-teal-300 to-teal-500 rounded-b-lg text-white gap-2">T</div>
              <h1 className="font-mono font-bold text-base gap-4">TaskFlow</h1>
        </div>
        <hr className="border border-zinc-200"></hr>
        <div className="flex flex-row justify-between gap-1 rounded-2xl bg-teal-100 p-5 w-1/2">
            <span>AC</span>
            <div>
            <p>Acme Corp</p>
            <p>Free Plan</p>
            </div>
            <ChevronDown />
        </div>
        <hr className="border border-zinc-200"></hr>
    </section>
    );
}