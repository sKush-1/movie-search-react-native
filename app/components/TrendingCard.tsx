import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { TrendingCardProps } from '@/interfaces/interfaces'
import { images } from '@/constants/images'

const TrendingCard = ({ movie, index }: TrendingCardProps) => {
  const router = useRouter()
  
  const handlePress = () => {
    router.push(`/movies/${movie.movie_id}`)
  }
  
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      className="w-[150px]"
    >
      <View className="rounded-lg overflow-hidden relative">
        <Image 
          source={{ uri: movie.poster_url }}
          className="w-full h-[200px]"
          resizeMode="cover"
        />
        <Image 
          source={images.rankingGradient}
          className="absolute bottom-0 left-0 right-0 h-[80px]"
          resizeMode="stretch"
        />
        <View className="absolute bottom-2 left-2">
          <Text className="text-white font-bold text-lg">#{index + 1}</Text>
          <Text className="text-white text-xs">{movie.count} searches</Text>
        </View>
      </View>
      <Text 
        className="text-white text-sm mt-1 font-medium" 
        numberOfLines={2}
      >
        {movie.title}
      </Text>
    </TouchableOpacity>
  )
}

export default TrendingCard

const styles = StyleSheet.create({})
