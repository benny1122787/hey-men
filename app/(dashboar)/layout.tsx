import Sidebar from "@/components/sidebar";

export default function HomePage({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-52 md:flex-col md:fixed md:inset-y-0">
          <Sidebar />
        </div>
      </div >
      <main className="md:pl-52">
        {children}
      </main>
    </div>
  )
}