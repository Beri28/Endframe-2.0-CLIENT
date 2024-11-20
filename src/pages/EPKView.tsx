import { Facebook, Youtube } from 'lucide-react';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export const instagram = <SocialIcon url="https://instagram.com/NevilleAjim" />
export const twitter = <SocialIcon url="https://x.com/NevilleAjim" />

interface Performance {
  event: string;
  location: string;
}

interface PlaylistItem {
  year: number;
  title: string;
  label?: string;
}

interface Award {
  title: string;
  category: string;
}

interface ArtistProfileProps {
  name: string;
  title: string;
  biography: string;
  performances: Performance[];
  playlist: PlaylistItem[];
  awards: Award[];
}

const ArtistProfile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {/* Header Section */}
      <div className="bg-red-500 text-black p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">CHARLES ARTHUR</h1>
        <h2 className="text-xl md:text-2xl">LOCKO SAMBA</h2>
        <p className="text-lg md:text-xl mt-2">SINGER/SONGWRITER</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* About Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4">ABOUT LOCKO</h2>
            <p className="text-base md:text-lg">
              Locko, whose civil name is Charles Arthur Locko Samba, born on May 8, 1992, in Douala, is a Cameroonian singer, songwriter, and beatmaker of RnB and Afropop. He becomes known by sharing a large number of popular song covers on YouTube. He is the first Cameroonian to launch a YouTube channel for covers. At the time, he goes by the pseudonym Shawney Locko.
            </p>
          </section>

          {/* Performances Section */}
          <section>
            <h3 className="text-xl font-bold mb-2">Performances</h3>
            <ul className="space-y-2">
              <li>Coke Studio Africa 2017 show in Nairobi</li>
              <li>pan-African show</li>
            </ul>
          </section>

          {/* Playlist Section */}
          <section>
            <h3 className="text-xl font-bold mb-2">Playlist</h3>
            <ul className="space-y-2">
              <li>2018: The Bridge (BIG Dreams Entertainment)</li>
              <li>2019: Cloud Nine</li>
              <li>2021: Era</li>
            </ul>
          </section>
        </div>

        <div className="space-y-6">
          {/* Profile Image */}
          <div className="relative">
            <img 
              src="/api/placeholder/400/400" 
              alt="Locko Samba"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2 text-lg hover:text-gray-600">
              <span>{instagram}</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-lg hover:text-gray-600">
              <span>{twitter}</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-lg hover:text-gray-600">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="flex items-center gap-2 text-lg hover:text-gray-600">
              <Youtube className="w-6 h-6" />
            </a>
          </div>

          {/* Awards Section */}
          <section>
            <h3 className="text-xl font-bold mb-2">Awards</h3>
            <ul className="space-y-2">
              <li>Best Male Artist</li>
              <li>Best videogram</li>
              <li>Best musical revelation</li>
              <li>pan-African show</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;