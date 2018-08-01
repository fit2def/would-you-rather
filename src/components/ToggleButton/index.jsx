import React from 'react';
import './ToggleButton.css'

export default function ToggleButton({ label, on, toggle }) {
  return (
    <button
      className={on ? 'toggled-on' : 'toggled-off'}
      disabled={on}
      onClick={toggle}
    >{label}</button>
  )
}