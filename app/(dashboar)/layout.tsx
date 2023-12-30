import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function HomePage({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Navbar />
      <div className="hidden h-full md:flex md:w-52 md:flex-col md:fixed md:inset-y-16 bg-green-500">
        <Sidebar />
      </div>
      <main className="md:pl-52 md:p-16">
        {children}
      </main>
    </div>
  )
}