import Sidebar from "@/components/sidebar";

export default function HomePage() {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar />
      </div>
    </div>
  )
}