import fetcher from '@/shared/remotes';
import { Genre, Song } from '../types/Song.type';

export const getHighLikedSongs = async (genre: Genre): Promise<Song[]> => {
  const query = genre === 'ALL' ? '' : `?genre=${genre}`;

  return await fetcher(`/songs/high-liked${query}`, 'GET');
};
