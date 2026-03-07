import Sidebar from "../components/dashboard/sidebar";

export default function Dashboard(){
    return(
      <section>
        <div className="grid lg:grid-cols-2">
          <Sidebar />
        </div>
        
      </section>
    );
}