import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";


export default function AboutUsPage() {
  return (
    <div>
      <Navbar />
    <div className="flex justify-center items-center min-h-screen">
        <div className="bg-gray-100 border border-gray-300 p-8 rounded-lg shadow-lg text-center w-full max-w-4xl mx-auto leading-relaxed">
            <h2 className="text-3xl font-bold text-black mb-6">Introduction</h2>
            <p className="text-gray-700 mb-4">
                Weekend Knocks is an Indian esports startup seeking to transform the ecosystem by nurturing new talent, fostering community connections, enhancing brand commitments, and redefining league experiences.
            </p>
            <h2 className="text-3xl font-bold text-black mb-6">Player-Centric Environment</h2>
            <p className="text-gray-700 mb-4">
                At Weekend Knocks, we prioritize our players above all, creating a player-centric environment that respects and values their contributions.
            </p>
            <h2 className="text-3xl font-bold text-black mb-6">Talent Scouting and Development</h2>
            <p className="text-gray-700">
                We scout undiscovered talents through grassroots initiatives and groom them into icons who knit the gaming world together.
            </p>
        </div>
    </div>
      <Footer />
    </div>

  );

}
