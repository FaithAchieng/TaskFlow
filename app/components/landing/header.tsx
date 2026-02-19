export default function Header(){
    return(
    <header className=" flex flex-row justify-between p-6 sticky top-0 z-50 backdrop-blur-md">
        <div className="flex flex-row  items-center gap-1">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-teal-300 to-teal-500 rounded-b-lg text-white gap-2">T</div>
              <h1 className="font-mono font-bold text-base gap-4">TaskFlow</h1>
        </div>
       
          <div className="flex gap-3">
              <span className="text-zinc-500 hover:text-black cursor-pointer">Features</span>
              <span className="text-zinc-500 hover:text-black cursor-pointer">Pricing</span>
              <span className="text-zinc-500 hover:text-black cursor-pointer">Testimonials</span>
          </div>
          <div className="flex gap-3">
             <button className="hover:bg-teal-200 rounded-md p-2 hover:text-teal-600">SignIn</button>
            <button className="bg-gradient-to-r from-teal-300 to-teal-500 text-white p-2 rounded-md transition-all ease-in-out duration-300 hover:-translate-y-1 hover:shadow-lg">Get Started</button>
          </div>
        
    </header>
    );
}