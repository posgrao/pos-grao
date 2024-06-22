import React from 'react'
import SliderComponent from '../components/SliderComponent'
import FeatureComponent from '../components/FeatureComponent'
import ArticleCardsComponent from '../components/ArticleCardsComponent '
import AboutUs from '../components/AboutUs'

export default function Home() {
  return (
    <div>
      <FeatureComponent />
     <SliderComponent />
     <ArticleCardsComponent />
     <AboutUs />
    </div>
  )
}
