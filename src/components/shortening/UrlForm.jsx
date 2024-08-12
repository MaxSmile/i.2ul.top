// src/components/shortening/UrlForm.jsx

import React, { useState } from 'react'


const API_WRITE_SHRTN_DATA =
  process.env.API_WRITE_SHRTN_DATA || 'http://localhost:3001/urls'

const UrlForm = ({ onResult }) => {
  const [url, setUrl] = useState('https://vasilkoff.com/portfolio')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(API_WRITE_SHRTN_DATA, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originalURL: url,
        }),
      })

      if (response.ok) {
        const data = await response.json()
        onResult({ success: true, mappingID: data.mappingID })
      } else {
        const errorData = await response.json()
        onResult({ success: false, error: errorData.error })
      }
    } catch (error) {
      onResult({ success: false, error: error.message })
    }
    try {
      window.location.hash = '#result'
    } catch(ex) {
      console.log("Navigation attempt:",ex)
    }
  }

  const isValidURL = (url) => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' +
        '((([a-zA-Z0-9$\\-_@.&+!*\\(\\),])|([a-zA-Z0-9][-a-zA-Z0-9]{0,61}[a-zA-Z0-9])\\.)+[a-zA-Z]{2,})' +
        '(\\:\\d{1,5})?' +
        '(\\/[-a-zA-Z0-9()@:%_+.~#?&//=]*)?' +
        '(\\?[;&a-zA-Z0-9%_+.~#?&//=]*)?' +
        '(\\#[-a-zA-Z0-9_]*)?$',
      'i',
    )
    return !!urlPattern.test(url)
  }

  return (
    <div className="bg-turn-right-arrow ">
      <p className="text-base lg:text-lg font-light ml-8 mt-3">
        Put your long URL in the box below
      </p>
      <div className="lg:pl-16  mt-16 lg:mt-0">
        <form
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter your long URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="p-2 border-2 border-dark rounded w-full mt-0 lg:w-3/4 md:ml-2"
          />
          <button type="submit" className="button-teal mt-4">
            Shorten URL
          </button>
        </form>
      </div>
    </div>
  )
}

export default UrlForm
