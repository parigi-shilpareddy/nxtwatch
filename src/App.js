import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css'

import ThemeContext from './context/ThemeContext'

import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoPlayer from './components/VideoPlayer'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, activeTab: 'Home', savedVideos: []}

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  addVideo = savedVideoDetails => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.find(
      each => each.id === savedVideoDetails.id,
    )
    if (videoObject) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos],
      }))
    } else {
      const updatedList = [...savedVideos, savedVideoDetails]
      this.setState({savedVideos: updatedList})
    }
  }

  deleteVideo = id => {
    const {savedVideos} = this.state
    const updatedList = savedVideos.filter(each => each.id !== id)
    this.setState({savedVideos: updatedList})
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    console.log(savedVideos)
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          activeTab,
          changeTab: this.changeTab,
          savedVideos,
          addVideo: this.addVideo,
          deleteVideo: this.deleteVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoPlayer} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
