import React from 'react'

const ThemeContext = React.createContext({
  activeTab: 'Home',
  isDarkTheme: false,
  saved: false,
  toggleTheme: () => {},
  changeTab: () => {},
  savedVideos: [],
  addVideo: () => {},
  deleteVideo: () => {},
  changeSave: () => {},
})

export default ThemeContext
