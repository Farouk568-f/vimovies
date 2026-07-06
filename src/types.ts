export interface MovieOrShow {
  id: string;
  title: string;
  type: 'movie' | 'show';
  thumbnail: string;
  backdrop: string;
  genre: string[];
  year: number;
  rating: string;
  duration: string;
  description: string;
  trailerUrl?: string;
  downloadSize: string;
  ratingStars: number;
  trending?: boolean;
  featured?: boolean;
  seasonsCount?: number;
}

export interface LiveChannel {
  id: string;
  channelName: string;
  logoText: string;
  themeColor: string;
  diagonalPattern: boolean;
  currentProgram: string;
  nextProgram: string;
  programProgress: number; // 0 to 100
  startTime: string;
  endTime: string;
  genre: string;
  backdrop: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  type: 'movie' | 'show';
  thumbnail: string;
  progress: number; // 0 to 100
  size: string;
  downloadSpeed: string; // e.g. "12.4 MB/s"
  status: 'downloading' | 'completed' | 'paused';
}

export type ActiveTab = 'home' | 'explorer' | 'downloads' | 'tv-simulator' | 'apk-center';
