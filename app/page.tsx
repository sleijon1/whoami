'use client';

import { useState } from 'react';
import { profile, interests, background, beyondCode, backgroundDisclaimer, senecaQuote } from '@/app/lib/data';

const PI_DIGITS = '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';

export default function Home() {
  const [piIndex, setPiIndex] = useState(-1);

  return (
    <div className="terminal">
      <div className="terminal-content">
        {/* Header */}
        <div className="header">
          <div className="prompt">
             {profile?.name || 'Developer'}
            <span
              className="pi-clicker"
              onClick={() => setPiIndex(piIndex === -1 ? 0 : (piIndex + 1) % PI_DIGITS.length)}
              title="Click to reveal π digits"
            >
              {piIndex === -1 ? 'π' : PI_DIGITS[piIndex]}
            </span>
          </div>
          <div className="subtitle">🇸🇪 Sweden | Software Engineer | Science Enthusiast</div>
        </div>

        <div className="section-divider"></div>

        {/* Quote */}
        <div className="quote">{senecaQuote}</div>

        {/* About */}
        <>
          <div className="prompt"> about</div>
          <div className="content">
            <p>{profile.title}</p>
            <p>{profile.bio}</p>
          </div>
          <div className="section-divider"></div>
        </>


        {/* Interests */}
        {interests.length > 0 && (
          <>
            <div className="prompt"> interests</div>
            <div className="content">
              {interests.map((interest) => (
                <div key={interest.name} className="interest-item">
                  <div className="interest-title">→ {interest.name}</div>
                  <div className="interest-desc">{interest.description}</div>
                </div>
              ))}
            </div>
            <div className="section-divider"></div>
          </>
        )}

        {/* Background */}
        {background.length > 0 && (
          <>
            <div className="prompt"> background</div>
            <div className="background-disclaimer">{backgroundDisclaimer}</div>
            <div className="content">
              {background.map((item) => (
                <div key={item.title} className="background-item">
                  <div className="background-title">→ {item.title}</div>
                  <div className="background-desc">{item.description}</div>
                </div>
              ))}
            </div>
            <div className="section-divider"></div>
          </>
        )}


        {/* Beyond Code */}
        <div className="prompt"> beyond code</div>
        <div className="content">
          <p className="beyond-code-text">{beyondCode}</p>
        </div>
                    <div className="section-divider"></div>


        {/* Links */}
        <>
          <div className="prompt"> links</div>
          <div className="content">
            <div className="link-item">
              <a href={profile.gitHubUrl} target="_blank" rel="noopener noreferrer">
                github
              </a>
            </div>
            <div className="link-item">
              <a href={profile.linkedInUrl} target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
            </div>
            <div className="link-item">
              <a href={profile.websiteUrl} target="_blank" rel="noopener noreferrer">
                website
              </a>
            </div>
            <div className="link-item">
              <a href={profile.substackUrl} target="_blank" rel="noopener noreferrer">
                substack
              </a>
            </div>
          </div>
        </>


        

        <div className="prompt" style={{ marginTop: '2rem' }}>
          _
        </div>
      </div>
    </div>
  );
}
