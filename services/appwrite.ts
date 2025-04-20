import { TrendingMovie } from '@/interfaces/interfaces';

// Mock function to get trending movies
// In a real app, this would connect to Appwrite backend
export const getTrendingMovies = async (): Promise<TrendingMovie[]> => {
  // This is a mock implementation
  // Replace with actual Appwrite implementation when ready
  
  // Mock data for trending movies
  const mockTrendingMovies: TrendingMovie[] = [
    {
      searchTerm: 'Avengers',
      movie_id: 299534,
      title: 'Avengers: Endgame',
      count: 120,
      poster_url: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    },
    {
      searchTerm: 'Star Wars',
      movie_id: 11,
      title: 'Star Wars: A New Hope',
      count: 95,
      poster_url: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    },
    {
      searchTerm: 'Inception',
      movie_id: 27205,
      title: 'Inception',
      count: 87,
      poster_url: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    },
    {
      searchTerm: 'Joker',
      movie_id: 475557,
      title: 'Joker',
      count: 76,
      poster_url: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    },
    {
      searchTerm: 'Parasite',
      movie_id: 496243,
      title: 'Parasite',
      count: 65,
      poster_url: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    },
  ];
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return mockTrendingMovies;
};
