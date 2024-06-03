import React from 'react';
import dynamic from 'next/dynamic'
const theme = 'light-theme'

const Index = () => {
    
const MainTheme = dynamic(() => import(`@/themes/${theme}`))
  return (
  	<main>
      <MainTheme/>
    </main>
  )
}

export default Index