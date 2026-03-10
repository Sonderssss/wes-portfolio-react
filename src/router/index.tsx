import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import ContactView from '../views/ContactView'
import ProjectsView from '../views/ProjectsView'
import NotFoundView from '../views/NotFoundView'

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/contact" element={<ContactView />} />
      <Route path="/projects" element={<ProjectsView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  )
}

export default AppRouter
