import React, { useState, useEffect, useRef, useCallback } from 'react';
import './BackgroundMusic.css';
import audioFile from '../../assets/audio/epic_motivation.mp3';

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.15); // Low volume (15%)
  const [isExpanded, setIsExpanded] = useState(false);

  // Sound source path with public directory fallback for Epic Motivation soundtrack
  const soundSrc = process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}/audio/epic_motivation.mp3` : audioFile;

  // Set audio properties on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
    }
  }, [volume]);

  // Reliable Play Function
  const playAudio = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
    const promise = audioRef.current.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Autoplay deferred until user action:', err);
          setIsPlaying(false);
        });
    }
  }, [isMuted, volume]);

  // Attempt initial playback or listen to first user click anywhere
  useEffect(() => {
    playAudio();

    const handleFirstTouch = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio();
      }
      window.removeEventListener('click', handleFirstTouch);
      window.removeEventListener('touchstart', handleFirstTouch);
    };

    window.addEventListener('click', handleFirstTouch);
    window.addEventListener('touchstart', handleFirstTouch);

    return () => {
      window.removeEventListener('click', handleFirstTouch);
      window.removeEventListener('touchstart', handleFirstTouch);
    };
  }, [playAudio]);

  // Toggle Play / Pause directly
  const togglePlay = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = isMuted ? 0 : volume;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error('Play error:', err);
          setIsPlaying(false);
        });
    }
  };

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    if (!audioRef.current) return;
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    audioRef.current.muted = newMuteState;
  };

  const handleVolumeChange = (e) => {
    if (e) e.stopPropagation();
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  return (
    <div className="bg-music-container">
      <audio ref={audioRef} src={soundSrc} preload="auto" loop />

      {!isExpanded ? (
        /* PURE CIRCULAR MUSIC ICON (NO TEXT) */
        <button
          className={`circular-music-btn ${isPlaying ? 'playing' : 'paused'}`}
          onClick={togglePlay}
          onContextMenu={(e) => {
            e.preventDefault();
            setIsExpanded(true);
          }}
          title={isPlaying ? 'Pause Epic Motivation Sound' : 'Play Epic Motivation Sound'}
          aria-label={isPlaying ? 'Pause Background Music' : 'Play Background Music'}
        >
          {isPlaying ? (
            <div className="equalizer-circle">
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </div>
          ) : (
            <svg className="play-svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}

          {/* Quick Expand Settings Icon */}
          <span
            className="mini-expand-dot"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
            title="Volume Controls"
          >
            ⚙
          </span>
        </button>
      ) : (
        /* EXPANDED CONTROL POPUP */
        <div className="music-expanded-panel">
          <button
            className="expanded-play-btn"
            onClick={togglePlay}
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <div className="track-name-badge">
            <span>Epic Motivation</span>
          </div>

          <div className="volume-slider-wrap">
            <button className="panel-mute-btn" onClick={toggleMute}>
              {isMuted || volume === 0 ? (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button>
            <input
              type="range"
              min="0"
              max="0.5"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider-panel"
            />
          </div>

          <button className="panel-close-btn" onClick={() => setIsExpanded(false)} title="Close">
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default BackgroundMusic;
