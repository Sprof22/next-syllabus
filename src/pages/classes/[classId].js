import React from 'react'

function ClassItem() {
  return (
    <div>
        <h1>{}</h1>
    </div>
  )
}

export default ClassItem

export async function getServerSideProps(context){
    const {params} = context
    
    const response = await fetch('http://localhost:3004/classes?category=')

}