import React from "react";
import "./footr.css";

const FacebookIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="#2563eb" d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z"/></svg>
);
const YouTubeIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="#FF0000" d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.08 0 12 0 12s0 3.92.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.5 20.5 12 20.5 12 20.5s7.5 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.92 24 12 24 12s0-3.92-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const InstagramIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#E1306C"/>
    <path fill="#fff" d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6zm6.406-8.406a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0z"/>
  </svg>
);

const Footr = () => (
  <footer className="simple-footer">
    <div className="footer-logo-text">Second Sight Foundation</div>
    <hr className="simple-footer-hr" />
    <div className="simple-footer-socials">
      <a href="https://www.facebook.com/secondsightfoundation" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon /></a>
      <a href="https://www.youtube.com/@secondsightfoundation" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><YouTubeIcon /></a>
      <a href="https://www.instagram.com/secondsightfoundationdelhi/?igsh=MXRibG9hZWZhaXVleQ%3D%3D#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon /></a>
    </div>
    <div className="simple-footer-copy">
      © 2025 Second Sight Foundation. All rights reserved.
    </div>
    <div className="simple-footer-message">
      If you're seeking authentic spiritual knowledge, stay connected with Guruji Manish Sharma Ji and take your journey forward with real guidance.
    </div>
  </footer>
);

export default Footr; 