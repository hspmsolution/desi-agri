import React from 'react';
import './Testimonial.css'

const Testimonial = (props) => {
  const { id } = props.data;
  const embedUrl = `//www.youtube.com/embed/${id}?rel=0&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;

  let player = null;

  const createPlayer = () => {
    player = new window.YT.Player(iframeRef, {
      events: {
        onReady: (event) => {
          props.onReady({ player: event.target });
        },
        onStateChange: (event) => {
          props.onChange({
            player: event.target,
            status: event.data
          });
        }
      }
    });
  };

  const iframeRef = React.useRef(null);

  React.useEffect(() => {
    const tag = window.document.createElement('script');
    tag.src = '//www.youtube.com/iframe_api';
    tag.async = true;
    const firstScriptTag = document.querySelector('script');
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };
  }, []);

  React.useEffect(() => {
    if (player && props.isPlaying) {
      player.playVideo();
    } else if (player && !props.isPlaying) {
      player.pauseVideo();
    }
  }, [props.isPlaying]);

  return (
    <div>
    <figure className='testimonialFig'>
      <iframe
        title="Testimonial Video"
        ref={iframeRef}
        width="100%"
        height="100%"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </figure>
    </div>
  );
};

function TestimonialSec() {

  const videos = [
    { id: 'XbOvhGALk-I' },
    { id: 'D-YMLzwiU_k' },
    { id: 'b465TQETEhc' },
    { id: '9oSNH788oY0' },
    { id: 'MwvWq9b1syE' },
    { id: 'UtC4QGoefjc' },
  ];

  return(
    <div  id='testimonial'>
      <div id='app'>
        {videos.map(video => (
          <Testimonial key={video.id} data={video} />
          ))}
      </div>
    </div>
  );
}

export { TestimonialSec };
